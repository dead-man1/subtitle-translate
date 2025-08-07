// --- Global Variables & Initial Setup ---
let uploadedFile = null;
let translationMemory = JSON.parse(localStorage.getItem('translationMemory') || '{}');

// --- State Management for Wizard and Translation ---
let currentStep = 1;
let firstChunkTime = 0;
let failedChunksData = [];
let currentAllTranslatedEntries = [];
let currentOriginalFileName = 'translation';
let currentOriginalFormat = 'srt';
let currentLang = 'English';
let currentApiKey = '';
let currentBaseDelay = 1000;
let currentQuotaDelay = 60000;
let currentModel = 'gemini-1.5-flash-latest';
let currentPromptTemplate = '';
let currentTemperature = 0.7;
let currentTopP = 0.95;
let currentTopK = 40;
let currentMaxOutputTokens = 8192;
let currentStopSequencesStr = '';

const proxyUrl = 'https://middleman.yebekhe.workers.dev';

// --- DOM Element References (to be populated on DOMContentLoaded) ---
let htmlElement, themeToggle, languageToggle, clearMemoryButton, translateForm, dropzoneElement, srtTextInput, apiKeyInput, rememberMeCheckbox, useProxyCheckbox, togglePasswordBtn, langInput, modelSelect, temperatureInput, topPInput, topKInput, maxOutputTokensInput, stopSequencesInput, translationPromptTextarea, progressContainer, progressBar, progressText, chunkStatusSpan, timeEstimateSpan, downloadLinkContainer, errorMessageDiv, submitButton, pageTitle, uploadInstructions;
let stepSections, stepIndicators, formContainer, resultsArea, startNewTranslationBtn;
let nextToStep2Btn, nextToStep3Btn, backToStep1Btn, backToStep2Btns;
let selectFileInputBtn, selectTextInputBtn, fileInputContainer, textInputContainer;
let fileFeedbackDiv, fileNameSpan, removeFileBtn, errorContentDiv;
let myDropzone;

