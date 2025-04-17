// --- Global Variables & Initial Setup ---
let uploadedFile = null;
let translationMemory = JSON.parse(localStorage.getItem('translationMemory') || '{}');
let firstChunkTime = 0; // To estimate remaining time (less precise now)

// --- DOM Element References ---
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const clearMemoryButton = document.getElementById('clear-memory-button');
const translateForm = document.getElementById('translate-form');
const dropzoneElement = document.getElementById("dropzone-upload");
const srtTextInput = document.getElementById('srt_text');
const apiKeyInput = document.getElementById('api_key');
const rememberMeCheckbox = document.getElementById('remember_me');
const useProxyCheckbox = document.getElementById('useProxyCheckbox');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const langInput = document.getElementById('lang-input');
const baseDelayInput = document.getElementById('base_delay');
const quotaDelayInput = document.getElementById('quota_delay');
const chunkCountInput = document.getElementById('chunk_count');
const modelSelect = document.getElementById('model');
const translationPromptTextarea = document.getElementById('translation_prompt');
// const acknowledgeCheckbox = document.getElementById('acknowledge'); // Removed
const progressTextArea = document.getElementById('progress-text-area'); // New element for progress
const downloadLinkContainer = document.getElementById('download-link');
const errorMessageDiv = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');
const submitButtonText = submitButton.querySelector('.submit-text');
const fileInputSection = document.getElementById('file-input');
const textInputSection = document.getElementById('text-input');
const inputMethodRadios = document.querySelectorAll('input[name="input_method"]');
const apiKeyNote = document.getElementById('api-key-note');
const htmlElement = document.documentElement; // Target for dark mode class

// --- Dropzone Configuration ---
Dropzone.autoDiscover = false;
if (dropzoneElement) {
    const myDropzone = new Dropzone(dropzoneElement, {
        url: "#", // Dummy URL
        autoProcessQueue: false,
        acceptedFiles: ".srt",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: dropzoneElement.querySelector('.dz-message').innerHTML,
        dictRemoveFile: "Remove",
        dictMaxFilesExceeded: "You can only upload one file.",
        dictInvalidFileType: "You can only upload .srt files.",
        init: function() {
            this.on("addedfile", function(file) {
                if (this.files.length > 1) {
                    this.removeFile(this.files[0]);
                }
                uploadedFile = file;
                hideError(); // Hide error on new file
                console.log("File added:", file.name);
            });
            this.on("removedfile", function(file) {
                uploadedFile = null;
                console.log("File removed:", file.name);
            });
            this.on("error", function(file, errorMsg) {
                console.error("Dropzone error:", errorMsg);
                let userMessage = "Error adding file.";
                if (typeof errorMsg === 'string') {
                    if (errorMsg.includes("You can only upload")) userMessage = errorMsg;
                    else if (errorMsg.includes("File is too big")) userMessage = "File is too large.";
                    else userMessage = "Invalid file. Please ensure it's a valid .srt file.";
                }
                showError(userMessage);
                if (file.previewElement) file.previewElement.remove();
                uploadedFile = null;
            });
        }
    });
} else {
    console.warn("Dropzone element not found.");
}

// --- Theme Management ---
function updateTheme(isLight) {
    const themeIcon = themeToggle.querySelector('i');
    htmlElement.classList.toggle('dark-mode', !isLight);
    themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    console.log(`Theme set to ${isLight ? 'light' : 'dark'}`);
}

