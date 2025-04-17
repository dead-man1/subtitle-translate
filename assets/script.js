// --- Global Variables & Initial Setup ---
let uploadedFile = null;
let translationMemory = JSON.parse(localStorage.getItem('translationMemory') || '{}');
let firstChunkTime = 0; // To estimate remaining time

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
const acknowledgeCheckbox = document.getElementById('acknowledge');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const chunkStatusSpan = document.getElementById('chunk-status');
const timeEstimateSpan = document.getElementById('time-estimate');
const downloadLinkContainer = document.getElementById('download-link');
const errorMessageDiv = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');
const fileInputSection = document.getElementById('file-input');
const textInputSection = document.getElementById('text-input');
const inputMethodRadios = document.querySelectorAll('input[name="input_method"]');
const apiKeyNote = document.getElementById('api-key-note');

// --- Dropzone Configuration ---
Dropzone.autoDiscover = false;
const myDropzone = new Dropzone(dropzoneElement, {
    url: "#", // Dummy URL, not used for processing here
    autoProcessQueue: false,
    acceptedFiles: ".srt",
    maxFiles: 1,
    addRemoveLinks: true,
    dictDefaultMessage: dropzoneElement.querySelector('.dz-message').innerHTML, // Use existing message
    dictRemoveFile: "Remove",
    dictMaxFilesExceeded: "You can only upload one file.",
    dictInvalidFileType: "You can only upload .srt files.",
    init: function() {
        this.on("addedfile", function(file) {
            // If there's already a file, remove it before adding the new one
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
            uploadedFile = file;
            errorMessageDiv.style.display = 'none'; // Hide error on new file
            console.log("File added:", file.name);
        });
        this.on("removedfile", function(file) {
            uploadedFile = null;
            console.log("File removed:", file.name);
        });
        this.on("error", function(file, errorMessage) {
            console.error("Dropzone error:", errorMessage);
            // Display a user-friendly message if it's a known error type
            if (typeof errorMessage === 'string' && !errorMessage.includes('Server responded')) {
                showError(errorMessage);
            } else {
                 showError("Error adding file. Please ensure it's a valid .srt file.");
            }
            // Remove the errored file preview
            if (file.previewElement) {
                file.previewElement.remove();
            }
            uploadedFile = null; // Ensure uploadedFile is null if error occurs
        });
    }
});

// --- Theme Management ---
function updateTheme(isLight) {
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    body.classList.toggle('light-theme', isLight);
    themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Adjust elements that might not be covered by pure CSS variables/classes if needed
    // (Example: Dropzone background which might have inline styles or complex setup)
    // Note: The CSS provided should handle most cases via variable changes.
    console.log(`Theme set to ${isLight ? 'light' : 'dark'}`);
}