// --- WIZARD NAVIGATION LOGIC ---
function goToStep(stepNumber) {
    currentStep = stepNumber;
    stepSections.forEach(section => section.classList.remove('active'));
    const targetSection = document.getElementById(`step-${stepNumber}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    stepIndicators.forEach((indicator, index) => {
        const step = index + 1;
        const textSpans = indicator.querySelectorAll('span');
        indicator.classList.remove('border-primary-600', 'border-green-500', 'border-gray-200', 'dark:border-gray-700');
        textSpans.forEach(span => span.classList.remove('text-primary-600', 'text-green-600', 'text-gray-500', 'dark:text-gray-400', 'dark:text-green-400'));

        if (step < stepNumber) { // Completed
            indicator.classList.add('border-green-500');
            textSpans.forEach(span => span.classList.add('text-green-600', 'dark:text-green-400'));
        } else if (step === stepNumber) { // Active
            indicator.classList.add('border-primary-600');
            textSpans.forEach(span => span.classList.add('text-primary-600'));
        } else { // Future
            indicator.classList.add('border-gray-200', 'dark:border-gray-700');
            textSpans.forEach(span => span.classList.add('text-gray-500', 'dark:text-gray-400'));
        }
    });
    window.scrollTo(0, 0);
}

function checkStep1Completion() {
    if (nextToStep2Btn) nextToStep2Btn.disabled = apiKeyInput.value.trim() === '';
}

function checkStep2Completion() {
    const isFileReady = uploadedFile !== null;
    const isTextReady = srtTextInput.value.trim() !== '';
    if (nextToStep3Btn) nextToStep3Btn.disabled = !(isFileReady || isTextReady);
}

function resetWizard() {
    if (resultsArea) resultsArea.style.display = 'none';
    if (formContainer) formContainer.style.display = 'block';
    if (myDropzone) myDropzone.removeAllFiles(true);
    if (srtTextInput) srtTextInput.value = '';

    if (fileFeedbackDiv) fileFeedbackDiv.style.display = 'none';
    if (dropzoneElement) dropzoneElement.style.display = 'block';

    goToStep(1);
    checkStep1Completion();
    checkStep2Completion();
}

// --- CORE UTILITY FUNCTIONS ---
function updateTheme(setLight) {
    const themeIcon = themeToggle?.querySelector('i');
    if (!themeIcon) return;
    htmlElement.classList.toggle('dark', !setLight);
    themeIcon.classList.toggle('fa-sun', setLight);
    themeIcon.classList.toggle('fa-moon', !setLight);
    localStorage.setItem('theme', setLight ? 'light' : 'dark');
}

function updateLanguage(lang) {
    // This is a simplified i18n handler. Expand with a proper library or more key-value pairs for full translation.
    const isRTL = lang === 'Persian';
    document.documentElement.lang = isRTL ? 'fa' : 'en';
    if (pageTitle) pageTitle.textContent = isRTL ? 'مترجم زیرنویس' : 'Subtitle Translator';
    if (uploadInstructions) uploadInstructions.textContent = isRTL ? 'در ۳ مرحله ساده زیرنویس خود را ترجمه کنید' : 'Translate your subtitles in 3 easy steps';
    localStorage.setItem('language', lang);
}

function togglePasswordVisibility() {
    const icon = togglePasswordBtn?.querySelector('i');
    if (!icon || !apiKeyInput) return;
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        apiKeyInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function saveApiKey() {
    if (!rememberMeCheckbox || !apiKeyInput) return;
    if (rememberMeCheckbox.checked && apiKeyInput.value) {
        localStorage.setItem('savedApiKey', apiKeyInput.value);
    } else {
        localStorage.removeItem('savedApiKey');
    }
}

function loadApiKey() {
    if (!apiKeyInput || !rememberMeCheckbox) return;
    const savedApiKey = localStorage.getItem('savedApiKey');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        rememberMeCheckbox.checked = true;
    }
    checkStep1Completion();
}

function showError(message, type = 'error') {
    if (!errorMessageDiv || !errorContentDiv) return;
    
    const titleEl = errorMessageDiv.querySelector('h3');
    const iconEl = errorMessageDiv.querySelector('i');
    
    if (!message) {
        errorMessageDiv.style.display = 'none';
        return;
    }

    errorMessageDiv.className = 'mt-6 p-4 rounded-xl flex items-start'; // Reset classes
    iconEl.className = 'fas fa-exclamation-circle text-xl'; // Reset icon classes

    if (type === 'success') {
        errorMessageDiv.classList.add('bg-green-50', 'dark:bg-green-900/30', 'border', 'border-green-200', 'dark:border-green-700');
        iconEl.classList.add('text-green-500', 'dark:text-green-400', 'fa-check-circle');
        titleEl.className = 'text-md font-bold text-green-800 dark:text-green-200';
        titleEl.textContent = 'Success';
    } else { // 'error'
        errorMessageDiv.classList.add('bg-red-50', 'dark:bg-red-900/30', 'border', 'border-red-200', 'dark:border-red-700');
        iconEl.classList.add('text-red-500', 'dark:text-red-400');
        titleEl.className = 'text-md font-bold text-red-800 dark:text-red-200';
        titleEl.textContent = 'An Error Occurred';
    }
    
    errorContentDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
}

function hideError() {
    if (errorMessageDiv) errorMessageDiv.style.display = 'none';
}

function resetUIForNewTranslation() {
    if (progressContainer) progressContainer.style.display = 'block';
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0% Complete';
    if (chunkStatusSpan) chunkStatusSpan.textContent = 'Initializing...';
    if (timeEstimateSpan) timeEstimateSpan.textContent = 'Estimating...';
    const downloadContainer = document.getElementById('download-container');
    if (downloadContainer) downloadContainer.style.display = 'none';
    hideError();
    const retryContainer = document.getElementById('retry-container');
    if (retryContainer) retryContainer.remove();
    failedChunksData = [];
    currentAllTranslatedEntries = [];
}

function updateProgress(chunkIndex, totalChunks, startTime) {
    if (!progressContainer || progressContainer.style.display === 'none') return;
    const currentDisplayChunk = chunkIndex + 1;
    const progressPercentage = totalChunks > 0 ? Math.round((currentDisplayChunk / totalChunks) * 100) : 0;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage}% Complete`;
    chunkStatusSpan.textContent = `Processing chunk: ${currentDisplayChunk}/${totalChunks}`;

    if (chunkIndex === 0 && startTime && totalChunks > 1) {
        timeEstimateSpan.textContent = 'Calculating...';
    } else if (firstChunkTime > 0 && chunkIndex > 0 && totalChunks > 1) {
        const remainingChunks = totalChunks - currentDisplayChunk;
        if (remainingChunks >= 0) {
            const estimatedRemainingTime = remainingChunks * firstChunkTime;
            const minutes = Math.floor(estimatedRemainingTime / 60);
            const seconds = Math.floor(estimatedRemainingTime % 60);
            timeEstimateSpan.textContent = `~${minutes}m ${seconds}s remaining`;
        }
    }
}

// --- TRANSLATION MEMORY, PARSING, AND API FUNCTIONS ---
function updateTranslationMemory(sourceText, translatedText, lang) {
    if (!sourceText || !translatedText || typeof sourceText !== 'string' || typeof translatedText !== 'string') return;
    const trimmedSource = sourceText.trim();
    const trimmedTranslated = translatedText.trim();
    if (!trimmedSource || !trimmedTranslated) return;
    if (!translationMemory[lang]) {
        translationMemory[lang] = {};
    }
    translationMemory[lang][trimmedSource] = trimmedTranslated;
    try {
        localStorage.setItem('translationMemory', JSON.stringify(translationMemory));
    } catch (e) {
        console.error("Error saving translation memory:", e);
        showError("Warning: Could not save to translation memory (storage might be full).");
    }
}

function findInTranslationMemory(text, lang) {
    if (!text || typeof text !== 'string') return undefined;
    return translationMemory[lang]?.[text.trim()];
}

function clearTranslationMemory() {
    if (confirm('Are you sure you want to clear all saved translations from memory?')) {
        translationMemory = {};
        localStorage.removeItem('translationMemory');
        alert('Translation memory cleared!');
    }
}

function parseSubtitle(content, format) {
    switch (format) {
        case 'vtt': return parseVTT(content);
        case 'ssa': case 'ass': return parseSSA_ASS(content);
        case 'srt': default: return parseSRTInternal(content);
    }
}

function parseVTT(vttContent) {
    const entries = [];
    let currentEntry = null;
    let lineBuffer = [];
    let entryCount = 0;
    const lines = vttContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n').split('\n');
    
    if (!lines[0].startsWith('WEBVTT')) {
        console.warn("VTT file may be invalid: does not start with WEBVTT header.");
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        const timeStampMatch = trimmedLine.match(/^(\d{2}:)?\d{2}:\d{2}[.,]\d{3}\s*-->\s*(\d{2}:)?\d{2}:\d{2}[.,]\d{3}/);

        if (timeStampMatch) {
            if (currentEntry) {
                currentEntry.text = lineBuffer.join('\n');
                entries.push(currentEntry);
            }
            entryCount++;
            const prevLine = (i > 0) ? lines[i - 1].trim() : '';
            const id = (prevLine && !prevLine.includes('-->') && prevLine !== '') ? prevLine : `auto_${entryCount}`;
            currentEntry = { id: id, timeStamp: trimmedLine, text: null, otherData: { lineType: 'cue' } };
            lineBuffer = [];
        } else if (trimmedLine === '') {
            if (currentEntry) {
                currentEntry.text = lineBuffer.join('\n');
                entries.push(currentEntry);
                currentEntry = null;
            }
            entries.push({ id: null, timeStamp: null, text: null, otherData: { lineType: 'metadata', originalLine: line } });
        } else if (currentEntry) {
            lineBuffer.push(line);
        } else {
            entries.push({ id: null, timeStamp: null, text: null, otherData: { lineType: 'metadata', originalLine: line } });
        }
    }
    if (currentEntry) {
        currentEntry.text = lineBuffer.join('\n');
        entries.push(currentEntry);
    }
    return entries;
}

function parseSSA_ASS(ssaContent) {
    const entries = [];
    let inEventsSection = false;
    let formatFields = [];
    let dialogueCount = 0;
    const lines = ssaContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n').split('\n');
    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('[')) {
            inEventsSection = trimmedLine.toLowerCase() === '[events]';
            entries.push({ otherData: { originalLine: line, lineType: 'section' } });
            continue;
        }
        if (inEventsSection) {
            if (trimmedLine.toLowerCase().startsWith('format:')) {
                formatFields = trimmedLine.substring(7).split(',').map(f => f.trim().toLowerCase());
                entries.push({ otherData: { originalLine: line, lineType: 'format' } });
            } else if (trimmedLine.toLowerCase().startsWith('dialogue:')) {
                dialogueCount++;
                const parts = trimmedLine.substring(9).split(',');
                const dialogueData = {};
                let textIndex = -1;
                for (let i = 0; i < formatFields.length; i++) {
                    const fieldName = formatFields[i];
                    if (fieldName === 'text') {
                        textIndex = i;
                        dialogueData[fieldName] = parts.slice(i).join(',');
                        break;
                    }
                    dialogueData[fieldName] = parts[i] || '';
                }
                if (textIndex === -1) {
                    entries.push({ otherData: { originalLine: line, lineType: 'malformed_dialogue' } });
                    continue;
                }
                entries.push({
                    id: `D${dialogueCount}`,
                    timeStamp: `${dialogueData['start'] || '0:00:00.00'} --> ${dialogueData['end'] || '0:00:00.00'}`,
                    text: dialogueData['text'] || '',
                    otherData: { originalLine: line, lineType: 'dialogue', fields: dialogueData, formatOrder: formatFields }
                });
            } else {
                entries.push({ otherData: { originalLine: line, lineType: 'other_event' } });
            }
        } else {
            entries.push({ otherData: { originalLine: line, lineType: 'metadata' } });
        }
    }
    return entries;
}