// --- Language Management ---
function updateLanguage(lang) {
    const isRTL = lang === 'Persian'; // Example, expand if needed
    document.body.classList.toggle('rtl', isRTL); // Add/remove rtl class on body if needed by CSS

    // Update text content based on language (Simplified example)
    if (isRTL) {
        htmlElement.lang = 'fa';
        document.getElementById('page-title').textContent = 'مترجم SRT';
        document.getElementById('upload-instructions').textContent = 'فایل SRT را بارگذاری یا الصاق کنید، کلید API Gemini و زبان مقصد را ارائه دهید.';
        document.getElementById('warning-message').textContent = '⚠️ اگر در ایران هستید، برای دسترسی به API Gemini به دلیل تحریم، «استفاده از پروکسی» را در تنظیمات فعال کنید.';
        document.getElementById('input-method-label').textContent = 'روش ورودی:';
        document.querySelector('label[for="file-input"] span')?.textContent = 'بارگذاری فایل'; // Adjust selector if needed
        document.querySelector('label[for="text-input"] span')?.textContent = 'الصاق متن'; // Adjust selector if needed
        document.getElementById('file-label').textContent = 'بارگذاری فایل SRT:';
        document.getElementById('text-label').textContent = 'الصاق محتوای SRT:';
        document.getElementById('lang-label').textContent = 'زبان مقصد:';
        langInput.placeholder = 'مثال: انگلیسی، فرانسوی';
        document.querySelector('.settings summary').textContent = 'تنظیمات و کلید API';
        document.getElementById('api-key-label').textContent = 'کلید API Gemini:';
        apiKeyInput.placeholder = 'کلید API خود را وارد کنید';
        document.getElementById('remember-me-label').textContent = 'ذخیره کلید API (در حافظه محلی)';
        document.getElementById('use-proxy-label').textContent = 'استفاده از پروکسی (برای مناطق تحریم شده)';
        document.getElementById('model-label').textContent = 'مدل Gemini:';
        document.getElementById('base-delay-label').textContent = 'تأخیر پایه (ms):';
        document.getElementById('quota-delay-label').textContent = 'تأخیر سهمیه (ms):';
        document.getElementById('chunk-count-label').textContent = 'تعداد بخش‌ها:';
        document.getElementById('translation-prompt-label').textContent = 'دستورالعمل سیستم / پرامپت:';
        submitButtonText.textContent = 'ترجمه';
        apiKeyNote.innerHTML = "کلید API خود را از <a href='https://aistudio.google.com/app/apikey' target='_blank'>Google AI Studio</a> دریافت کنید.";
        languageToggle.querySelector('.btn-text').textContent = 'زبان';
        clearMemoryButton.querySelector('.btn-text').textContent = 'پاک کردن حافظه';
        // Update Dropzone message if possible/needed
        if (dropzoneElement?.dropzone?.options) {
            dropzoneElement.dropzone.options.dictDefaultMessage = `<i class="fas fa-cloud-upload-alt"></i><p>فایل SRT را اینجا بکشید یا کلیک کنید</p>`;
            dropzoneElement.dropzone.updateOptions(); // Refresh UI potentially
        }

    } else { // English
        htmlElement.lang = 'en';
        document.getElementById('page-title').textContent = 'SRT Translator';
        document.getElementById('upload-instructions').textContent = 'Upload or paste SRT content, provide your Gemini API key, and choose the target language.';
        document.getElementById('warning-message').textContent = '⚠️ If in Iran, enable "Use Proxy" in Settings for Gemini API access due to sanctions.';
        document.getElementById('input-method-label').textContent = 'Input Method:';
        document.querySelector('label[for="file-input"] span')?.textContent = 'Upload File';
        document.querySelector('label[for="text-input"] span')?.textContent = 'Paste Text';
        document.getElementById('file-label').textContent = 'Upload SRT File:';
        document.getElementById('text-label').textContent = 'Paste SRT Content:';
        document.getElementById('lang-label').textContent = 'Target Language:';
        langInput.placeholder = 'e.g., Spanish, French, Japanese';
        document.querySelector('.settings summary').textContent = 'Settings & API Key';
        document.getElementById('api-key-label').textContent = 'Gemini API Key:';
        apiKeyInput.placeholder = 'Enter your Gemini API key';
        document.getElementById('remember-me-label').textContent = 'Remember API key (uses Local Storage)';
        document.getElementById('use-proxy-label').textContent = 'Use Proxy (Needed in sanctioned regions)';
        document.getElementById('model-label').textContent = 'Gemini Model:';
        document.getElementById('base-delay-label').textContent = 'Base Delay (ms):';
        document.getElementById('quota-delay-label').textContent = 'Quota Delay (ms):';
        document.getElementById('chunk-count-label').textContent = 'Number of Chunks:';
        document.getElementById('translation-prompt-label').textContent = 'System Prompt / Instructions:';
        submitButtonText.textContent = 'Translate';
        apiKeyNote.innerHTML = "Get your API key from <a href='https://aistudio.google.com/app/apikey' target='_blank'>Google AI Studio</a>.";
        languageToggle.querySelector('.btn-text').textContent = 'Language';
        clearMemoryButton.querySelector('.btn-text').textContent = 'Clear Memory';
        // Update Dropzone message
         if (dropzoneElement?.dropzone?.options) {
            dropzoneElement.dropzone.options.dictDefaultMessage = `<i class="fas fa-cloud-upload-alt"></i><p>Drag & drop SRT file here or click</p>`;
             dropzoneElement.dropzone.updateOptions(); // Refresh UI potentially
        }
    }
    localStorage.setItem('language', lang);
    console.log(`Language set to ${lang}`);
}