// --- Language Management ---
function updateLanguage(lang) {
    const body = document.body;
    const isRTL = lang === 'Persian'; // Example, expand if needed

    body.classList.toggle('rtl', isRTL);

    // Update text content based on language
    if (isRTL) {
        document.documentElement.lang = 'fa';
        document.getElementById('page-title').textContent = 'مترجم SRT به هر زبانی';
        document.getElementById('warning-message').textContent = '⚠️ اگر در ایران هستید لطفاً گزینه استفاده از پروکسی را فعال کنید تا به API Gemini دسترسی پیدا کنید ، زیرا ایران در حال حاضر تحت تحریم است.';
        document.getElementById('upload-instructions').textContent = 'فایل SRT خود را بارگذاری کنید یا محتوای SRT را وارد کنید و کلید API Gemini خود را برای ترجمه متن به هر زبانی وارد کنید.';
        document.getElementById('input-method-label').textContent = 'روش ورودی:';
        document.querySelector('label[for="file"]').textContent = 'بارگذاری فایل SRT:';
        document.querySelector('label[for="srt_text"]').textContent = 'چسباندن محتوای SRT:';
        document.getElementById('api-key-label').textContent = 'کلید API Gemini:';
        apiKeyInput.placeholder = 'کلید API Gemini خود را وارد کنید';
        document.getElementById('remember-me-label').textContent = 'یادآوری کلید API من';
        document.getElementById('use-proxy-label').textContent = 'استفاده از پروکسی';
        document.getElementById('advanced-settings-summary').textContent = 'تنظیمات پیشرفته ⚠️';
        document.getElementById('advanced-warning-message').textContent = '⚠️ هشدار: این تنظیمات فقط برای کاربران حرفه‌ای‌تر است. مقادیر نادرست ممکن است باعث عدم ترجمه یا مشکلات در فرایند ترجمه شود. با احتیاط عمل کنید.';
        document.getElementById('acknowledge-text').textContent = 'من ریسک‌ها را می‌فهمم و می‌دانم که دارم چه کاری انجام می‌دهم';
        document.getElementById('model-label').textContent = 'مدل Gemini:';
        document.getElementById('base-delay-label').textContent = 'تاخیر پایه (ms):';
        document.getElementById('quota-delay-label').textContent = 'تاخیر کوئیت (ms):';
        document.getElementById('chunk-count-label').textContent = 'تعداد تکه‌ها:';
        document.getElementById('translation-prompt-label').textContent = 'دستورالعمل‌های ترجمه:';
        document.getElementById('lang-label').textContent = 'زبان:';
        langInput.placeholder = 'زبان مقصد';
        submitButton.textContent = 'ترجمه';
        apiKeyNote.innerHTML = "کلید API خود را از <a href='https://aistudio.google.com/app/apikey' target='_blank'>Google AI Studio</a> دریافت کنید.";
        // Update Dropzone messages if needed (requires more involved Dropzone API access)
        // myDropzone.options.dictDefaultMessage = "...";
    } else { // English
        document.documentElement.lang = 'en';
        document.getElementById('page-title').textContent = 'SRT Translator to Any Language';
        document.getElementById('warning-message').textContent = '⚠️ Please enable Use Proxy checkbox to access the Gemini API if you are in Iran, as Iran is currently under sanctions.';
        document.getElementById('upload-instructions').textContent = 'Upload an SRT file or paste SRT content and provide your Gemini API key to translate the text to any language.';
        document.getElementById('input-method-label').textContent = 'Input Method:';
         document.querySelector('label[for="file"]').textContent = 'Upload SRT File:'; // Assuming 'file' label has for="file", update if needed
        document.querySelector('label[for="srt_text"]').textContent = 'Paste SRT Content:';
        document.getElementById('api-key-label').textContent = 'Gemini API Key:';
        apiKeyInput.placeholder = 'Enter your Gemini API key';
        document.getElementById('remember-me-label').textContent = 'Remember my API key';
        document.getElementById('use-proxy-label').textContent = 'Use Proxy';
        document.getElementById('advanced-settings-summary').textContent = 'Advanced Settings ⚠️';
        document.getElementById('advanced-warning-message').textContent = '⚠️ Warning: These settings are for advanced users only. Incorrect values may cause translation failures or API quota issues. Proceed with caution.';
        document.getElementById('acknowledge-text').textContent = 'I understand the risks and know what I\'m doing';
        document.getElementById('model-label').textContent = 'Gemini Model:';
        document.getElementById('base-delay-label').textContent = 'Base Delay (ms):';
        document.getElementById('quota-delay-label').textContent = 'Quota Delay (ms):';
        document.getElementById('chunk-count-label').textContent = 'Number of Chunks:';
        document.getElementById('translation-prompt-label').textContent = 'Translation Instructions:';
        document.getElementById('lang-label').textContent = 'Language:';
        langInput.placeholder = 'Target Language';
        submitButton.textContent = 'Translate';
        apiKeyNote.innerHTML = "Get your API key from <a href='https://aistudio.google.com/app/apikey' target='_blank'>Google AI Studio</a>.";
        // myDropzone.options.dictDefaultMessage = "...";
    }
    localStorage.setItem('language', lang);
    console.log(`Language set to ${lang}`);
}