function parseSRTInternal(srtContent) {
    const blocks = srtContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n').split(/\n\s*\n/);
    const entries = [];
    for (const block of blocks) {
        const trimmed = block.trim();
        if (!trimmed) continue;
        const lines = trimmed.split('\n');
        if (lines.length < 2) continue;
        const id = lines[0];
        const timeStamp = lines[1];
        const text = lines.slice(2).join('\n');
        if (id && timeStamp && timeStamp.includes('-->')) {
            entries.push({ id, timeStamp, text, otherData: { lineType: 'cue' } });
        }
    }
    return entries;
}

function reconstructSubtitle(entries, format) {
    switch (format) {
        case 'vtt':
            return entries.map(e => e.otherData.lineType === 'cue' ? `${e.id}\n${e.timeStamp}\n${e.text}` : e.otherData.originalLine).join('\n');
        case 'ssa':
        case 'ass':
            return entries.map(e => {
                if (e.otherData.lineType === 'dialogue') {
                    const fields = e.otherData.fields;
                    fields['text'] = e.text;
                    const reconstructedParts = e.otherData.formatOrder.map(fieldName => fields[fieldName] || '');
                    return `Dialogue: ${reconstructedParts.join(',')}`;
                }
                return e.otherData.originalLine;
            }).join('\n');
        case 'srt':
        default:
            return entries.filter(e => e.otherData.lineType === 'cue').map(e => `${e.id}\n${e.timeStamp}\n${e.text}`).join('\n\n') + '\n\n';
    }
}