// --- Utility Functions ---
function togglePasswordVisibility() {
    const eyeIcon = togglePasswordBtn.querySelector('.eye-icon');
    const eyeSlashIcon = togglePasswordBtn.querySelector('.eye-slash-icon');
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline';
    } else {
        apiKeyInput.type = 'password';
        eyeIcon.style.display = 'inline';
        eyeSlashIcon.style.display = 'none';
    }
}

function saveApiKey() {
    if (rememberMeCheckbox.checked && apiKeyInput.value) {
        localStorage.setItem('savedApiKey', apiKeyInput.value);
        console.log('API key saved.');
    } else {
        localStorage.removeItem('savedApiKey');
        console.log('API key not saved or removed.');
    }
}

function loadApiKey() {
    const savedApiKey = localStorage.getItem('savedApiKey');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
        rememberMeCheckbox.checked = true;
        console.log('API key loaded.');
    }
}

function showError(message, isSuccess = false) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.toggle('success', isSuccess);
    errorMessageDiv.classList.add('visible');
    errorMessageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideError() {
     errorMessageDiv.classList.remove('visible', 'success');
}

function resetUI() {
    // Reset button state
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
    submitButtonText.textContent = localStorage.getItem('language') === 'Persian' ? 'ترجمه' : 'Translate';

    // Hide progress and results
    progressTextArea.classList.remove('visible');
    progressTextArea.textContent = ''; // Clear progress text
    downloadLinkContainer.style.display = 'none';
    downloadLinkContainer.innerHTML = ''; // Clear previous link
    hideError();
}

function updateProgressText(message) {
    if (!progressTextArea.classList.contains('visible')) {
        progressTextArea.classList.add('visible');
    }
    // Append new message with timestamp for clarity
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const newMessage = `[${timestamp}] ${message}\n`;
    progressTextArea.textContent += newMessage;
    // Scroll to the bottom
    progressTextArea.scrollTop = progressTextArea.scrollHeight;
}

// --- Translation Memory ---
function updateTranslationMemory(sourceText, translatedText, lang) {
    if (!sourceText || !translatedText || typeof sourceText !== 'string' || typeof translatedText !== 'string') return;
    const trimmedSource = sourceText.trim();
    const trimmedTranslated = translatedText.trim();
    if (!trimmedSource || !trimmedTranslated) return; // Avoid storing empty entries

    if (!translationMemory[lang]) {
        translationMemory[lang] = {};
    }
    translationMemory[lang][trimmedSource] = trimmedTranslated;
    // Optional: Limit memory size
    // const keys = Object.keys(translationMemory[lang]);
    // if (keys.length > 2000) { delete translationMemory[lang][keys[0]]; /* Remove oldest */ }
    try {
         localStorage.setItem('translationMemory', JSON.stringify(translationMemory));
    } catch (e) {
        console.error("Error saving translation memory (likely full):", e);
        updateProgressText("⚠️ Warning: Could not save to translation memory (storage might be full).");
    }
}

function findInTranslationMemory(text, lang) {
     if (!text || typeof text !== 'string') return undefined;
     return translationMemory[lang]?.[text.trim()];
}

function clearTranslationMemory() {
    const confirmationText = localStorage.getItem('language') === 'Persian'
        ? 'آیا مطمئن هستید که می‌خواهید تمام ترجمه‌های ذخیره شده در حافظه را پاک کنید؟'
        : 'Are you sure you want to clear all saved translations from memory?';
    if (confirm(confirmationText)) {
        translationMemory = {};
        localStorage.removeItem('translationMemory');
        console.log('Translation memory cleared.');
        // Simple feedback alert
        alert(localStorage.getItem('language') === 'Persian' ? 'حافظه ترجمه پاک شد!' : 'Translation memory cleared!');
    }
}