// --- Utility Functions ---
function togglePasswordVisibility() {
    const icon = togglePasswordBtn.querySelector('i');
    if (apiKeyInput.type === 'password') {
        apiKeyInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        apiKeyInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
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
    errorMessageDiv.style.display = 'block';
     // Scroll to the error message if it's not visible
     errorMessageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetUI() {
    progressContainer.style.display = 'none';
    progressBar.style.width = '0%';
    progressText.textContent = '0% Complete';
    chunkStatusSpan.textContent = 'Processing chunk: 0/0';
    timeEstimateSpan.textContent = 'Estimated time: calculating...';
    downloadLinkContainer.style.display = 'none';
    downloadLinkContainer.innerHTML = ''; // Clear previous link
    errorMessageDiv.style.display = 'none';
    submitButton.disabled = false;
    submitButton.textContent = localStorage.getItem('language') === 'Persian' ? 'ترجمه' : 'Translate'; // Reset text based on lang
}

function updateProgress(chunkIndex, totalChunks, startTime) {
    const progressPercentage = Math.round(((chunkIndex + 1) / totalChunks) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage}% Complete`;
    chunkStatusSpan.textContent = `Processing chunk: ${chunkIndex + 1}/${totalChunks}`;

    if (chunkIndex === 0 && startTime) {
        firstChunkTime = (performance.now() - startTime) / 1000; // Time for first chunk in seconds
        timeEstimateSpan.textContent = 'Estimated time: calculating...';
    } else if (firstChunkTime > 0) {
        const remainingChunks = totalChunks - (chunkIndex + 1);
        const estimatedRemainingTime = remainingChunks * firstChunkTime; // In seconds
        const minutes = Math.floor(Math.max(0, estimatedRemainingTime) / 60);
        const seconds = Math.floor(Math.max(0, estimatedRemainingTime) % 60);
        timeEstimateSpan.textContent = `Estimated time: ${minutes}m ${seconds}s remaining`;
    }
}

// --- Translation Memory ---
function updateTranslationMemory(sourceText, translatedText, lang) {
    if (!sourceText || !translatedText) return; // Avoid storing empty entries
    if (!translationMemory[lang]) {
        translationMemory[lang] = {};
    }
    translationMemory[lang][sourceText] = translatedText;
    // Limit memory size (optional, example: remove oldest if > 1000 entries per lang)
    // if (Object.keys(translationMemory[lang]).length > 1000) { /* remove oldest */ }
    try {
         localStorage.setItem('translationMemory', JSON.stringify(translationMemory));
    } catch (e) {
        console.error("Error saving translation memory (likely full):", e);
        // Optionally clear older entries or notify user
    }
}

function findInTranslationMemory(text, lang) {
    return translationMemory[lang]?.[text];
}

function clearTranslationMemory() {
    if (confirm('Are you sure you want to clear all saved translations from memory?')) {
        translationMemory = {};
        localStorage.removeItem('translationMemory');
        console.log('Translation memory cleared.');
        alert('Translation memory cleared!'); // Simple feedback
    }
}


// --- SRT Parsing and Handling ---

/**
 * Parses SRT content into an array of entry objects.
 * Handles various line endings, BOM, and common formatting issues.
 * @param {string} srtContent - The raw SRT content.
 * @returns {Array<Object>} Array of { id, timeStamp, text } objects.
 */
 function parseSRT(srtContent) {
    console.log(`Raw SRT length: ${srtContent.length}`);

    // 1. Normalize line endings to \n and remove BOM
    let normalizedContent = srtContent.replace(/^\uFEFF/, '').replace(/\r\n|\r/g, '\n');

    // 2. Split into potential blocks based on double newlines
    const blocks = normalizedContent.split(/\n\s*\n/);
    const parsedEntries = [];
    let entryCount = 0;

    for (const block of blocks) {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) continue; // Skip empty blocks

        const lines = trimmedBlock.split('\n');
        if (lines.length < 2) {
            console.warn(`Skipping malformed block (less than 2 lines): "${trimmedBlock}"`);
            continue;
        }

        let idLine = lines[0].trim();
        let timeLine = lines[1].trim();
        let textLines = lines.slice(2).map(line => line.trim()).filter(line => line !== ''); // Trim each text line, remove empty lines within text

        // Basic validation and potential fixes
        const timestampRegex = /^\d{1,2}:\d{2}:\d{2}[,.]\d{3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[,.]\d{3}$/;

        // Check if the first line looks like a timestamp (common error)
        if (timestampRegex.test(idLine) && !timestampRegex.test(timeLine)) {
             console.warn(`Block "${trimmedBlock}" seems to have timestamp on the first line. Attempting fix.`);
             textLines.unshift(timeLine); // Move potential text line down
             timeLine = idLine;          // Use first line as timestamp
             idLine = (++entryCount).toString(); // Assign a sequential ID
        }
        // Check if the first line is not a number
        else if (!/^\d+$/.test(idLine)) {
            console.warn(`Block "${trimmedBlock}" has non-numeric ID "${idLine}". Assigning sequential ID.`);
             idLine = (++entryCount).toString();
        }
         // Check if the second line isn't a timestamp
        else if (!timestampRegex.test(timeLine)) {
             console.warn(`Block "${trimmedBlock}" has invalid timestamp "${timeLine}". Skipping block.`);
             entryCount = parseInt(idLine, 10); // Keep track of last valid ID seen
             continue;
         } else {
             entryCount = parseInt(idLine, 10); // Update counter based on file's ID
         }

        // Standardize timestamp format (replace comma with dot, ensure spacing) - optional but good practice
        timeLine = timeLine.replace(/,/g, '.').replace(/\s*-->\s*/, ' --> ');

        parsedEntries.push({
            id: idLine,
            timeStamp: timeLine,
            text: textLines.join('\n') // Re-join cleaned text lines
        });
    }

    console.log(`Parsed ${parsedEntries.length} valid SRT entries.`);
    if (parsedEntries.length === 0 && srtContent.length > 0) {
         console.error("No valid SRT entries found, although content was present.");
    }
    return parsedEntries;
}


function splitIntoChunks(array, chunkCount) {
    if (!Array.isArray(array) || array.length === 0) {
        console.warn('Cannot split empty or invalid array.');
        return [];
    }

    // Ensure chunkCount is a positive integer, default to 1 if invalid
    const numChunks = Math.max(1, Math.floor(chunkCount) || 1);

    // Prevent creating more chunks than items
    const effectiveChunkCount = Math.min(numChunks, array.length);

    const chunks = [];
    const baseChunkSize = Math.floor(array.length / effectiveChunkCount);
    let remainder = array.length % effectiveChunkCount;
    let startIndex = 0;

    console.log(`Splitting ${array.length} entries into ${effectiveChunkCount} chunks.`);

    for (let i = 0; i < effectiveChunkCount; i++) {
        const currentChunkSize = baseChunkSize + (remainder > 0 ? 1 : 0);
        const endIndex = startIndex + currentChunkSize;
        const chunk = array.slice(startIndex, endIndex);
        chunks.push(chunk);
        console.log(`Chunk ${i + 1}: ${chunk.length} entries (Indices ${startIndex}-${endIndex - 1})`);
        startIndex = endIndex;
        if (remainder > 0) {
            remainder--;
        }
    }

    return chunks;
}

function reconstructSRT(entries) {
    if (!Array.isArray(entries)) return '';
    return entries.map(entry => `${entry.id}\n${entry.timeStamp}\n${entry.text}`)
                  .join('\n\n') + '\n\n'; // Ensure trailing double newline for compatibility
}


// --- API Interaction ---
async function translateChunk(chunk, apiKey, baseDelayMs, quotaDelayMs, lang, chunkIndex, model, promptTemplate) {
    if (!chunk || chunk.length === 0) {
        console.warn(`Chunk ${chunkIndex} is empty, skipping.`);
        return [];
    }

    const sourceTexts = chunk.map(entry => entry.text);

    // --- Check Translation Memory ---
    const cachedTranslations = sourceTexts.map(text => findInTranslationMemory(text, lang));
    if (cachedTranslations.every(t => t !== undefined)) {
        console.log(`Chunk ${chunkIndex} fully retrieved from Translation Memory for language "${lang}".`);
        return cachedTranslations;
    }
    // --- --- ---

    // Combine texts that need translation, noting indices
    const textsToTranslate = [];
    const originalIndices = []; // Keep track of original position for reconstruction
    sourceTexts.forEach((text, index) => {
        if (cachedTranslations[index] === undefined) { // Only translate if not cached
            textsToTranslate.push(text);
            originalIndices.push(index);
        }
    });

    if (textsToTranslate.length === 0) {
        // This case should technically be caught by the .every check above, but acts as a safeguard
        console.log(`Chunk ${chunkIndex} was fully cached after individual checks.`);
        return cachedTranslations;
    }

    console.log(`Chunk ${chunkIndex}: Translating ${textsToTranslate.length} entries (others cached).`);

    const combinedText = textsToTranslate.join('\n---\n'); // Use a clear separator
    const effectivePrompt = `${promptTemplate}\n\nTranslate the following text into ${lang}. Return only the translated text, maintaining the exact same number of lines separated by "---", nothing else:\n\n${combinedText}`;

    const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    // Replace with your *actual* Worker URL if using a proxy
    const proxyUrl = 'https://middleman.yebekhe.workers.dev'; // *** Replace with your real proxy URL ***
    const useProxy = useProxyCheckbox.checked;

    const headers = { 'Content-Type': 'application/json' };
    const payload = {
        contents: [{
            parts: [{ text: effectivePrompt }]
        }],
        // Add safety settings and generation config if needed
         "safetySettings": [
            { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE" },
            { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE" }
         ],
        "generationConfig": {
            // "temperature": 0.7, // Example: Adjust creativity
             "maxOutputTokens": 8192 // Adjust based on model and expected output size
        }
    };

    const targetUrl = useProxy ? proxyUrl : directUrl;
    const fetchOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    };

    // Add endpoint to payload ONLY if using proxy
    if (useProxy) {
         payload.endpoint = directUrl; // Assuming proxy needs the target URL
         fetchOptions.body = JSON.stringify(payload); // Re-stringify if payload changed
    }


    console.log(`Chunk ${chunkIndex} - Request URL: ${targetUrl}`);
    // console.log(`Chunk ${chunkIndex} - Payload (excluding prompt text):`, JSON.stringify({...payload, contents: [{parts: [{text: "PROMPT_REDACTED"}]}] }, null, 2));


    let attempts = 0;
    const maxAttempts = 5; // Max retries for transient errors

    while (attempts < maxAttempts) {
        try {
            await new Promise(resolve => setTimeout(resolve, attempts * baseDelayMs)); // Exponential backoff for retries

            const response = await fetch(targetUrl, fetchOptions);

            if (!response.ok) {
                const errorBody = await response.text();
                console.error(`API Error Response (Chunk ${chunkIndex}, Attempt ${attempts + 1}): ${response.status} ${response.statusText}`, errorBody);

                if (response.status === 429) { // Quota Exceeded
                    console.warn(`Chunk ${chunkIndex}: Quota exceeded (429). Waiting ${quotaDelayMs / 1000}s before retrying.`);
                    await new Promise(resolve => setTimeout(resolve, quotaDelayMs));
                    // Don't increment attempts for quota delay, just wait and retry immediately after wait
                    continue; // Try the request again
                } else if (response.status === 503 || response.status === 500) { // Service Unavailable or Internal Server Error
                     console.warn(`Chunk ${chunkIndex}: Server error (${response.status}). Retrying attempt ${attempts + 2}...`);
                     attempts++;
                     continue; // Increment attempts and retry after backoff
                } else if (response.status === 400) { // Bad Request (often API key or prompt issue)
                     showError(`API Error (400): Bad Request. Check your API key and prompt. Details: ${errorBody.substring(0, 200)}`);
                     throw new Error(`API Bad Request (400) - Check API Key/Prompt. ${errorBody}`);
                } else {
                     // For other errors, treat as potentially non-recoverable after retries
                     attempts++;
                     if (attempts >= maxAttempts) {
                        throw new Error(`API error: ${response.status} ${response.statusText} after ${maxAttempts} attempts. Body: ${errorBody}`);
                     }
                     console.warn(`Chunk ${chunkIndex}: API error ${response.status}. Retrying attempt ${attempts + 1}...`);
                     continue; // Retry after backoff
                }
            }

            // --- Process successful response ---
            const data = await response.json();

            // Check for valid response structure (adjust based on actual Gemini API response)
            if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
                 console.error(`Invalid API response structure (Chunk ${chunkIndex}):`, data);
                 // Check for finishReason if available
                const finishReason = data.candidates?.[0]?.finishReason;
                if (finishReason && finishReason !== "STOP") {
                     throw new Error(`API Error: Translation stopped due to ${finishReason}. Check safety settings or prompt complexity.`);
                 }
                 throw new Error('Invalid response structure from API. No translated text found.');
             }

            const rawTranslatedText = data.candidates[0].content.parts[0].text.trim();
             console.log(`Chunk ${chunkIndex} - Raw API Response Text (trimmed):`, rawTranslatedText);
             const translatedLines = rawTranslatedText.split('---').map(line => line.trim());

            // --- Verification ---
            if (translatedLines.length !== textsToTranslate.length) {
                console.error(`Chunk ${chunkIndex}: Mismatch in translated lines. Expected ${textsToTranslate.length}, Got ${translatedLines.length}.`);
                console.error("Original combined text:", combinedText);
                console.error("Received translated text:", rawTranslatedText);
                 // Retry logic for mismatch
                 if (attempts < maxAttempts -1) { // Leave one retry attempt if mismatch happens
                     attempts++;
                     console.warn(`Retrying chunk ${chunkIndex} due to line count mismatch (Attempt ${attempts + 1})`);
                     await new Promise(resolve => setTimeout(resolve, baseDelayMs * 2)); // Wait longer for mismatch retry
                     continue;
                 } else {
                    throw new Error(`Translation response line count (${translatedLines.length}) does not match input line count (${textsToTranslate.length}) after retries.`);
                 }
             }

            // --- Integrate translations and update memory ---
            const finalChunkTranslations = [...cachedTranslations]; // Start with cached results
             translatedLines.forEach((translatedText, i) => {
                 const originalIndex = originalIndices[i]; // Get the original position in the chunk
                 const sourceText = sourceTexts[originalIndex];
                 finalChunkTranslations[originalIndex] = translatedText; // Place the new translation
                 updateTranslationMemory(sourceText, translatedText, lang); // Update memory
             });

            console.log(`Chunk ${chunkIndex} translated successfully (Attempt ${attempts + 1}).`);
            // Short delay after successful request before next chunk
            await new Promise(resolve => setTimeout(resolve, baseDelayMs / 2));
            return finalChunkTranslations; // Return the full array of translations for the chunk

        } catch (error) {
            console.error(`Error processing chunk ${chunkIndex} (Attempt ${attempts + 1}):`, error);
            attempts++;
            if (attempts >= maxAttempts) {
                // Propagate the error after max attempts
                throw new Error(`Failed to translate chunk ${chunkIndex} after ${maxAttempts} attempts: ${error.message}`);
            }
            // Wait before the next retry (already handled by backoff at start of loop)
        }
    }
    // Should not be reached if loop logic is correct, but acts as a fallback
    throw new Error(`Failed to translate chunk ${chunkIndex} unexpectedly.`);
}


// --- Main Translation Orchestration ---
async function handleTranslate(event) {
    event.preventDefault();
    resetUI(); // Clear previous results/errors

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

    if (!apiKey) return showError('Gemini API Key is required.');
    if (!lang) return showError('Target Language is required.');
    if (isNaN(baseDelay) || baseDelay < 100) return showError('Base Delay must be a number >= 100ms.');
    if (isNaN(quotaDelay) || quotaDelay < 1000) return showError('Quota Delay must be a number >= 1000ms.');
    if (isNaN(chunkCount) || chunkCount < 1) return showError('Number of Chunks must be at least 1.');
    if (!model) return showError('Please select a Gemini Model.'); // Should not happen with select default
    if (document.querySelector('.advanced-settings').open && !acknowledgeCheckbox.checked) {
        return showError('Please acknowledge the risks in Advanced Settings if you modify them.');
    }


    let srtContent = '';
    let originalFileName = 'translation'; // Default filename base

    if (inputMethod === 'file') {
        if (!uploadedFile) return showError('Please select or drop an SRT file.');
        try {
            srtContent = await uploadedFile.text();
            originalFileName = uploadedFile.name.replace(/\.srt$/i, ''); // Remove .srt extension
        } catch (readError) {
            console.error("Error reading file:", readError);
            return showError('Could not read the selected file.');
        }
    } else { // inputMethod === 'text'
        if (!srtTextContent) return showError('Please paste SRT content.');
        srtContent = srtTextContent;
    }

    if (!srtContent.trim()) {
        return showError('SRT content is empty.');
    }

    // --- Start Processing ---
    submitButton.disabled = true;
    submitButton.textContent = 'Translating...';
    progressContainer.style.display = 'block';
    console.log('Starting translation process...');
    const startTime = performance.now();
    firstChunkTime = 0; // Reset timer

    try {
        // 1. Parse SRT
        const parsedEntries = parseSRT(srtContent);
        if (parsedEntries.length === 0) {
            throw new Error('No valid SRT entries found in the input. Please check the format.');
        }
        console.log(`Parsed ${parsedEntries.length} entries.`);

        // 2. Split into Chunks
        // Adjust chunkCount if it's larger than the number of entries
        chunkCount = Math.min(chunkCount, parsedEntries.length);
        const chunks = splitIntoChunks(parsedEntries, chunkCount);
        if (chunks.length === 0 || chunks.every(chunk => chunk.length === 0)) {
            throw new Error('Failed to split SRT entries into processable chunks.');
        }
        const totalChunks = chunks.length;
        console.log(`Split into ${totalChunks} chunks.`);


        // 3. Translate Chunks Iteratively
        const allTranslatedEntries = [];
        const failedChunkIndices = [];

        for (let i = 0; i < totalChunks; i++) {
            updateProgress(i, totalChunks, i === 0 ? startTime : null); // Update progress before starting chunk
            const currentChunk = chunks[i];

            try {
                const translatedChunkTexts = await translateChunk(
                    currentChunk, apiKey, baseDelay, quotaDelay, lang, i + 1, model, promptTemplate
                );

                // Reconstruct entries for this chunk with translated text
                currentChunk.forEach((entry, index) => {
                    allTranslatedEntries.push({
                        ...entry, // Keep id, timeStamp
                        text: translatedChunkTexts[index] // Use translated text
                    });
                });
                console.log(`Successfully processed chunk ${i + 1}`);

            } catch (chunkError) {
                console.error(`Failed to translate chunk ${i + 1}:`, chunkError);
                failedChunkIndices.push(i + 1);
                // Add original text for failed chunks
                currentChunk.forEach(entry => {
                    allTranslatedEntries.push(entry); // Keep original entry
                });
                // Show non-blocking error for the chunk
                showError(`Chunk ${i + 1} failed: ${chunkError.message.substring(0, 100)}... Using original text.`);
                // Continue to the next chunk
            }
        }

        // 4. Reconstruct Final SRT
        // Ensure entries are sorted by original ID (numeric sort) before reconstructing
         allTranslatedEntries.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
         const finalSRT = reconstructSRT(allTranslatedEntries);

        // 5. Provide Download Link
        const blob = new Blob([finalSRT], { type: 'application/srt;charset=utf-8' }); // Use standard MIME type
        const url = URL.createObjectURL(blob);
        const downloadFileName = `${originalFileName}_${lang}.srt`;

        downloadLinkContainer.innerHTML = `<a href="${url}" download="${downloadFileName}">Download Translated SRT</a>`;
        downloadLinkContainer.style.display = 'block';
        downloadLinkContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });


        // 6. Final Status Message
        const endTime = performance.now();
        const duration = ((endTime - startTime) / 1000).toFixed(1);
        console.log(`Translation finished in ${duration} seconds.`);

        if (failedChunkIndices.length > 0) {
            showError(`Translation complete with ${failedChunkIndices.length} failed chunk(s): [${failedChunkIndices.join(', ')}]. Original text was used for these. (${duration}s)`, false);
            progressText.textContent = `DONE with ${failedChunkIndices.length} errors`;
        } else {
            showError(`Translation successful! (${duration}s)`, true);
            progressText.textContent = 'DONE';
            progressBar.style.width = '100%'; // Ensure it's full on success
        }

        // 7. Save API Key if requested
        saveApiKey();

    } catch (error) {
        console.error('Main translation handler error:', error);
        showError(`An error occurred: ${error.message}`);
        progressContainer.style.display = 'none'; // Hide progress on fatal error
    } finally {
        // Re-enable button regardless of success or failure
        submitButton.disabled = false;
        submitButton.textContent = localStorage.getItem('language') === 'Persian' ? 'ترجمه' : 'Translate';
    }
}

// --- Event Listeners ---
themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-theme');
    updateTheme(isLight);
});

languageToggle.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') === 'Persian' ? 'English' : 'Persian';
    updateLanguage(currentLanguage);
});

clearMemoryButton.addEventListener('click', clearTranslationMemory);

togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

rememberMeCheckbox.addEventListener('change', saveApiKey); // Save immediately on change if needed, or rely on form submission

// Add listener for form submission
translateForm.addEventListener('submit', handleTranslate);

// Input method switching
inputMethodRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const method = e.target.value;
        if (method === 'file') {
            fileInputSection.style.display = 'block';
            textInputSection.style.display = 'none';
            // No need to manage 'required' dynamically if validation handles it
        } else {
            fileInputSection.style.display = 'none';
            textInputSection.style.display = 'block';
        }
         errorMessageDiv.style.display = 'none'; // Hide errors when switching
    });
});

// Keyboard shortcuts (optional)
document.addEventListener('keydown', (e) => {
    // Ctrl+B or Cmd+B to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        themeToggle.click();
    }
    // Ctrl+Enter or Cmd+Enter to submit form
     if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
         // Check if focus is NOT in a textarea to avoid conflict
         if (document.activeElement?.tagName !== 'TEXTAREA') {
            e.preventDefault();
            translateForm.requestSubmit(); // Programmatically submit the form
         }
     }
});


// --- Initial Page Load Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    updateTheme(savedTheme === 'light');

    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'English'; // Default to English
    updateLanguage(savedLanguage);

    // Load saved API key
    loadApiKey();

    // Set initial state for input method display
    const initialInputMethod = document.querySelector('input[name="input_method"]:checked').value;
     fileInputSection.style.display = initialInputMethod === 'file' ? 'block' : 'none';
     textInputSection.style.display = initialInputMethod === 'text' ? 'block' : 'none';

    console.log("Static Translator Initialized");
});