function getMimeType(format) {
    switch (format) {
        case 'srt': return 'text/srt';
        case 'vtt': return 'text/vtt';
        default: return 'text/plain';
    }
}

function splitIntoChunks(array, chunkCount) {
    const chunks = [];
    const size = Math.ceil(array.length / chunkCount);
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

async function translateChunk(chunk, apiKey, baseDelayMs, quotaDelayMs, lang, chunkIndex, totalChunks, model, promptTemplate, temperature, topP, topK, maxOutputTokens, stopSequencesStr) {
    if (!chunk || chunk.length === 0) return [];
    
    const sourceTexts = chunk.map(entry => entry.text);
    const cachedTranslations = sourceTexts.map(text => findInTranslationMemory(text, lang));
    const textsToTranslateMap = new Map();
    sourceTexts.forEach((text, index) => {
        if (cachedTranslations[index] === undefined && text?.trim()) {
            textsToTranslateMap.set(index, text);
        } else {
            cachedTranslations[index] = cachedTranslations[index] || '';
        }
    });

    if (textsToTranslateMap.size === 0) {
        await new Promise(resolve => setTimeout(resolve, 50));
        return cachedTranslations;
    }

    const separator = "\n---\n";
    const indicesToTranslate = Array.from(textsToTranslateMap.keys());
    const combinedText = indicesToTranslate.map(index => textsToTranslateMap.get(index)).join(separator);
    const effectivePrompt = `${promptTemplate}\n\nTranslate the following text into ${lang}. Respond ONLY with the translated text lines, separated by "${separator.trim()}", maintaining the original number of separated lines.\n\nInput Text:\n${combinedText}`;

    const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const useProxy = useProxyCheckbox.checked;
    const targetUrl = useProxy ? proxyUrl : directUrl;
    
    const generationConfig = { temperature, topP, topK, maxOutputTokens };
    const stopSequencesArray = stopSequencesStr.split(',').map(s => s.trim()).filter(Boolean);
    if (stopSequencesArray.length > 0) generationConfig.stopSequences = stopSequencesArray;
    
    let finalPayload = {
        contents: [{ parts: [{ text: effectivePrompt }] }],
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ],
        generationConfig: generationConfig
    };
    if (useProxy) finalPayload.endpoint = directUrl;

    const fetchOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(finalPayload) };
    
    let attempts = 0;
    while (attempts < 4) {
        try {
            if (attempts > 0) await new Promise(resolve => setTimeout(resolve, baseDelayMs * Math.pow(2, attempts -1)));
            const response = await fetch(targetUrl, fetchOptions);
            if (!response.ok) {
                if (response.status === 429) {
                    await new Promise(resolve => setTimeout(resolve, quotaDelayMs));
                    continue;
                }
                throw new Error(`API error ${response.status}: ${await response.text()}`);
            }
            const data = await response.json();
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (responseText === undefined) throw new Error('Invalid API response structure.');
            
            const translatedLines = responseText.trim().split(separator.trim());
            if (responseText.trim() !== "" && translatedLines.length !== textsToTranslateMap.size) {
                 throw new Error(`Line count mismatch. Expected ${textsToTranslateMap.size}, got ${translatedLines.length}`);
            }
            
            const finalChunkTranslations = [...cachedTranslations];
            translatedLines.forEach((translatedText, i) => {
                const originalIndex = indicesToTranslate[i];
                finalChunkTranslations[originalIndex] = translatedText.trim();
                updateTranslationMemory(sourceTexts[originalIndex], translatedText.trim(), lang);
            });
            await new Promise(resolve => setTimeout(resolve, baseDelayMs));
            return finalChunkTranslations;

        } catch (error) {
            console.error(`Error in translateChunk ${chunkIndex} (Attempt ${attempts + 1}):`, error);
            attempts++;
            if (attempts >= 4) throw error;
        }
    }
    throw new Error(`Failed chunk ${chunkIndex} after multiple attempts.`);
}