// --- SRT Parsing and Handling (Keep existing robust functions) ---
/**
 * Parses SRT content into an array of entry objects.
 * Handles various line endings, BOM, and common formatting issues.
 * @param {string} srtContent - The raw SRT content.
 * @returns {Array<Object>} Array of { id, timeStamp, text } objects.
 */
 function parseSRT(srtContent) {
    updateProgressText("Parsing SRT content...");
    console.log(`Raw SRT length: ${srtContent.length}`);

    // 1. Normalize line endings to \n and remove BOM
    let normalizedContent = srtContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n');

    // 2. Split into potential blocks based on double newlines
    const blocks = normalizedContent.split(/\n\s*\n/);
    const parsedEntries = [];
    let entryCount = 0;
    let skippedBlocks = 0;

    for (const block of blocks) {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) continue; // Skip empty blocks

        const lines = trimmedBlock.split('\n');
        if (lines.length < 2) {
            console.warn(`Skipping malformed block (less than 2 lines): "${trimmedBlock.substring(0, 50)}..."`);
            skippedBlocks++;
            continue;
        }

        let idLine = lines[0].trim();
        let timeLine = lines[1].trim();
        // Join text lines, trim each, filter empty, then join back. Handles empty lines between text.
        let textLines = lines.slice(2).map(line => line.trim()).filter(line => line !== '').join('\n');

        // Regex for timestamp (allows comma or dot)
        const timestampRegex = /^\d{1,2}:\d{2}:\d{2}[,.]\d{3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[,.]\d{3}$/;

        // --- Validation and Auto-Correction ---
        let currentId = -1;

        // Case 1: Timestamp is on the first line
        if (timestampRegex.test(idLine) && !/^\d+$/.test(idLine) && (lines.length === 2 || !timestampRegex.test(timeLine))) {
            console.warn(`Block starting "${idLine.substring(0,20)}..." has timestamp on first line. Fixing.`);
            textLines = timeLine + (textLines ? '\n' + textLines : ''); // Prepend original second line to text
            timeLine = idLine; // Use first line as timestamp
            currentId = ++entryCount; // Assign sequential ID
            idLine = currentId.toString();
        }
        // Case 2: ID is not numeric
        else if (!/^\d+$/.test(idLine)) {
            console.warn(`Block starting "${idLine.substring(0,20)}..." has non-numeric ID. Assigning sequential ID.`);
            currentId = ++entryCount;
            idLine = currentId.toString();
        }
        // Case 3: Valid ID, but second line is not a timestamp
        else if (!timestampRegex.test(timeLine)) {
            console.warn(`Block starting ID "${idLine}" has invalid timestamp "${timeLine.substring(0,50)}...". Skipping.`);
            entryCount = parseInt(idLine, 10); // Try to keep track of last ID
            skippedBlocks++;
            continue;
        }
        // Case 4: Seems valid
        else {
            currentId = parseInt(idLine, 10);
            entryCount = Math.max(entryCount, currentId); // Keep track of highest ID
        }

        // Standardize timestamp format (use comma, consistent spacing)
        timeLine = timeLine.replace(/\./g, ',').replace(/\s*-->\s*/, ' --> ');

        parsedEntries.push({
            id: idLine, // Keep as string
            timeStamp: timeLine,
            text: textLines
        });
    }

    console.log(`Parsed ${parsedEntries.length} valid SRT entries. Skipped ${skippedBlocks} malformed blocks.`);
    if (parsedEntries.length === 0 && srtContent.length > 0) {
         console.error("No valid SRT entries found, although content was present.");
         updateProgressText("❌ Error: Could not find any valid SRT entries in the input.");
    } else if (skippedBlocks > 0) {
        updateProgressText(`ℹ️ Parsed ${parsedEntries.length} entries. Skipped ${skippedBlocks} potentially malformed blocks.`);
    } else {
         updateProgressText(`✅ Parsed ${parsedEntries.length} SRT entries successfully.`);
    }
    return parsedEntries;
}


function splitIntoChunks(array, chunkCount) {
    if (!Array.isArray(array) || array.length === 0) {
        console.warn('Cannot split empty or invalid array.');
        return [];
    }

    const numChunks = Math.max(1, Math.floor(chunkCount) || 1);
    const effectiveChunkCount = Math.min(numChunks, array.length);
    const chunks = [];
    const baseChunkSize = Math.floor(array.length / effectiveChunkCount);
    let remainder = array.length % effectiveChunkCount;
    let startIndex = 0;

    updateProgressText(`Splitting ${array.length} entries into ${effectiveChunkCount} chunks...`);

    for (let i = 0; i < effectiveChunkCount; i++) {
        const currentChunkSize = baseChunkSize + (remainder > 0 ? 1 : 0);
        const endIndex = startIndex + currentChunkSize;
        const chunk = array.slice(startIndex, endIndex);
        chunks.push(chunk);
        // console.log(`Chunk ${i + 1}: ${chunk.length} entries (Indices ${startIndex}-${endIndex - 1})`);
        startIndex = endIndex;
        if (remainder > 0) remainder--;
    }
    updateProgressText(`Split into ${chunks.length} chunks.`);
    return chunks;
}

