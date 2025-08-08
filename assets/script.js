// --- I18N DICTIONARY ---
const i18n = {
    en: {
        // General
        'pageTitle': 'Subtitle Translator',
        'pageSubtitle': 'AI-Powered Translation',
        'mainHeading': 'Translate Subtitles in 3 Easy Steps',
        'mainSubheading': 'Follow the steps below to get your subtitles translated by AI.',
        'next': 'Next',
        'back': 'Back',
        'remove': 'Remove',
        // Step Navigator
        'step1Name': 'API Setup',
        'step2Name': 'Add Content',
        'step3Name': 'Translate',
        // Step 1: API
        'step1Title': 'Step 1: Configure Your API Key',
        'step1Description': 'This tool uses the Gemini API. Please provide your API key to proceed. Your key is stored locally in your browser and is never sent to our servers.',
        'apiKeyLabel': 'Gemini API Key',
        'apiKeyPlaceholder': 'Enter your Gemini API key',
        'rememberKey': 'Remember my key',
        'getApiKeyLink': "Get your free key from <a href='https://aistudio.google.com/app/apikey' target='_blank' class='font-medium underline hover:text-blue-600'>Google AI Studio</a>.",
        // Step 2: Content
        'step2Title': 'Step 2: Add Your Subtitle Content',
        'fileUpload': 'File Upload',
        'pasteText': 'Paste Text',
        'dropzone': "Drag & drop SRT, VTT, SSA, or ASS file",
        'dropzoneOr': "or",
        'dropzoneChoose': "Choose File",
        'fileSelected': "File selected:",
        'pastePlaceholder': "Paste your SRT content here...",
        'pasteNote': "Note: Only SRT format is supported for text input.",
        // Step 3: Translate
        'step3Title': 'Step 3: Finalize and Translate',
        'targetLangLabel': 'Target Language',
        'targetLangPlaceholder': 'e.g., Spanish, French, Japanese',
        'advancedSettings': 'Advanced Settings',
        'advancedWarning': 'Adjusting these settings can affect performance, cost, and quality. Proceed with caution.',
        'useProxyLabel': 'Use Proxy (For users in sanctioned regions)',
        'translateNow': 'Translate Now',
        // Results Area
        'progressTitle': 'Translation in Progress...',
        'progressComplete': 'Complete',
        'progressEstimating': 'Estimating...',
        'progressCalculating': 'Calculating...',
        'progressRemaining': 'remaining',
        'successTitle': 'Translation Complete!',
        'successText': 'Your translated file is ready for download.',
        'errorTitle': 'An Error Occurred',
        'startNew': 'Start New',
        'downloadFile': 'Download File',
        'retryFailed': 'Retry Failed Chunks:',
        'retryButton': 'Retry Chunk',
        'retryingButton': 'Retrying...',
        // Alerts & Confirmations
        'clearMemoryConfirm': 'Are you sure you want to clear all saved translations from memory?',
        'clearMemorySuccess': 'Translation memory cleared!',
    },
    fa: {
        // General
        'pageTitle': 'مترجم زیرنویس',
        'pageSubtitle': 'ترجمه با هوش مصنوعی',
        'mainHeading': 'ترجمه زیرنویس در ۳ مرحله ساده',
        'mainSubheading': 'برای ترجمه زیرنویس خود توسط هوش مصنوعی، مراحل زیر را دنبال کنید.',
        'next': 'بعدی',
        'back': 'قبلی',
        'remove': 'حذف',
        // Step Navigator
        'step1Name': 'تنظیم API',
        'step2Name': 'افزودن محتوا',
        'step3Name': 'ترجمه',
        // Step 1: API
        'step1Title': 'مرحله ۱: کلید API خود را پیکربندی کنید',
        'step1Description': 'این ابزار از Gemini API استفاده می‌کند. لطفاً برای ادامه، کلید API خود را ارائه دهید. کلید شما به صورت محلی در مرورگرتان ذخیره می‌شود و هرگز به سرورهای ما ارسال نمی‌گردد.',
        'apiKeyLabel': 'کلید API Gemini',
        'apiKeyPlaceholder': 'کلید API خود را اینجا وارد کنید',
        'rememberKey': 'کلید مرا به خاطر بسپار',
        'getApiKeyLink': "کلید رایگان خود را از <a href='https://aistudio.google.com/app/apikey' target='_blank' class='font-medium underline hover:text-blue-600'>Google AI Studio</a> دریافت کنید.",
        // Step 2: Content
        'step2Title': 'مرحله ۲: محتوای زیرنویس خود را اضافه کنید',
        'fileUpload': 'بارگذاری فایل',
        'pasteText': 'چسباندن متن',
        'dropzone': "فایل SRT، VTT، SSA یا ASS را بکشید و رها کنید",
        'dropzoneOr': "یا",
        'dropzoneChoose': "انتخاب فایل",
        'fileSelected': "فایل انتخاب شد:",
        'pastePlaceholder': "محتوای SRT خود را اینجا بچسبانید...",
        'pasteNote': "توجه: برای چسباندن متن فقط از فرمت SRT پشتیبانی می‌شود.",
        // Step 3: Translate
        'step3Title': 'مرحله ۳: نهایی‌سازی و ترجمه',
        'targetLangLabel': 'زبان مقصد',
        'targetLangPlaceholder': 'مثال: اسپانیایی، فرانسوی، ژاپنی',
        'advancedSettings': 'تنظیمات پیشرفته',
        'advancedWarning': 'تنظیم این پارامترها می‌تواند بر عملکرد، هزینه و کیفیت ترجمه تأثیر بگذارد. با احتیاط عمل کنید.',
        'useProxyLabel': 'استفاده از پروکسی (برای کاربران در مناطق تحریم شده)',
        'translateNow': 'شروع ترجمه',
        // Results Area
        'progressTitle': 'در حال ترجمه...',
        'progressComplete': 'تکمیل شد',
        'progressEstimating': 'در حال تخمین...',
        'progressCalculating': 'در حال محاسبه...',
        'progressRemaining': 'باقیمانده',
        'successTitle': 'ترجمه کامل شد!',
        'successText': 'فایل ترجمه شده شما برای دانلود آماده است.',
        'errorTitle': 'خطایی روی داد',
        'startNew': 'شروع ترجمه جدید',
        'downloadFile': 'دانلود فایل',
        'retryFailed': 'تلاش مجدد برای بخش‌های ناموفق:',
        'retryButton': 'تلاش مجدد بخش',
        'retryingButton': 'در حال تلاش...',
        // Alerts & Confirmations
        'clearMemoryConfirm': 'آیا مطمئن هستید که می‌خواهید تمام ترجمه‌های ذخیره شده در حافظه را پاک کنید؟',
        'clearMemorySuccess': 'حافظه ترجمه پاک شد!',
    }
};