// --- MAIN TRANSLATION ORCHESTRATION ---
async function handleTranslate(event) {
    event.preventDefault();
    formContainer.style.display = 'none';
    resultsArea.style.display = 'block';
    resetUIForNewTranslation();

    currentApiKey = apiKeyInput.value.trim();
    currentLang = langInput.value.trim();
    currentModel = modelSelect.value;
    currentTemperature = parseFloat(temperatureInput.value);
    
    let subtitleContent = '';
    const inputMethod = selectFileInputBtn.classList.contains('bg-primary-600') ? 'file' : 'text';

    if (inputMethod === 'file') {
        if (!uploadedFile) {
            showError('Please select a subtitle file.');
            resetWizard(); return;
        }
        currentOriginalFormat = uploadedFile.name.split('.').pop()?.toLowerCase() || 'srt';
        currentOriginalFileName = uploadedFile.name.replace(/\.[^/.]+$/, "");
        subtitleContent = await uploadedFile.text();
    } else {
        if (srtTextInput.value.trim() === '') {
            showError('Please paste SRT content.');
            resetWizard(); return;
        }
        currentOriginalFormat = 'srt';
        currentOriginalFileName = 'pasted_translation';
        subtitleContent = srtTextInput.value;
    }

    const startTime = performance.now();
    firstChunkTime = 0;

    try {
        const allParsedEntries = parseSubtitle(subtitleContent, currentOriginalFormat);
        const translatableEntries = allParsedEntries.filter(e => e.text?.trim());

        if (translatableEntries.length === 0) {
            progressContainer.style.display = 'none';
            showError("No translatable text found. Original file structure is preserved.", 'success');
            currentAllTranslatedEntries = allParsedEntries;
            generateAndDisplayDownloadLink(); return;
        }
        
        const chunkCount = Math.min(20, translatableEntries.length);
        const chunks = splitIntoChunks(translatableEntries, chunkCount);
        const totalChunks = chunks.length;
        const translatedTextMap = new Map();
        
        updateProgress(-1, totalChunks, startTime);

        for (let i = 0; i < totalChunks; i++) {
            updateProgress(i, totalChunks, i === 0 ? startTime : null);
            try {
                const chunkStartTime = performance.now();
                const translatedTexts = await translateChunk(chunks[i], currentApiKey, 1000, 60000, currentLang, i + 1, totalChunks, currentModel, "Translate...", currentTemperature, 0.95, 40, 8192, "");
                if (i === 0) firstChunkTime = (performance.now() - chunkStartTime) / 1000;
                chunks[i].forEach((entry, idx) => translatedTextMap.set(entry, translatedTexts[idx] || entry.text));
            } catch (chunkError) {
                console.error(`Chunk ${i + 1} failed permanently:`, chunkError);
                failedChunksData.push({ index: i, chunkData: chunks[i], reason: chunkError.message });
                chunks[i].forEach(entry => translatedTextMap.set(entry, entry.text));
            }
        }
        
        currentAllTranslatedEntries = allParsedEntries.map(entry => {
            if (translatableEntries.includes(entry)) {
                 return { ...entry, text: translatedTextMap.get(entry) || entry.text };
            }
            return entry;
        });

        generateAndDisplayDownloadLink();
        progressContainer.style.display = 'none';
        
        if (failedChunksData.length > 0) {
            showError(`Translation finished with ${failedChunksData.length} failed chunk(s).`);
            displayRetryButtons();
        } else {
            showError('Translation successful!', 'success');
        }

    } catch (error) {
        progressContainer.style.display = 'none';
        showError(`A critical error occurred: ${error.message}`);
    } finally {
        saveApiKey();
    }
}