function reconstructSRT(entries) {
     updateProgressText("Reconstructing final SRT file...");
    if (!Array.isArray(entries)) return '';
    // Ensure entries are sorted numerically by ID before joining
    const sortedEntries = entries.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
    const srtString = sortedEntries
        .map(entry => `${entry.id}\n${entry.timeStamp}\n${entry.text}`)
        .join('\n\n');
    updateProgressText("✅ SRT reconstruction complete.");
    // Add trailing newlines for compatibility with some players
    return srtString + '\n\n';
}


// --- API Interaction ---
async function translateChunk(chunk, apiKey, baseDelayMs, quotaDelayMs, lang, chunkIndex, totalChunks, model, promptTemplate) {
    if (!chunk || chunk.length === 0) {
        console.warn(`Chunk ${chunkIndex} is empty, skipping.`);
        return [];
    }

    updateProgressText(`Processing Chunk ${chunkIndex}/${totalChunks} (${chunk.length} entries)...`);
    const sourceTexts = chunk.map(entry => entry.text);

    // --- Check Translation Memory ---
    const cachedTranslations = sourceTexts.map(text => findInTranslationMemory(text, lang));
    const textsToTranslateMap = new Map(); // Map original index to text
    let cacheHitCount = 0;

    sourceTexts.forEach((text, index) => {
        if (cachedTranslations[index] === undefined) {
            if (text.trim()) { // Only add non-empty text to be translated
                 textsToTranslateMap.set(index, text);
            } else {
                cachedTranslations[index] = ''; // Preserve empty lines
            }
        } else {
            cacheHitCount++;
        }
    });

    if (textsToTranslateMap.size === 0) {
        updateProgressText(`Chunk ${chunkIndex}: All ${chunk.length} entries found in memory or were empty.`);
        return cachedTranslations; // All entries were cached or empty
    }

    if (cacheHitCount > 0) {
         updateProgressText(`Chunk ${chunkIndex}: ${cacheHitCount} entries from memory. Translating ${textsToTranslateMap.size} new entries.`);
    } else {
        updateProgressText(`Chunk ${chunkIndex}: Translating ${textsToTranslateMap.size} entries.`);
    }


    // Combine texts that need translation using the chosen separator
    const separator = "\n---\n";
    const indicesToTranslate = Array.from(textsToTranslateMap.keys());
    const combinedText = indicesToTranslate.map(index => textsToTranslateMap.get(index)).join(separator);

    const effectivePrompt = `${promptTemplate}\n\nTranslate the following text into ${lang}. Respond only with the translated text lines, separated by "${separator.trim()}", maintaining the original number of separated lines. Do not add explanations or apologies.\n\n${combinedText}`;

    const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    // *** Replace with your actual proxy URL if needed ***
    const proxyUrl = 'https://middleman.yebekhe.workers.dev'; // Placeholder!
    const useProxy = useProxyCheckbox.checked;

    const headers = { 'Content-Type': 'application/json' };
    const payload = {
        contents: [{ parts: [{ text: effectivePrompt }] }],
        safetySettings: [ // Less restrictive settings (adjust if needed)
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ],
        generationConfig: {
            // "temperature": 0.7, // Optional: control randomness
             "maxOutputTokens": 8192 // Max possible for flash
        }
    };

    const targetUrl = useProxy ? proxyUrl : directUrl;
    const fetchOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    };
     // Add endpoint to payload ONLY if using proxy that requires it
    if (useProxy && targetUrl.includes('your-cors-proxy')) { // Example check
         // If your proxy needs the target, add it. Otherwise, remove this.
         // payload.endpoint = directUrl;
         // fetchOptions.body = JSON.stringify(payload);
         updateProgressText(`Chunk ${chunkIndex}: Using proxy: ${proxyUrl}`);
     } else {
         updateProgressText(`Chunk ${chunkIndex}: Using direct URL.`);
     }


    console.log(`Chunk ${chunkIndex} - Request URL: ${targetUrl}`);

    let attempts = 0;
    const maxAttempts = 4; // Reduced max retries slightly

    while (attempts < maxAttempts) {
        try {
            // Use base delay before *each* attempt (except first)
            if (attempts > 0) {
                 const retryDelay = Math.min(baseDelayMs * Math.pow(2, attempts -1), 15000); // Exponential backoff up to 15s
                 updateProgressText(`Chunk ${chunkIndex}: Retrying attempt ${attempts + 1} after ${retryDelay / 1000}s delay...`);
                 await new Promise(resolve => setTimeout(resolve, retryDelay));
            }

            const response = await fetch(targetUrl, fetchOptions);

            if (!response.ok) {
                let errorBodyText = '';
                try { errorBodyText = await response.text(); } catch (e) { /* ignore */ }
                console.error(`API Error Response (Chunk ${chunkIndex}, Attempt ${attempts + 1}): ${response.status} ${response.statusText}`, errorBodyText.substring(0, 500));

                if (response.status === 429) { // Quota Exceeded
                    updateProgressText(`⏳ Chunk ${chunkIndex}: Quota exceeded (429). Waiting ${quotaDelayMs / 1000}s...`);
                    await new Promise(resolve => setTimeout(resolve, quotaDelayMs));
                    // Don't increment attempts for quota delay, retry immediately after wait
                    continue;
                } else if (response.status >= 500) { // Server Error (500, 503, etc.)
                     updateProgressText(`⚠️ Chunk ${chunkIndex}: Server error (${response.status}). Retrying...`);
                     attempts++;
                     continue; // Increment attempts and retry after backoff
                } else if (response.status === 400) { // Bad Request
                     updateProgressText(`❌ Chunk ${chunkIndex}: API Error (400). Check API Key/Prompt/Model access. Cannot retry.`);
                     throw new Error(`API Bad Request (400) - Check Key/Prompt. ${errorBodyText.substring(0,200)}`);
                } else { // Other client-side errors (401, 403, 404) - unlikely to be recoverable
                     attempts++;
                     if (attempts >= maxAttempts) {
                         updateProgressText(`❌ Chunk ${chunkIndex}: Failed with ${response.status} after ${maxAttempts} attempts.`);
                         throw new Error(`API error ${response.status} after ${maxAttempts} attempts.`);
                     }
                     updateProgressText(`⚠️ Chunk ${chunkIndex}: API error ${response.status}. Retrying...`);
                     continue; // Retry after backoff
                }
            }

            // --- Process successful response ---
            const data = await response.json();

            // Safer check for response structure
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
             const finishReason = data?.candidates?.[0]?.finishReason;

             if (responseText === undefined || responseText === null) { // Check specifically for undefined/null
                 console.error(`Invalid API response structure (Chunk ${chunkIndex}):`, JSON.stringify(data).substring(0, 500));
                 if (finishReason && finishReason !== "STOP") {
                      updateProgressText(`⚠️ Chunk ${chunkIndex}: API Warning - Stopped due to ${finishReason}. Output may be incomplete.`);
                     // Still try to process if there's *any* text, otherwise throw
                     if (responseText === undefined || responseText === null) { // If truly no text part
                        throw new Error(`API Error: No text returned. Finish reason: ${finishReason}.`);
                     }
                     // If text exists but is empty, treat it as empty string below
                 } else {
                    // No text and no specific error reason
                    throw new Error('Invalid API response: No translated text found.');
                 }
             }

             // Handle case where responseText is present but empty string
             const rawTranslatedText = (responseText || "").trim();
             // console.log(`Chunk ${chunkIndex} - Raw API Response Text (trimmed):`, rawTranslatedText);
             const translatedLines = rawTranslatedText.split(separator.trim()).map(line => line.trim()); // Use the same separator

            // --- Verification ---
            if (translatedLines.length !== textsToTranslateMap.size && rawTranslatedText !== "") { // Allow empty response if input was only empty lines
                console.error(`Chunk ${chunkIndex}: Mismatch! Expected ${textsToTranslateMap.size} separated lines, Got ${translatedLines.length}.`);
                console.error("Original combined text:", combinedText.substring(0, 300) + "...");
                console.error("Received response text:", rawTranslatedText.substring(0, 300) + "...");
                 if (attempts < maxAttempts -1) {
                     attempts++;
                     updateProgressText(`⚠️ Chunk ${chunkIndex}: Line count mismatch. Retrying (Attempt ${attempts + 1})...`);
                     await new Promise(resolve => setTimeout(resolve, baseDelayMs * 1.5)); // Slightly longer wait
                     continue;
                 } else {
                    updateProgressText(`❌ Chunk ${chunkIndex}: Failed due to persistent line count mismatch.`);
                    throw new Error(`Response line count (${translatedLines.length}) != input line count (${textsToTranslateMap.size}) after retries.`);
                 }
             }

            // --- Integrate translations and update memory ---
            const finalChunkTranslations = [...cachedTranslations]; // Start with cached/empty results
             translatedLines.forEach((translatedText, i) => {
                 const originalIndex = indicesToTranslate[i]; // Get the original position in the chunk
                 const sourceText = sourceTexts[originalIndex];
                 finalChunkTranslations[originalIndex] = translatedText; // Place the new translation
                 updateTranslationMemory(sourceText, translatedText, lang); // Update memory
             });

            updateProgressText(`✅ Chunk ${chunkIndex} translated successfully.`);
            // Base delay before the *next* chunk starts (handled in the main loop)
            return finalChunkTranslations; // Return the full array for the chunk

        } catch (error) {
            console.error(`Error processing chunk ${chunkIndex} (Attempt ${attempts + 1}):`, error);
            attempts++;
            if (attempts >= maxAttempts) {
                updateProgressText(`❌ Chunk ${chunkIndex} failed definitely after ${maxAttempts} attempts.`);
                // Propagate the error after max attempts
                throw new Error(`Failed chunk ${chunkIndex}: ${error.message}`);
            }
            // Wait before the next retry (handled by backoff at start of loop)
        }
    }
    // Should not be reached if loop logic is correct
    throw new Error(`Failed chunk ${chunkIndex} unexpectedly after loop.`);
}