// --- Global Variables & State ---
let uiLang = 'en';
let uploadedFile = null;
let translationMemory = JSON.parse(localStorage.getItem('translationMemory') || '{}');
let currentStep = 1;
let firstChunkTime = 0;
let failedChunksData = [];
let currentAllTranslatedEntries = [];
let currentOriginalFileName = 'translation';
let currentOriginalFormat = 'srt';
let currentApiKey = '';
let currentModel = 'gemini-1.5-flash-latest';
let currentTemperature = 0.7;
let currentTargetLangForRetry = '';
const proxyUrl = 'https://middleman.yebekhe.workers.dev';

// --- DOM Element References ---
let htmlElement, languageToggle, clearMemoryButton, translateForm, dropzoneElement, srtTextInput, apiKeyInput, rememberMeCheckbox, useProxyCheckbox, togglePasswordBtn, langInput, modelSelect, temperatureInput, progressContainer, progressBar, progressText, chunkStatusSpan, timeEstimateSpan, errorMessageDiv, submitButton;
let stepSections, stepIndicators, formContainer, resultsArea;
let nextToStep2Btn, nextToStep3Btn, backToStep1Btn, backToStep2Btns;
let selectFileInputBtn, selectTextInputBtn, fileInputContainer, textInputContainer;
let fileFeedbackDiv, fileNameSpan, removeFileBtn, errorContentDiv;
let myDropzone;
let editorContainer, editorTbody, downloadEditedBtn, startNewFromEditorBtn;