function generateAndDisplayDownloadLink() {
    const downloadContainer = document.getElementById('download-container');
    if (!downloadContainer || !currentAllTranslatedEntries) return;
    try {
        const finalContent = reconstructSubtitle(currentAllTranslatedEntries, currentOriginalFormat);
        const mimeType = getMimeType(currentOriginalFormat);
        const blob = new Blob([`\uFEFF${finalContent}`], { type: `${mimeType};charset=utf-8` });
        const url = URL.createObjectURL(blob);
        const downloadFileName = `${currentOriginalFileName}_${currentLang}.${currentOriginalFormat}`;
        downloadLinkContainer.innerHTML = `<a href="${url}" download="${downloadFileName}" class="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-colors"><i class="fas fa-download mr-2"></i>Download Translated File</a>`;
        downloadContainer.style.display = 'block';
    } catch (error) {
        showError("Could not generate the download file.");
    }
}

function displayRetryButtons() {
    if (failedChunksData.length === 0) return;
    let retryContainer = document.getElementById('retry-container');
    if (!retryContainer) {
        retryContainer = document.createElement('div');
        retryContainer.id = 'retry-container';
        retryContainer.className = 'mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-lg';
        resultsArea.appendChild(retryContainer);
    }
    retryContainer.innerHTML = `<p class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Retry Failed Chunks:</p>`;
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'flex flex-wrap gap-2';
    failedChunksData.sort((a,b)=>a.index-b.index).forEach(failedChunk => {
        const button = document.createElement('button');
        button.className = 'px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md';
        button.dataset.chunkIndex = failedChunk.index;
        button.textContent = `Retry Chunk ${failedChunk.index + 1}`;
        button.addEventListener('click', handleManualRetry);
        buttonsContainer.appendChild(button);
    });
    retryContainer.appendChild(buttonsContainer);
}