// --- Main Translation Orchestration ---
async function handleTranslate(event) {
    event.preventDefault();
    resetUI(); // Clear previous results/errors first

    // --- Input Validation ---
    const apiKey = apiKeyInput.value.trim();
    const lang = langInput.value.trim();
    const baseDelay = parseInt(baseDelayInput.value, 10);
    const quotaDelay = parseInt(quotaDelayInput.value, 10);
    let chunkCount = parseInt(chunkCountInput.value, 10);
    const model = modelSelect.value;
    const promptTemplate = translationPromptTextarea.value.trim();
    const inputMethod = document.querySelector('input[name="input_method"]:checked').value;
    const srtTextContent = srtTextInput.value.trim();

    let hasError = false;
    if (!apiKey) { showError('Gemini API Key is required.'); hasError = true; }
    if (!lang) { showError('Target Language is required.'); hasError = true; }
    if (isNaN(baseDelay) || baseDelay < 100) { showError('Base Delay must be a number >= 100ms.'); hasError = true; }
    if (isNaN(quotaDelay) || quotaDelay < 1000) { showError('Quota Delay must be a number >= 1000ms.'); hasError = true; }
    if (isNaN(chunkCount) || chunkCount < 1 || chunkCount > 100) { showError('Number of Chunks must be between 1 and 100.'); hasError = true; }
    if (!model) { showError('Please select a Gemini Model.'); hasError = true; }
    // Removed acknowledge checkbox check

    if (hasError) return; // Stop if basic validation fails

    let srtContent = '';
    let originalFileName = 'translation'; // Default filename base

    if (inputMethod === 'file') {
        if (!uploadedFile) return showError('Please select or drop an SRT file.');
        try {
            srtContent = await uploadedFile.text();
            originalFileName = uploadedFile.name.replace(/\.srt$/i, ''); // Remove .srt extension
            updateProgressText(`Reading file: ${uploadedFile.name}`);
        } catch (readError) {
            console.error("Error reading file:", readError);
            return showError('Could not read the selected file.');
        }
    } else { // inputMethod === 'text'
        if (!srtTextContent) return showError('Please paste SRT content.');
        srtContent = srtTextContent;
         updateProgressText("Using pasted SRT content.");
    }

    if (!srtContent.trim()) {
        return showError('SRT content is empty.');
    }

    // --- Start Processing ---
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    // submitButtonText.textContent = 'Starting...'; // Initial loading text
    updateProgressText('Starting translation process...'); // Log start
    const startTime = performance.now();
    firstChunkTime = 0; // Reset timer

    try {
        // 1. Parse SRT
        const parsedEntries = parseSRT(srtContent);
        if (parsedEntries.length === 0) {
            throw new Error('No valid SRT entries found. Cannot proceed.');
        }

        // 2. Split into Chunks
        chunkCount = Math.min(chunkCount, parsedEntries.length); // Adjust if needed
        const chunks = splitIntoChunks(parsedEntries, chunkCount);
        if (chunks.length === 0 || chunks.every(chunk => chunk.length === 0)) {
            throw new Error('Failed to split SRT into processable chunks.');
        }
        const totalChunks = chunks.length;

        // 3. Translate Chunks Iteratively
        const allTranslatedEntries = [];
        const failedChunkIndices = [];

        for (let i = 0; i < totalChunks; i++) {
            // Small delay before starting next chunk (after the first one)
            if (i > 0) {
                await new Promise(resolve => setTimeout(resolve, baseDelay / 2)); // Half base delay
            }
            // submitButtonText.textContent = `Chunk ${i + 1}/${totalChunks}...`; // Update button text (optional)

            const currentChunk = chunks[i];
            try {
                const translatedChunkTexts = await translateChunk(
                    currentChunk, apiKey, baseDelay, quotaDelay, lang, i + 1, totalChunks, model, promptTemplate
                );

                // Reconstruct entries for this chunk
                currentChunk.forEach((entry, index) => {
                    allTranslatedEntries.push({
                        ...entry,
                        text: translatedChunkTexts[index] ?? entry.text // Fallback to original if somehow null/undefined
                    });
                });

            } catch (chunkError) {
                console.error(`Main handler caught error for chunk ${i + 1}:`, chunkError);
                failedChunkIndices.push(i + 1);
                updateProgressText(`❌ ERROR on Chunk ${i + 1}: ${chunkError.message}. Using original text for this chunk.`);
                // Add original text for failed chunks
                currentChunk.forEach(entry => {
                    allTranslatedEntries.push(entry); // Keep original entry
                });
                // Continue to the next chunk
            }
        }

        // 4. Reconstruct Final SRT
        const finalSRT = reconstructSRT(allTranslatedEntries);

        // 5. Provide Download Link
        const blob = new Blob([`\uFEFF${finalSRT}`], { type: 'text/srt;charset=utf-8' }); // Add BOM for wider compatibility
        const url = URL.createObjectURL(blob);
        const downloadFileName = `${originalFileName}_${lang}.srt`;

        downloadLinkContainer.innerHTML = `<a href="${url}" download="${downloadFileName}">Download Translated SRT (${lang})</a>`;
        downloadLinkContainer.style.display = 'block';
        downloadLinkContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        updateProgressText(`✅ Download link generated: ${downloadFileName}`);


        // 6. Final Status Message
        const endTime = performance.now();
        const duration = ((endTime - startTime) / 1000).toFixed(1);
        console.log(`Translation finished in ${duration} seconds.`);

        if (failedChunkIndices.length > 0) {
             const errorMsg = `Translation complete in ${duration}s with ${failedChunkIndices.length} failed chunk(s): [${failedChunkIndices.join(', ')}]. Original text used for these.`;
             showError(errorMsg, false); // Show as non-success error
             updateProgressText(`🏁 Finished with errors in ${duration}s.`);
        } else {
             const successMsg = `Translation successful! (${duration}s)`;
             showError(successMsg, true); // Show as success
             updateProgressText(`🏁 Translation finished successfully in ${duration}s.`);
        }

        // 7. Save API Key if requested
        saveApiKey();

    } catch (error) {
        console.error('Main translation handler error:', error);
        showError(`An critical error occurred: ${error.message}`);
        updateProgressText(`❌ Fatal Error: ${error.message}`);
    } finally {
        // Re-enable button regardless of success or failure
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        submitButtonText.textContent = localStorage.getItem('language') === 'Persian' ? 'ترجمه' : 'Translate';
         // Ensure progress area stays visible if it was used
        if (progressTextArea.textContent) {
            progressTextArea.classList.add('visible');
        }
    }
}