// --- UI & WIZARD MANAGEMENT ---

function updateLanguage(lang) {
    uiLang = lang;
    const isRTL = lang === 'fa';
    const translations = i18n[uiLang];
    
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    const setText = (selector, key) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = translations[key];
    };
    const setHtml = (selector, key) => {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = translations[key];
    };
    const setPlaceholder = (selector, key) => {
        const element = document.querySelector(selector);
        if (element) element.placeholder = translations[key];
    };

    setText('#page-title', 'pageTitle');
    setText('#page-title + p', 'pageSubtitle');
    setText('#form-container h2', 'mainHeading');
    setText('#upload-instructions', 'mainSubheading');

    document.querySelectorAll('.next-btn-text').forEach(el => el.textContent = translations['next']);
    document.querySelectorAll('.back-btn-text').forEach(el => el.textContent = translations['back']);
    
    setText('#step-1-indicator span:last-child', 'step1Name');
    setText('#step-2-indicator span:last-child', 'step2Name');
    setText('#step-3-indicator span:last-child', 'step3Name');
    
    setText('#step-1 h3', 'step1Title');
    setText('#step-1 .space-y-4 > p', 'step1Description');
    setText('label[for="api_key"]', 'apiKeyLabel');
    setPlaceholder('#api_key', 'apiKeyPlaceholder');
    setText('label[for="remember_me"]', 'rememberKey');
    setHtml('#step-1 .bg-blue-50 p', 'getApiKeyLink');

    setText('#step-2 h3', 'step2Title');
    setText('#select-file-input', 'fileUpload');
    setText('#select-text-input', 'pasteText');
    setText('#dropzone-upload .text-lg', 'dropzone');
    setText('#dropzone-upload .text-sm', 'dropzoneOr');
    setText('#dropzone-upload #choose-file-btn', 'dropzoneChoose');
    setText('#file-feedback p:first-child span:first-child', 'fileSelected');
    setText('#remove-file span', 'remove');
    setPlaceholder('#srt_text', 'pastePlaceholder');
    setText('#text-input-container p', 'pasteNote');
    
    setText('#step-3 h3', 'step3Title');
    setText('label[for="lang-input"]', 'targetLangLabel');
    setPlaceholder('#lang-input', 'targetLangPlaceholder');
    setText('details summary h4', 'advancedSettings');
    setText('details .bg-amber-50 p', 'advancedWarning');
    setText('label[for="useProxyCheckbox"]', 'useProxyLabel');
    setText('#submit-button .button-text', 'translateNow');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });

    localStorage.setItem('language', lang);
}