async function handleManualRetry(event) {
    const button = event.target;
    button.disabled = true;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Retrying...`;
    
    const internalChunkIndex = parseInt(button.dataset.chunkIndex, 10);
    const failedChunkInfo = failedChunksData.find(fc => fc.index === internalChunkIndex);
    if (!failedChunkInfo) {
        showError("Error: Could not find data for this chunk retry.");
        button.remove(); return;
    }
    
    try {
        const translatedTexts = await translateChunk(failedChunkInfo.chunkData, currentApiKey, 1000, 60000, currentLang, internalChunkIndex + 1, 1, currentModel, "Translate...", currentTemperature, 0.95, 40, 8192, "");
        const retriedMap = new Map();
        failedChunkInfo.chunkData.forEach((entry, idx) => retriedMap.set(entry, translatedTexts[idx] || entry.text));
        
        currentAllTranslatedEntries = currentAllTranslatedEntries.map(entry => retriedMap.has(entry) ? { ...entry, text: retriedMap.get(entry) } : entry);

        failedChunksData = failedChunksData.filter(fc => fc.index !== internalChunkIndex);
        showError(`Chunk ${internalChunkIndex + 1} successfully translated!`, 'success');
        button.remove();
        generateAndDisplayDownloadLink();
        if (failedChunksData.length === 0) {
             const existingRetryContainer = document.getElementById('retry-container');
             if(existingRetryContainer) existingRetryContainer.remove();
        }
    } catch (retryError) {
        showError(`Retry failed for Chunk ${internalChunkIndex + 1}: ${retryError.message}`);
        button.disabled = false;
        button.textContent = `Retry Chunk ${internalChunkIndex + 1}`;
    }
}

// --- EVENT LISTENERS INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Get All DOM References ---
    htmlElement = document.documentElement;
    themeToggle = document.getElementById('themeToggle');
    languageToggle = document.getElementById('languageToggle');
    clearMemoryButton = document.getElementById('clear-memory-button');
    translateForm = document.getElementById('translate-form');
    dropzoneElement = document.getElementById("dropzone-upload");
    srtTextInput = document.getElementById('srt_text');
    apiKeyInput = document.getElementById('api_key');
    rememberMeCheckbox = document.getElementById('remember_me');
    useProxyCheckbox = document.getElementById('useProxyCheckbox');
    togglePasswordBtn = document.getElementById('togglePasswordBtn');
    langInput = document.getElementById('lang-input');
    modelSelect = document.getElementById('model');
    temperatureInput = document.getElementById('temperature');
    pageTitle = document.getElementById('page-title');
    uploadInstructions = document.getElementById('upload-instructions');
    progressContainer = document.getElementById('progress-container');
    progressBar = document.getElementById('progress');
    progressText = document.getElementById('progress-text');
    chunkStatusSpan = document.getElementById('chunk-status');
    timeEstimateSpan = document.getElementById('time-estimate');
    downloadLinkContainer = document.getElementById('download-link');
    errorMessageDiv = document.getElementById('error-message');
    errorContentDiv = document.getElementById('error-content');
    
    formContainer = document.getElementById('form-container');
    resultsArea = document.getElementById('results-area');
    stepSections = document.querySelectorAll('[data-step]');
    stepIndicators = document.querySelectorAll('[id^="step-"][id$="-indicator"]');
    nextToStep2Btn = document.getElementById('next-to-step-2');
    nextToStep3Btn = document.getElementById('next-to-step-3');
    backToStep1Btn = document.getElementById('back-to-step-1');
    backToStep2Btns = document.querySelectorAll('#back-to-step-2');
    startNewTranslationBtn = document.getElementById('start-new-translation');
    selectFileInputBtn = document.getElementById('select-file-input');
    selectTextInputBtn = document.getElementById('select-text-input');
    fileInputContainer = document.getElementById('file-input-container');
    textInputContainer = document.getElementById('text-input-container');
    fileFeedbackDiv = document.getElementById('file-feedback');
    fileNameSpan = document.getElementById('file-name');
    removeFileBtn = document.getElementById('remove-file');

    updateTheme(localStorage.getItem('theme') !== 'dark');
    updateLanguage(localStorage.getItem('language') || 'English');
    loadApiKey();
    goToStep(1);

    themeToggle.addEventListener('click', () => updateTheme(!htmlElement.classList.contains('dark')));
    languageToggle.addEventListener('click', () => updateLanguage(localStorage.getItem('language') === 'Persian' ? 'English' : 'Persian'));
    clearMemoryButton.addEventListener('click', clearTranslationMemory);
    togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    rememberMeCheckbox.addEventListener('change', saveApiKey);
    apiKeyInput.addEventListener('input', checkStep1Completion);
    
    nextToStep2Btn.addEventListener('click', () => goToStep(2));
    nextToStep3Btn.addEventListener('click', () => goToStep(3));
    backToStep1Btn.addEventListener('click', () => goToStep(1));
    backToStep2Btns.forEach(btn => btn.addEventListener('click', () => goToStep(2)));

    selectFileInputBtn.addEventListener('click', () => {
        selectFileInputBtn.classList.add('bg-primary-600', 'text-white', 'shadow');
        selectTextInputBtn.classList.remove('bg-primary-600', 'text-white', 'shadow');
        fileInputContainer.style.display = 'block'; textInputContainer.style.display = 'none';
        if (uploadedFile) srtTextInput.value = '';
        checkStep2Completion();
    });
    selectTextInputBtn.addEventListener('click', () => {
        selectTextInputBtn.classList.add('bg-primary-600', 'text-white', 'shadow');
        selectFileInputBtn.classList.remove('bg-primary-600', 'text-white', 'shadow');
        fileInputContainer.style.display = 'none'; textInputContainer.style.display = 'block';
        if (uploadedFile && myDropzone) myDropzone.removeAllFiles(true);
        checkStep2Completion();
    });

    srtTextInput.addEventListener('input', checkStep2Completion);
    removeFileBtn.addEventListener('click', () => myDropzone.removeAllFiles(true));
    translateForm.addEventListener('submit', handleTranslate);
    startNewTranslationBtn.addEventListener('click', resetWizard);

    Dropzone.autoDiscover = false;
    if (dropzoneElement) {
        myDropzone = new Dropzone(dropzoneElement, {
            url: "#", autoProcessQueue: false, acceptedFiles: ".srt,.vtt,.ssa,.ass", maxFiles: 1,
            init: function() {
                this.on("addedfile", file => {
                    if (this.files.length > 1) this.removeFile(this.files[0]);
                    uploadedFile = file;
                    dropzoneElement.style.display = 'none';
                    fileFeedbackDiv.style.display = 'block';
                    fileNameSpan.textContent = file.name;
                    checkStep2Completion();
                });
                this.on("removedfile", () => {
                    uploadedFile = null;
                    dropzoneElement.style.display = 'block';
                    fileFeedbackDiv.style.display = 'none';
                    fileNameSpan.textContent = '';
                    checkStep2Completion();
                });
                this.on("error", (file, errorMsg) => {
                    showError(typeof errorMsg === 'string' ? errorMsg : "Invalid file type.");
                    this.removeFile(file);
                });
            }
        });
    }
});