// --- Event Listeners ---
themeToggle.addEventListener('click', () => {
    const isLight = !htmlElement.classList.contains('dark-mode');
    updateTheme(isLight);
});

languageToggle.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') === 'Persian' ? 'English' : 'Persian';
    updateLanguage(currentLanguage);
    resetUI(); // Reset UI elements like button text on language change
});

clearMemoryButton.addEventListener('click', clearTranslationMemory);

togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

rememberMeCheckbox.addEventListener('change', saveApiKey); // Save immediately on change

// Add listener for form submission
translateForm.addEventListener('submit', handleTranslate);

// Input method switching
inputMethodRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const method = e.target.value;
        fileInputSection.style.display = method === 'file' ? 'block' : 'none';
        textInputSection.style.display = method === 'text' ? 'block' : 'none';
        hideError(); // Hide errors when switching
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+B or Cmd+B to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        themeToggle.click();
    }
    // Ctrl+Enter or Cmd+Enter to submit form
     if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
         // Check if focus is NOT in a textarea where Enter might be needed
         if (document.activeElement?.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (!submitButton.disabled) { // Only submit if not already loading
                 translateForm.requestSubmit();
            }
         }
     }
});


// --- Initial Page Load Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    updateTheme(savedTheme === 'light' || savedTheme === null); // Default to light if not set

    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'English'; // Default to English
    updateLanguage(savedLanguage);

    // Load saved API key
    loadApiKey();

    // Set initial state for input method display
    const initialInputMethod = document.querySelector('input[name="input_method"]:checked')?.value || 'file';
    fileInputSection.style.display = initialInputMethod === 'file' ? 'block' : 'none';
    textInputSection.style.display = initialInputMethod === 'text' ? 'block' : 'none';

    console.log("Static Translator Initialized with New Style");
});