function goToStep(stepNumber) {
    currentStep = stepNumber;
    stepSections.forEach(section => section.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`)?.classList.add('active');

    stepIndicators.forEach((indicator, index) => {
        const step = index + 1;
        const textSpans = indicator.querySelectorAll('span');
        indicator.className = 'group flex flex-col py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0';
        textSpans.forEach(span => span.className = 'text-sm font-medium');

        if (step < stepNumber) {
            indicator.classList.add('border-l-4', 'md:border-t-4', 'border-green-500');
            textSpans.forEach(span => span.classList.add('text-green-600', 'dark:text-green-400'));
        } else if (step === stepNumber) {
            indicator.classList.add('border-l-4', 'md:border-t-4', 'border-primary-600');
            textSpans.forEach(span => span.classList.add('text-primary-600'));
        } else {
            indicator.classList.add('border-l-4', 'md:border-t-4', 'border-gray-200', 'dark:border-gray-700');
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
    if (editorContainer) editorContainer.style.display = 'none';
    if (myDropzone) myDropzone.removeAllFiles(true);
    if (srtTextInput) srtTextInput.value = '';
    
    goToStep(1);
    checkStep1Completion();
    checkStep2Completion();
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
    if (rememberMeCheckbox.checked && apiKeyInput.value) {
        localStorage.setItem('savedApiKey', apiKeyInput.value);
    } else {
        localStorage.removeItem('savedApiKey');
    }
}

function loadApiKey() {
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
    
    const isSuccess = type === 'success';
    titleEl.textContent = isSuccess ? i18n[uiLang].successTitle : i18n[uiLang].errorTitle;
    iconEl.className = `fas text-xl ${isSuccess ? 'fa-check-circle text-green-500' : 'fa-exclamation-circle text-red-500'}`;
    errorMessageDiv.className = `mt-6 p-4 rounded-xl flex items-start border ${isSuccess ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700' : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700'}`;
    titleEl.className = `text-md font-bold ${isSuccess ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`;
    errorContentDiv.className = `text-sm mt-2 ${isSuccess ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`;
    
    errorContentDiv.textContent = message;
    errorMessageDiv.style.display = 'flex';
}

function hideError() {
    if (errorMessageDiv) errorMessageDiv.style.display = 'none';
}

function resetUIForNewTranslation() {
    if (progressContainer) progressContainer.style.display = 'block';
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = `0% ${i18n[uiLang].progressComplete}`;
    if (chunkStatusSpan) chunkStatusSpan.textContent = '...';
    if (timeEstimateSpan) timeEstimateSpan.textContent = i18n[uiLang].progressEstimating;
    
    hideError();
    document.getElementById('retry-container')?.remove();
    
    failedChunksData = [];
    currentAllTranslatedEntries = [];
}

function updateProgress(chunkIndex, totalChunks, startTime) {
    if (!progressContainer || progressContainer.style.display === 'none') return;
    const currentDisplayChunk = chunkIndex + 1;
    const progressPercentage = totalChunks > 0 ? Math.round((currentDisplayChunk / totalChunks) * 100) : 0;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage}% ${i18n[uiLang].progressComplete}`;
    chunkStatusSpan.textContent = `Processing chunk: ${currentDisplayChunk}/${totalChunks}`;

    if (chunkIndex === 0 && startTime && totalChunks > 1) {
        timeEstimateSpan.textContent = i18n[uiLang].progressCalculating;
    } else if (firstChunkTime > 0 && chunkIndex > 0 && totalChunks > 1) {
        const remainingChunks = totalChunks - currentDisplayChunk;
        if (remainingChunks >= 0) {
            const estimatedRemainingTime = remainingChunks * firstChunkTime;
            const minutes = Math.floor(estimatedRemainingTime / 60);
            const seconds = Math.floor(estimatedRemainingTime % 60);
            timeEstimateSpan.textContent = `~${minutes}m ${seconds}s ${i18n[uiLang].progressRemaining}`;
        }
    }
}

// --- PARSING, TRANSLATION, and CORE LOGIC ---
function clearTranslationMemory() {
    if (confirm(i18n[uiLang].clearMemoryConfirm)) {
        translationMemory = {};
        localStorage.removeItem('translationMemory');
        alert(i18n[uiLang].clearMemorySuccess);
    }
}

function findInTranslationMemory(text, lang) {
    return translationMemory[lang]?.[text.trim()];
}

function updateTranslationMemory(sourceText, translatedText, lang) {
    if (!sourceText || !translatedText) return;
    const trimmedSource = sourceText.trim();
    if (!trimmedSource) return;
    const trimmedTranslated = translatedText.trim();
    if (!translationMemory[lang]) translationMemory[lang] = {};
    translationMemory[lang][trimmedSource] = trimmedTranslated;
    try {
        localStorage.setItem('translationMemory', JSON.stringify(translationMemory));
    } catch (e) { console.error("Error saving to localStorage:", e); }
}

function parseSubtitle(content, format) {
    switch (format) {
        case 'vtt': return parseVTT(content);
        case 'ssa': case 'ass': return parseSSA_ASS(content);
        case 'srt': default: return parseSRTInternal(content);
    }
}

function parseSRTInternal(srtContent) {
    const blocks = srtContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n').split(/\n\s*\n/);
    return blocks.map(block => {
        const lines = block.trim().split('\n');
        if (lines.length < 2) return null;
        const id = lines[0];
        const timeStamp = lines[1];
        const text = lines.slice(2).join('\n');
        if (id && timeStamp && timeStamp.includes('-->')) {
            return { id, timeStamp, text, otherData: { lineType: 'cue' } };
        }
        return null;
    }).filter(Boolean);
}

function parseVTT(vttContent) {
    const entries = [];
    const lines = vttContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n').split('\n');
    let currentEntry = null;
    let lineBuffer = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        const timeStampMatch = trimmedLine.match(/^(\d{2}:)?\d{2}:\d{2}[.,]\d{3}\s*-->\s*(\d{2}:)?\d{2}:\d{2}[.,]\d{3}/);
        if (timeStampMatch) {
            if (currentEntry) {
                currentEntry.text = lineBuffer.join('\n');
                entries.push(currentEntry);
            }
            const prevLine = (i > 0) ? lines[i-1].trim() : '';
            const id = (prevLine && !prevLine.includes('-->') && prevLine !== '') ? prevLine : `auto_${i}`;
            currentEntry = { id, timeStamp: trimmedLine, text: null, otherData: { lineType: 'cue' } };
            lineBuffer = [];
        } else if (trimmedLine === '') {
            if (currentEntry) {
                currentEntry.text = lineBuffer.join('\n');
                entries.push(currentEntry);
                currentEntry = null;
            }
            entries.push({ otherData: { lineType: 'metadata', originalLine: line } });
        } else if (currentEntry) {
            lineBuffer.push(line);
        } else {
             entries.push({ otherData: { lineType: 'metadata', originalLine: line } });
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
                const parts = trimmedLine.substring(9).split(',');
                const dialogueData = {};
                let textIndex = -1;
                for (let i = 0; i < formatFields.length; i++) {
                    if (formatFields[i] === 'text') {
                        textIndex = i;
                        dialogueData['text'] = parts.slice(i).join(',');
                        break;
                    }
                    dialogueData[formatFields[i]] = parts[i] || '';
                }
                if (textIndex !== -1) {
                    entries.push({
                        id: `D${entries.length}`,
                        timeStamp: `${dialogueData['start']} --> ${dialogueData['end']}`,
                        text: dialogueData['text'],
                        otherData: { lineType: 'dialogue', originalLine: line, fields: dialogueData, formatOrder: formatFields }
                    });
                }
            } else {
                entries.push({ otherData: { originalLine: line, lineType: 'other_event' } });
            }
        } else {
            entries.push({ otherData: { originalLine: line, lineType: 'metadata' } });
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
                    const fields = { ...e.otherData.fields, text: e.text };
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


// Replace the existing fetchTranslation function in your script.js with this one.

async function fetchTranslation(chunk, apiKey, targetLang, model, temperature) {
    if (!chunk || chunk.length === 0) return [];

    const separator = "\n---\n";
    const sourceTexts = chunk.map(entry => entry.text);
    const combinedText = sourceTexts.join(separator);
    const effectivePrompt = `Translate the following subtitle text into ${targetLang}. Maintain the original meaning, natural conversational tone, and appropriate length for subtitles. Respond ONLY with the translated text lines, separated by "---".\n\n${combinedText}`;

    const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const targetUrl = useProxyCheckbox.checked ? proxyUrl : directUrl;
    
    let finalPayload = {
        contents: [{ parts: [{ text: effectivePrompt }] }],
        safetySettings: [{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }],
        generationConfig: { temperature }
    };
    if (useProxyCheckbox.checked) finalPayload.endpoint = directUrl;

    const fetchOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(finalPayload) };
    
    const response = await fetch(targetUrl, fetchOptions);
    if (!response.ok) {
        throw new Error(`API error ${response.status}: ${await response.text()}`);
    }
    const data = await response.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (responseText === undefined) throw new Error('Invalid API response structure.');
    
    let translatedLines = responseText.trim().split(separator.trim());
    
    if (translatedLines.length === chunk.length + 1 && translatedLines[translatedLines.length - 1].trim() === '') {
        console.log("Corrected mismatch: Removed trailing empty line from AI response.");
        translatedLines.pop();
    }

    if (responseText.trim() !== "" && translatedLines.length !== chunk.length) {
         throw new Error(`Line count mismatch. Expected ${chunk.length}, got ${translatedLines.length}`);
    }
    
    return translatedLines.map(line => line.trim());
}

async function translateChunkRecursively(chunk, apiKey, targetLang, model, temperature) {
    if (chunk.length <= 1) {
        try {
            return await fetchTranslation(chunk, apiKey, targetLang, model, temperature);
        } catch (e) {
            console.error(`Final attempt failed for chunk of size 1. Returning original. Error:`, e.message);
            return chunk.map(entry => entry.text);
        }
    }

    try {
        return await fetchTranslation(chunk, apiKey, targetLang, model, temperature);
    } catch (error) {
        if (error.message.includes('Line count mismatch')) {
            console.warn(`Line count mismatch for chunk size ${chunk.length}. Splitting.`);
            const midPoint = Math.ceil(chunk.length / 2);
            const firstHalf = chunk.slice(0, midPoint);
            const secondHalf = chunk.slice(midPoint);

            const [translatedFirst, translatedSecond] = await Promise.all([
                translateChunkRecursively(firstHalf, apiKey, targetLang, model, temperature),
                translateChunkRecursively(secondHalf, apiKey, targetLang, model, temperature)
            ]);

            return [...translatedFirst, ...translatedSecond];
        } else {
            console.error("A non-recoverable error occurred during translation:", error);
            throw error;
        }
    }
}

async function translateChunk(chunk, apiKey, targetLang, model, temperature) {
    const textsToTranslate = [];
    const cachedResults = new Map();

    chunk.forEach((entry, index) => {
        const cached = findInTranslationMemory(entry.text, targetLang);
        if (cached) {
            cachedResults.set(index, cached);
        } else {
            textsToTranslate.push({ originalIndex: index, ...entry });
        }
    });

    if (textsToTranslate.length === 0) {
        return Array.from({ length: chunk.length }, (_, i) => cachedResults.get(i));
    }

    const translatedTexts = await translateChunkRecursively(textsToTranslate, apiKey, targetLang, model, temperature);

    translatedTexts.forEach((translatedText, i) => {
        const originalEntry = textsToTranslate[i];
        updateTranslationMemory(originalEntry.text, translatedText, targetLang);
    });

    const finalTranslations = [];
    let translatedIndex = 0;
    for (let i = 0; i < chunk.length; i++) {
        if (cachedResults.has(i)) {
            finalTranslations[i] = cachedResults.get(i);
        } else {
            finalTranslations[i] = translatedTexts[translatedIndex] || chunk[i].text;
            translatedIndex++;
        }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    return finalTranslations;
}

async function handleTranslate(event) {
    event.preventDefault();
    formContainer.style.display = 'none';
    resultsArea.style.display = 'block';
    resetUIForNewTranslation();

    const targetLanguage = langInput.value.trim();

    currentApiKey = apiKeyInput.value.trim();
    currentModel = modelSelect.value;
    currentTemperature = parseFloat(temperatureInput.value);
    currentTargetLangForRetry = targetLanguage;
    
    let subtitleContent = '';
    const inputMethod = selectFileInputBtn.classList.contains('bg-primary-600') ? 'file' : 'text';

    if (inputMethod === 'file') {
        if (!uploadedFile) { showError('Please select a subtitle file.'); resetWizard(); return; }
        currentOriginalFormat = uploadedFile.name.split('.').pop()?.toLowerCase() || 'srt';
        currentOriginalFileName = uploadedFile.name.replace(/\.[^/.]+$/, "");
        subtitleContent = await uploadedFile.text();
    } else {
        if (srtTextInput.value.trim() === '') { showError('Please paste SRT content.'); resetWizard(); return; }
        currentOriginalFormat = 'srt';
        currentOriginalFileName = 'pasted_translation';
        subtitleContent = srtTextInput.value;
    }

    const startTime = performance.now();
    firstChunkTime = 0;

    try {
        const allParsedEntries = parseSubtitle(subtitleContent, currentOriginalFormat);
        allParsedEntries.forEach(entry => { if (entry.text) entry.text_original = entry.text; });
        
        const translatableEntries = allParsedEntries.filter(e => e.text?.trim());

        if (translatableEntries.length === 0) {
            currentAllTranslatedEntries = allParsedEntries;
            populateEditor();
            showError("No translatable text found. Original content loaded in editor.", 'success');
            return;
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
                const translatedTexts = await translateChunk(chunks[i], currentApiKey, targetLanguage, currentModel, currentTemperature);
                if (i === 0) firstChunkTime = (performance.now() - chunkStartTime) / 1000;
                chunks[i].forEach((entry, idx) => translatedTextMap.set(entry, translatedTexts[idx] || entry.text));
            } catch (chunkError) {
                console.error(`Chunk ${i + 1} failed permanently:`, chunkError);
                failedChunksData.push({ index: i, chunkData: chunks[i], reason: chunkError.message });
                chunks[i].forEach(entry => translatedTextMap.set(entry, entry.text));
            }
        }
        
        currentAllTranslatedEntries = allParsedEntries.map(entry => {
            const translatable = translatableEntries.find(t => t.id === entry.id && t.timeStamp === entry.timeStamp);
            return translatable && translatedTextMap.has(translatable) ? { ...entry, text: translatedTextMap.get(translatable) } : entry;
        });

        populateEditor();
        
        if (failedChunksData.length > 0) {
            showError(`Translation finished with ${failedChunksData.length} failed chunk(s). Edits can be made before downloading.`);
            displayRetryButtons();
        } else {
            showError('Translation successful! You can review and edit the results below.', 'success');
        }

    } catch (error) {
        progressContainer.style.display = 'none';
        showError(`A critical error occurred: ${error.message}`);
    } finally {
        saveApiKey();
    }
}

function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto'; // Reset height to shrink on deletion
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function populateEditor() {
    if (!editorTbody) return;
    editorTbody.innerHTML = '';

    currentAllTranslatedEntries.forEach((entry, index) => {
        if (entry.otherData.lineType !== 'cue' && entry.otherData.lineType !== 'dialogue') return;
        
        const tr = document.createElement('tr');
        tr.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600';
        tr.dataset.index = index;

        const originalText = entry.text_original || entry.text;
        const translatedText = entry.text;

        tr.innerHTML = `
            <td class="px-4 py-2 text-center font-medium text-gray-900 dark:text-white">${entry.id}</td>
            <td class="px-6 py-2 whitespace-pre-wrap">${originalText}</td>
            <td class="px-6 py-2">
                <textarea class="w-full p-1 bg-transparent border-0 rounded-md focus:ring-2 focus:ring-primary-500 overflow-hidden" rows="1">${translatedText}</textarea>
            </td>`;
        
        const textarea = tr.querySelector('textarea');
        textarea.addEventListener('input', function() {
            autoResizeTextarea(this);
            const entryIndex = this.closest('tr').dataset.index;
            currentAllTranslatedEntries[entryIndex].text = this.value;
        });

        editorTbody.appendChild(tr);
        // Defer the initial resize to ensure the element is in the DOM and has a valid scrollHeight
        setTimeout(() => autoResizeTextarea(textarea), 0);
    });
    
    progressContainer.style.display = 'none';
    editorContainer.style.display = 'block';
}

function generateDownloadFromEditor() {
    try {
        const targetLang = currentTargetLangForRetry || langInput.value.trim();
        const finalContent = reconstructSubtitle(currentAllTranslatedEntries, currentOriginalFormat);
        const mimeType = getMimeType(currentOriginalFormat);
        const blob = new Blob([`\uFEFF${finalContent}`], { type: `${mimeType};charset=utf-8` });
        const url = URL.createObjectURL(blob);
        const downloadFileName = `${currentOriginalFileName}_${targetLang}.${currentOriginalFormat}`;

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = downloadFileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    } catch (error) {
        console.error("Error generating download link:", error);
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
        editorContainer.insertAdjacentElement('afterend', retryContainer);
    }
    retryContainer.innerHTML = `<p class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">${i18n[uiLang].retryFailed}</p>`;
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'flex flex-wrap gap-2';
    failedChunksData.sort((a,b)=>a.index-b.index).forEach(failedChunk => {
        const button = document.createElement('button');
        button.className = 'px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md';
        button.dataset.chunkIndex = failedChunk.index;
        button.textContent = `${i18n[uiLang].retryButton} ${failedChunk.index + 1}`;
        button.addEventListener('click', handleManualRetry);
        buttonsContainer.appendChild(button);
    });
    retryContainer.appendChild(buttonsContainer);
}

async function handleManualRetry(event) {
    const button = event.target;
    button.disabled = true;
    button.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${i18n[uiLang].retryingButton}`;
    
    const internalChunkIndex = parseInt(button.dataset.chunkIndex, 10);
    const failedChunkInfo = failedChunksData.find(fc => fc.index === internalChunkIndex);
    if (!failedChunkInfo) return;
    
    try {
        const translatedTexts = await translateChunk(failedChunkInfo.chunkData, currentApiKey, currentTargetLangForRetry, currentModel, currentTemperature);
        const retriedMap = new Map();
        failedChunkInfo.chunkData.forEach((entry, idx) => retriedMap.set(entry, translatedTexts[idx] || entry.text));
        
        currentAllTranslatedEntries = currentAllTranslatedEntries.map(entry => {
             const translatable = failedChunkInfo.chunkData.find(t => t.id === entry.id && t.timeStamp === entry.timeStamp);
             return translatable && retriedMap.has(translatable) ? { ...entry, text: retriedMap.get(translatable) } : entry;
        });

        failedChunksData = failedChunksData.filter(fc => fc.index !== internalChunkIndex);
        showError(`Chunk ${internalChunkIndex + 1} successfully translated!`, 'success');
        button.remove();
        populateEditor(); // Re-populate editor with corrected data
        if (failedChunksData.length === 0) document.getElementById('retry-container')?.remove();
    } catch (retryError) {
        showError(`Retry failed for Chunk ${internalChunkIndex + 1}: ${retryError.message}`);
        button.disabled = false;
        button.textContent = `${i18n[uiLang].retryButton} ${internalChunkIndex + 1}`;
    }
}

// --- EVENT LISTENERS INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Populate DOM references
    htmlElement = document.documentElement;
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
    progressContainer = document.getElementById('progress-container');
    progressBar = document.getElementById('progress');
    progressText = document.getElementById('progress-text');
    chunkStatusSpan = document.getElementById('chunk-status');
    timeEstimateSpan = document.getElementById('time-estimate');
    errorMessageDiv = document.getElementById('error-message');
    errorContentDiv = errorMessageDiv.querySelector('.text-sm');
    submitButton = document.getElementById('submit-button');
    formContainer = document.getElementById('form-container');
    resultsArea = document.getElementById('results-area');
    stepSections = document.querySelectorAll('[data-step]');
    stepIndicators = document.querySelectorAll('[id^="step-"][id$="-indicator"]');
    nextToStep2Btn = document.getElementById('next-to-step-2');
    nextToStep3Btn = document.getElementById('next-to-step-3');
    backToStep1Btn = document.getElementById('back-to-step-1');
    backToStep2Btns = document.querySelectorAll('#back-to-step-2');
    selectFileInputBtn = document.getElementById('select-file-input');
    selectTextInputBtn = document.getElementById('select-text-input');
    fileInputContainer = document.getElementById('file-input-container');
    textInputContainer = document.getElementById('text-input-container');
    fileFeedbackDiv = document.getElementById('file-feedback');
    fileNameSpan = document.getElementById('file-name');
    removeFileBtn = document.getElementById('remove-file');
    editorContainer = document.getElementById('editor-container');
    editorTbody = document.getElementById('editor-tbody');
    downloadEditedBtn = document.getElementById('download-edited-btn');
    startNewFromEditorBtn = document.getElementById('start-new-from-editor-btn');

    // Initial Page Setup
    updateLanguage(localStorage.getItem('language') === 'fa' ? 'fa' : 'en');
    loadApiKey();
    goToStep(1);

    // Attach Event Listeners
    languageToggle.addEventListener('click', () => updateLanguage(uiLang === 'en' ? 'fa' : 'en'));
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
    downloadEditedBtn.addEventListener('click', generateDownloadFromEditor);
    startNewFromEditorBtn.addEventListener('click', resetWizard);

    // Dropzone Configuration
    Dropzone.autoDiscover = false;
    if (dropzoneElement) {
        myDropzone = new Dropzone(fileInputContainer, {
            url: "#",
            autoProcessQueue: false,
            acceptedFiles: ".srt,.vtt,.ssa,.ass",
            maxFiles: 1,
            clickable: ['#dropzone-upload', '#choose-file-btn'], 
            previewsContainer: false,
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
