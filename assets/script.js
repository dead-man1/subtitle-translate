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
        'step1Indicator': 'Step 1',
        'step1Name': 'API Setup',
        'step2Indicator': 'Step 2',
        'step2Name': 'Add Content',
        'step3Indicator': 'Step 3',
        'step3Name': 'Translate',
        // Step 1: API
        'step1Title': 'Step 1: Configure Your API Key',
        'step1Description': 'This tool uses the Gemini API. Please provide your API key to proceed. Your key is stored locally in your browser and is never sent to our servers.',
        'selectApiKeyLabel': 'Select an API Key',
        'addNewKeyTitle': 'Add a New Key',
        'newKeyNameLabel': 'Key Name (e.g., "Personal", "Work")',
        'newKeyValueLabel': 'API Key Value',
        'addKeyBtn': 'Add Key',
        'deleteKeyBtn': 'Delete Key',
        'noKeysAdded': 'No keys added yet. Add one below.',
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
        // Step 3: Translate & Advanced Settings
        'step3Title': 'Step 3: Finalize and Translate',
        'targetLangLabel': 'Target Language',
        'targetLangPlaceholder': 'e.g., Spanish, French, Japanese',
        'advancedSettings': 'Advanced Settings',
        'advancedWarning': 'Adjusting these settings can affect performance, cost, and quality. Proceed with caution.',
        'modelLabel': 'AI Model',
        'temperatureLabel': 'Temperature',
        'chunkStrategyLabel': 'Chunking Strategy',
        'chunkStrategyDefault': 'Default',
        'chunkStrategyAuto': 'Automatic',
        'chunkStrategyManual': 'Manual',
        'chunkCountManualLabel': 'Number of Chunks',
        'requestDelayLabel': 'Request Delay (ms)',
        'requestDelayNote': 'Delay between each API request (e.g., 4000 for 15 RPM free tier).',
        'useProxyLabel': 'Use Proxy',
        'customProxyLabel': 'Custom Proxy URL (Optional)',
        'customProxyNote': 'Deploy your own proxy using <a href="https://github.com/yebekhe/middleman" target="_blank" class="underline hover:text-primary-400">Middleman</a>.',
        'promptSettingsTitle': 'Prompt & Separator Settings',
        'customSeparatorLabel': 'Text Separator',
        'customSeparatorNote': 'The string used to separate text lines. Use \\n for newlines.',
        'translationToneLabel': 'Translation Tone',
        'translationToneNote': 'e.g., formal, informal, humorous, dramatic.',
        'customPromptLabel': 'Translation Prompt Template',
        'customPromptNote': 'Use {LANG}, {TONE}, and {TEXT} as placeholders.',
        'noCensorLabel': 'Add "uncensored" directive',
        'noCensorNote': 'Appends a request to the prompt to not censor explicit content.',
        'translateNow': 'Translate Now',
        // Results Area
        'progressTitle': 'Translation in Progress...',
        'progressComplete': 'Complete',
        'progressEstimating': 'Estimating...',
        'progressCalculating': 'Calculating...',
        'progressRemaining': 'remaining',
        'editTitle': 'Edit Your Translation',
        'successTitle': 'Translation Complete!',
        'successText': 'Your translated file is ready for download.',
        'errorTitle': 'An Error Occurred',
        'startNew': 'Start New',
        'downloadFile': 'Download File',
        'retryFailed': 'Retry Failed Chunks:',
        'retryButton': 'Retry Chunk',
        'retryingButton': 'Retrying...',
        'findReplace': 'Find/Replace',
        'tableHeaderId': '#',
        'tableHeaderOriginal': 'Original Text',
        'tableHeaderTranslated': 'Translated Text (Editable)',
        'tableHeaderAction': 'Action',
        'logTitle': 'Live Log',
        'logCopy': 'Copy',
        'logCopied': 'Copied!',
        'logClear': 'Clear',
        // Modals
        'quotaModalTitle': 'Quota Reached',
        'quotaModalLabel': 'Switch to a different API Key / Model combination:',
        'quotaModalNote': 'The translation will resume from where it left off.',
        'findReplaceTitle': 'Find and Replace',
        'findLabel': 'Find',
        'replaceLabel': 'Replace with',
        'caseSensitiveLabel': 'Case sensitive',
        'findNextBtn': 'Find Next',
        'replaceBtn': 'Replace',
        'replaceAllBtn': 'Replace All',
        'switchAndContinueBtn': 'Switch and Continue',
        'cancelTranslationBtn': 'Cancel Translation',
        // Alerts & Confirmations
        'clearMemoryConfirm': 'Are you sure you want to clear all saved translations from memory?',
        'clearMemorySuccess': 'Translation memory cleared!',
        'deleteKeyConfirm': 'Are you sure you want to delete the key "{keyName}"?',
        'errorRequired': 'Both key name and value are required.',
        'errorKeyExists': 'This API key has already been added.',
        'errorNoFile': 'Please select a subtitle file.',
        'errorNoText': 'Please paste SRT content.',
        'errorNoTranslatableText': 'No translatable text found. Original content loaded in editor.',
        'errorTranslationFailed': 'A critical error occurred: {error}',
        'errorFindText': 'Please enter text to find.',
        'errorFindEnd': 'End of document reached.',
        'footerText': 'Created with <i class="fas fa-heart text-red-500 mx-1"></i> by YEBEKHE',
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
        'step1Indicator': 'مرحله ۱',
        'step1Name': 'تنظیم API',
        'step2Indicator': 'مرحله ۲',
        'step2Name': 'افزودن محتوا',
        'step3Indicator': 'مرحله ۳',
        'step3Name': 'ترجمه',
        // Step 1: API
        'step1Title': 'مرحله ۱: کلید API خود را پیکربندی کنید',
        'step1Description': 'این ابزار از Gemini API استفاده می‌کند. لطفاً برای ادامه، کلید API خود را ارائه دهید. کلید شما به صورت محلی در مرورگرتان ذخیره می‌شود و هرگز به سرورهای ما ارسال نمی‌گردد.',
        'selectApiKeyLabel': 'یک کلید API انتخاب کنید',
        'addNewKeyTitle': 'افزودن کلید جدید',
        'newKeyNameLabel': 'نام کلید (مثال: "شخصی"، "کاری")',
        'newKeyValueLabel': 'مقدار کلید API',
        'addKeyBtn': 'افزودن کلید',
        'deleteKeyBtn': 'حذف کلید',
        'noKeysAdded': 'هنوز کلیدی اضافه نشده است. یک کلید در پایین اضافه کنید.',
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
        // Step 3: Translate & Advanced Settings
        'step3Title': 'مرحله ۳: نهایی‌سازی و ترجمه',
        'targetLangLabel': 'زبان مقصد',
        'targetLangPlaceholder': 'مثال: اسپانیایی، فرانسوی، ژاپنی',
        'advancedSettings': 'تنظیمات پیشرفته',
        'advancedWarning': 'تنظیم این پارامترها می‌تواند بر عملکرد، هزینه و کیفیت ترجمه تأثیر بگذارد. با احتیاط عمل کنید.',
        'modelLabel': 'مدل هوش مصنوعی',
        'temperatureLabel': 'دما (خلاقیت)',
        'chunkStrategyLabel': 'استراتژی تقسیم‌بندی',
        'chunkStrategyDefault': 'پیش‌فرض',
        'chunkStrategyAuto': 'خودکار',
        'chunkStrategyManual': 'دستی',
        'chunkCountManualLabel': 'تعداد بخش‌ها',
        'requestDelayLabel': 'تأخیر بین درخواست‌ها (ms)',
        'requestDelayNote': 'تأخیر بین هر درخواست API (مثال: 4000 برای طرح رایگان 15 RPM).',
        'useProxyLabel': 'استفاده از پروکسی',
        'customProxyLabel': 'آدرس پروکسی سفارشی (اختیاری)',
        'customProxyNote': 'پروکسی خود را با استفاده از <a href="https://github.com/yebekhe/middleman" target="_blank" class="underline hover:text-primary-400">Middleman</a> راه‌اندازی کنید.',
        'promptSettingsTitle': 'تنظیمات پرامپت و جداکننده',
        'customSeparatorLabel': 'جداکننده متن',
        'customSeparatorNote': 'رشته‌ای که برای جدا کردن خطوط متن ارسالی به هوش مصنوعی استفاده می‌شود. از \\n برای خط جدید استفاده کنید.',
        'translationToneLabel': 'لحن ترجمه',
        'translationToneNote': 'مثال: رسمی، غیررسمی، طنزآمیز، دراماتیک.',
        'customPromptLabel': 'قالب پرامپت ترجمه',
        'customPromptNote': 'از {LANG}، {TONE} و {TEXT} به عنوان placeholder استفاده کنید.',
        'noCensorLabel': 'افزودن دستور "بدون سانسور"',
        'noCensorNote': 'درخواستی به پرامپت اضافه می‌کند تا محتوای صریح سانسور نشود.',
        'translateNow': 'شروع ترجمه',
        // Results Area
        'progressTitle': 'در حال ترجمه...',
        'progressComplete': 'تکمیل شد',
        'progressEstimating': 'در حال تخمین...',
        'progressCalculating': 'در حال محاسبه...',
        'progressRemaining': 'باقیمانده',
        'editTitle': 'ترجمه خود را ویرایش کنید',
        'successTitle': 'ترجمه کامل شد!',
        'successText': 'فایل ترجمه شده شما برای دانلود آماده است.',
        'errorTitle': 'خطایی روی داد',
        'startNew': 'شروع ترجمه جدید',
        'downloadFile': 'دانلود فایل',
        'retryFailed': 'تلاش مجدد برای بخش‌های ناموفق:',
        'retryButton': 'تلاش مجدد',
        'retryingButton': 'در حال تلاش...',
        'findReplace': 'یافتن/جایگزینی',
        'tableHeaderId': '#',
        'tableHeaderOriginal': 'متن اصلی',
        'tableHeaderTranslated': 'متن ترجمه‌شده (قابل ویرایش)',
        'tableHeaderAction': 'عملیات',
        'logTitle': 'لاگ زنده',
        'logCopy': 'کپی',
        'logCopied': 'کپی شد!',
        'logClear': 'پاک‌سازی',
        // Modals
        'quotaModalTitle': 'محدودیت استفاده',
        'quotaModalLabel': 'به یک ترکیب کلید API / مدل دیگر تغییر دهید:',
        'quotaModalNote': 'ترجمه از جایی که متوقف شده بود ادامه خواهد یافت.',
        'findReplaceTitle': 'یافتن و جایگزینی',
        'findLabel': 'یافتن',
        'replaceLabel': 'جایگزینی با',
        'caseSensitiveLabel': 'حساس به حروف بزرگ و کوچک',
        'findNextBtn': 'بعدی را بیاب',
        'replaceBtn': 'جایگزین کن',
        'replaceAllBtn': 'جایگزینی همه',
        'switchAndContinueBtn': 'تغییر و ادامه',
        'cancelTranslationBtn': 'لغو ترجمه',
        // Alerts & Confirmations
        'clearMemoryConfirm': 'آیا مطمئن هستید که می‌خواهید تمام ترجمه‌های ذخیره شده در حافظه را پاک کنید؟',
        'clearMemorySuccess': 'حافظه ترجمه پاک شد!',
        'deleteKeyConfirm': 'آیا از حذف کلید "{keyName}" مطمئن هستید؟',
        'errorRequired': 'هر دو فیلد نام و مقدار کلید الزامی است.',
        'errorKeyExists': 'این کلید API قبلاً اضافه شده است.',
        'errorNoFile': 'لطفا یک فایل زیرنویس انتخاب کنید.',
        'errorNoText': 'لطفا محتوای SRT را وارد کنید.',
        'errorNoTranslatableText': 'هیچ متن قابل ترجمه‌ای یافت نشد. محتوای اصلی در ویرایشگر بارگذاری شد.',
        'errorTranslationFailed': 'یک خطای اساسی رخ داد: {error}',
        'errorFindText': 'لطفا متنی برای یافتن وارد کنید.',
        'errorFindEnd': 'به انتهای سند رسیدید.',
        'footerText': 'ساخته شده با <i class="fas fa-heart text-red-500 mx-1"></i> توسط YEBEKHE',
    }
};

// --- Global Variables & State ---
const AVAILABLE_MODELS = [
    'gemini-2.5-pro',
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.5-flash-lite',
    'gemini-2.0-flash-lite'
];

let uiLang = 'en';
let uploadedFile = null;
let translationMemory = JSON.parse(localStorage.getItem('translationMemory') || '{}');
let savedApiKeys = [];
let currentStep = 1;
let firstChunkTime = 0;
let failedChunksData = [];
let currentAllTranslatedEntries = [];
let currentOriginalFileName = 'translation';
let currentOriginalFormat = 'srt';
let currentApiKey = '';
let currentModel = 'gemini-2.5-flash';
let currentTemperature = 0.7;
let currentRequestDelay = 4000;
let currentTargetLangForRetry = '';
const proxyUrl = 'https://middleman.yebekhe.workers.dev';

// State for new features
let findState = {
    lastFoundRow: -1,
    lastFoundPos: -1,
    currentQuery: ''
};
// State for remembering user choices during a translation session
let sessionOverrides = {};

// --- DOM Element References ---
let htmlElement, languageToggle, clearMemoryButton, translateForm, dropzoneElement, srtTextInput, useProxyCheckbox, togglePasswordBtn, langInput, modelSelect, temperatureInput, progressContainer, progressBar, progressText, chunkStatusSpan, timeEstimateSpan, errorMessageDiv, submitButton;
let stepSections, stepIndicators, formContainer, resultsArea;
let nextToStep2Btn, nextToStep3Btn, backToStep1Btn, backToStep2Btns;
let selectFileInputBtn, selectTextInputBtn, fileInputContainer, textInputContainer;
let fileFeedbackDiv, fileNameSpan, removeFileBtn, errorContentDiv;
let myDropzone;
let editorContainer, editorTbody, downloadEditedBtn, startNewFromEditorBtn;
let logViewerContainer, logOutput, toggleLogBtn, copyLogBtn, clearLogBtn;
let chunkStrategyRadios, manualChunkContainer, chunkCountManualInput, requestDelayInput;
let modelSwitchModal, modelSwitchDialog, modalSwitchBtn, modalCancelBtn, modalComboSelect;
let separatorInput, promptTemplateInput, noCensorCheckbox, toneInput;
let apiKeySelect, newKeyNameInput, newKeyValueInput, addKeyBtn, deleteKeyBtn;
let customProxyContainer, customProxyInput;

// DOM references for new features
let findReplaceBtn, findReplaceModal, findReplaceDialog, findReplaceCloseBtn, findInput, replaceInput, caseSensitiveCheckbox, findNextBtn, replaceBtn, replaceAllBtn, findReplaceFeedback;


// --- UI & WIZARD MANAGEMENT ---

function updateLanguage(lang) {
    uiLang = lang;
    localStorage.setItem('language', lang);
    const isRTL = lang === 'fa';
    const translations = i18n[uiLang];
    
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
        document.body.classList.add('lang-fa');
    } else {
        document.body.classList.remove('lang-fa');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) el.textContent = translations[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) el.placeholder = translations[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[key]) el.innerHTML = translations[key];
    });
    
    // Handle dynamic elements and icons
    document.querySelectorAll('.next-btn-icon').forEach(icon => {
        icon.classList.toggle('fa-arrow-right', !isRTL);
        icon.classList.toggle('fa-arrow-left', isRTL);
    });
    document.querySelectorAll('.back-btn-icon').forEach(icon => {
        icon.classList.toggle('fa-arrow-left', !isRTL);
        icon.classList.toggle('fa-arrow-right', isRTL);
    });

    loadApiKeys();
}

function goToStep(stepNumber) {
    currentStep = stepNumber;
    stepSections.forEach(section => section.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`)?.classList.add('active');

    stepIndicators.forEach((indicator, index) => {
        const step = index + 1;
        const textSpans = indicator.querySelectorAll('span');
        indicator.className = 'group flex flex-col py-2 md:border-t-4 md:pt-4 md:pb-0'; // Base classes
        
        // Direction-aware classes
        if (document.documentElement.dir === 'rtl') {
            indicator.classList.add('border-e-4', 'pe-4', 'md:border-e-0', 'md:pe-0');
        } else {
            indicator.classList.add('border-s-4', 'ps-4', 'md:border-s-0', 'md:ps-0');
        }
        
        textSpans.forEach(span => span.className = 'text-sm font-medium');

        if (step < stepNumber) {
            indicator.classList.add('border-green-500');
            textSpans.forEach(span => span.classList.add('text-green-600', 'dark:text-green-400'));
        } else if (step === stepNumber) {
            indicator.classList.add('border-primary-600');
            textSpans.forEach(span => span.classList.add('text-primary-600'));
        } else {
            indicator.classList.add('border-gray-200', 'dark:border-gray-700');
            textSpans.forEach(span => span.classList.add('text-gray-500', 'dark:text-gray-400'));
        }
    });
    window.scrollTo(0, 0);

    // FIX: Run completion check for the newly activated step
    switch (stepNumber) {
        case 1:
            checkStep1Completion();
            break;
        case 2:
            checkStep2Completion();
            break;
    }
}

function checkStep1Completion() {
    if (nextToStep2Btn) nextToStep2Btn.disabled = !currentApiKey;
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
    if (!icon || !newKeyValueInput) return;
    if (newKeyValueInput.type === 'password') {
        newKeyValueInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        newKeyValueInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
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
    const isWarning = type === 'warn';
    titleEl.textContent = isSuccess ? i18n[uiLang].successTitle : i18n[uiLang].errorTitle;
    iconEl.className = `fas text-xl ${isSuccess ? 'fa-check-circle text-green-500' : isWarning ? 'fa-exclamation-triangle text-yellow-500' : 'fa-exclamation-circle text-red-500'}`;
    errorMessageDiv.className = `mt-6 p-4 rounded-xl flex items-start border ${isSuccess ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700' : isWarning ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700' : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700'}`;
    titleEl.className = `text-md font-bold ${isSuccess ? 'text-green-800 dark:text-green-200' : isWarning ? 'text-yellow-800 dark:text-yellow-200' : 'text-red-800 dark:text-red-200'}`;
    errorContentDiv.className = `text-sm mt-2 ${isSuccess ? 'text-green-700 dark:text-green-300' : isWarning ? 'text-yellow-700 dark:text-yellow-300' : 'text-red-700 dark:text-red-300'}`;
    
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
    if(editorContainer) editorContainer.style.display = 'none';
    if(logViewerContainer) logViewerContainer.style.display = 'none';
    
    failedChunksData = [];
    currentAllTranslatedEntries = [];
}

function updateProgress(chunkIndex, totalChunks, startTime) {
    if (!progressContainer || progressContainer.style.display === 'none') return;
    const currentDisplayChunk = chunkIndex + 1;
    const progressPercentage = totalChunks > 0 ? Math.round((currentDisplayChunk / totalChunks) * 100) : 0;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage}% ${i18n[uiLang].progressComplete}`;
    chunkStatusSpan.textContent = `${i18n[uiLang].processingChunk} ${currentDisplayChunk}/${totalChunks}`;

    if (startTime) {
        timeEstimateSpan.textContent = i18n[uiLang].progressCalculating;
    } else if (firstChunkTime > 0) {
        const remainingChunks = totalChunks - currentDisplayChunk;
        if (remainingChunks > 0) {
            const estimatedRemainingTime = remainingChunks * firstChunkTime;
            const minutes = Math.floor(estimatedRemainingTime / 60);
            const seconds = Math.floor(estimatedRemainingTime % 60);
            timeEstimateSpan.textContent = `~${minutes}m ${seconds}s ${i18n[uiLang].progressRemaining}`;
        } else {
            timeEstimateSpan.textContent = i18n[uiLang].progressComplete;
        }
    }
}

// --- LOGGING UTILITY ---
function clearLog() {
    if (logOutput) logOutput.innerHTML = '';
}

function logMessage(message, type = 'info') {
    if (!logOutput) return;
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    const p = document.createElement('p');
    let iconClass = 'fas fa-info-circle text-blue-400';
    let messageColor = 'text-gray-300';

    if (type === 'success') {
        iconClass = 'fas fa-check-circle text-green-400';
        messageColor = 'text-green-300';
    } else if (type === 'warn') {
        iconClass = 'fas fa-exclamation-triangle text-yellow-400';
        messageColor = 'text-yellow-300';
    } else if (type === 'error') {
        iconClass = 'fas fa-times-circle text-red-400';
        messageColor = 'text-red-300';
    }
    p.innerHTML = `<span class="text-gray-500">${timestamp}</span> <i class="${iconClass} mx-2"></i> <span class="${messageColor}">${message}</span>`;
    logOutput.appendChild(p);
    logOutput.scrollTop = logOutput.scrollHeight;
}

// --- MODAL MANAGEMENT ---
let resolveModalPromise = null;

function showModelSwitchModal(failedModel, failedApiKey) {
    return new Promise((resolve) => {
        resolveModalPromise = resolve;

        const modalMessage = modelSwitchModal.querySelector('#modal-message');
        modalMessage.innerHTML = `You have reached your daily request limit for the model <strong>"${failedModel}"</strong> with the selected API key. Please choose a different combination to continue.`;

        modalComboSelect.innerHTML = '';
        let availableOptions = 0;

        // Populate the combo dropdown with all valid Key/Model combinations
        savedApiKeys.forEach(key => {
            AVAILABLE_MODELS.forEach(model => {
                // The only invalid combination is the one that just failed.
                if (key.value === failedApiKey && model === failedModel) {
                    return; // Skip this option
                }

                const option = document.createElement('option');
                // The value stores both key and model, separated by a pipe
                option.value = `${key.value}|${model}`;
                option.textContent = `${key.name} (${model})`;
                modalComboSelect.appendChild(option);
                availableOptions++;
            });
        });
        
        if (availableOptions === 0) {
            modalComboSelect.innerHTML = `<option value="">No other combinations available</option>`;
            modalSwitchBtn.disabled = true;
        } else {
            modalSwitchBtn.disabled = false;
        }

        modelSwitchModal.style.display = 'flex';
        setTimeout(() => {
            modelSwitchDialog.classList.remove('opacity-0', 'scale-95');
            modelSwitchDialog.classList.add('opacity-100', 'scale-100');
        }, 10);
    });
}

function hideModal() {
    modelSwitchDialog.classList.remove('opacity-100', 'scale-100');
    modelSwitchDialog.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modelSwitchModal.style.display = 'none';
        if (resolveModalPromise) {
            resolveModalPromise(null);
            resolveModalPromise = null;
        }
    }, 200);
}


// --- API KEY MANAGEMENT ---
function loadApiKeys() {
    savedApiKeys = JSON.parse(localStorage.getItem('apiKeys') || '[]');
    const lastSelectedKey = localStorage.getItem('selectedApiKey');
    apiKeySelect.innerHTML = '';

    if (savedApiKeys.length === 0) {
        apiKeySelect.innerHTML = `<option value="">${i18n[uiLang].noKeysAdded}</option>`;
        currentApiKey = '';
    } else {
        savedApiKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key.value;
            option.textContent = key.name;
            if (key.value === lastSelectedKey) {
                option.selected = true;
            }
            apiKeySelect.appendChild(option);
        });
        if (!apiKeySelect.value && apiKeySelect.options.length > 0) {
            apiKeySelect.options[0].selected = true;
        }
        currentApiKey = apiKeySelect.value;
    }
    deleteKeyBtn.disabled = savedApiKeys.length === 0;
    checkStep1Completion();
}

function saveApiKeys() {
    localStorage.setItem('apiKeys', JSON.stringify(savedApiKeys));
}

function handleAddKey() {
    const name = newKeyNameInput.value.trim();
    const value = newKeyValueInput.value.trim();

    if (!name || !value) {
        showError(i18n[uiLang].errorRequired);
        return;
    }
    if (savedApiKeys.some(key => key.value === value)) {
        showError(i18n[uiLang].errorKeyExists);
        return;
    }

    savedApiKeys.push({ name, value });
    saveApiKeys();
    localStorage.setItem('selectedApiKey', value);
    newKeyNameInput.value = '';
    newKeyValueInput.value = '';
    loadApiKeys();
    hideError();
}

function handleDeleteKey() {
    const selectedValue = apiKeySelect.value;
    if (!selectedValue) return;

    const keyToDelete = savedApiKeys.find(key => key.value === selectedValue);
    const confirmMsg = i18n[uiLang].deleteKeyConfirm.replace('{keyName}', keyToDelete.name);

    if (confirm(confirmMsg)) {
        savedApiKeys = savedApiKeys.filter(key => key.value !== selectedValue);
        saveApiKeys();
        
        if (localStorage.getItem('selectedApiKey') === selectedValue) {
            localStorage.removeItem('selectedApiKey');
        }
        
        loadApiKeys();
    }
}

function handleSelectKey() {
    currentApiKey = apiKeySelect.value;
    localStorage.setItem('selectedApiKey', currentApiKey);
    checkStep1Completion();
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


async function fetchTranslation(chunk, apiKey, targetLang, model, temperature) {
    if (!chunk || chunk.length === 0) return [];

    const separator = separatorInput.value.replace(/\\n/g, '\n');
    const promptTemplate = promptTemplateInput.value;
    const tone = toneInput.value.trim();
    const sourceTexts = chunk.map(entry => entry.text);
    const combinedText = sourceTexts.join(separator);
    
    let effectivePrompt = promptTemplate
        .replace('{LANG}', targetLang)
        .replace('{TEXT}', combinedText)
        .replace('{TONE}', tone);

    if (noCensorCheckbox.checked) {
        effectivePrompt += '\n\nIMPORTANT: Do not censor or alter any explicit words or profanity in the original text. Translate them directly and accurately.';
    }

    const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    let targetUrl = directUrl;
    if (useProxyCheckbox.checked) {
        const customProxy = customProxyInput.value.trim();
        targetUrl = customProxy || proxyUrl; // Use custom if provided, else default
    }
    
    let finalPayload = {
        contents: [{ parts: [{ text: effectivePrompt }] }],
        safetySettings: [{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }],
        generationConfig: { temperature }
    };
    if (useProxyCheckbox.checked) finalPayload.endpoint = directUrl;

    const fetchOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(finalPayload) };
    
    logMessage(`Fetching translation for a sub-chunk of size ${chunk.length} using model "${model}".`);
    const response = await fetch(targetUrl, fetchOptions);

    if (!response.ok) {
        if (response.status === 429) {
            let errorData;
            try {
                errorData = await response.json();
                const quotaFailure = errorData?.error?.details?.find(d => d["@type"]?.includes("QuotaFailure"));
                
                if (quotaFailure?.violations?.some(v => v.quotaId?.includes('FreeTier'))) {
                    throw new Error(`QUOTA_EXHAUSTED ${model} ${apiKey}`);
                }

                const retryInfo = errorData?.error?.details?.find(d => d["@type"]?.includes("RetryInfo"));
                let waitMs = 61000;
                if (retryInfo?.retryDelay) {
                    const seconds = parseInt(retryInfo.retryDelay, 10);
                    if (!isNaN(seconds) && seconds > 0) {
                        waitMs = (seconds * 1000) + 1000;
                        logMessage(`Rate limit hit. API suggested a ${seconds}s delay. Waiting...`, 'warn');
                    }
                } else {
                    logMessage(`Rate limit hit. Waiting for the default ${Math.round(waitMs / 1000)}s...`, 'warn');
                }
                throw new Error(`RATE_LIMIT_HIT ${waitMs}`);
            } catch (e) {
                if (e.message.startsWith('QUOTA_EXHAUSTED')) throw e;
                throw new Error(`API error 429: Could not parse error details.`);
            }
        }
        throw new Error(`API error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (responseText === undefined) throw new Error('Invalid API response structure.');
    
    let translatedLines = responseText.trim().split(separator.trim());
    
    if (translatedLines.length === chunk.length + 1 && translatedLines[translatedLines.length - 1].trim() === '') {
        logMessage(`Corrected mismatch: Removed trailing empty line for chunk size ${chunk.length}.`, 'warn');
        translatedLines.pop();
    }

    if (responseText.trim() !== "" && translatedLines.length !== chunk.length) {
         const errorMsg = `Line count mismatch. Expected ${chunk.length}, got ${translatedLines.length}.`;
         logMessage(errorMsg, 'error');
         logMessage(`Problematic response (first 100 chars): "${responseText.substring(0, 100)}..."`);
         throw new Error(errorMsg);
    }
    
    logMessage(`Successfully translated sub-chunk of size ${chunk.length}.`, 'success');
    return translatedLines.map(line => line.trim());
}

async function translateChunkRecursively(chunk, apiKey, targetLang, model, temperature, requestDelay) {
    try {
        return await fetchTranslation(chunk, apiKey, targetLang, model, temperature);
    } catch (error) {
        if (error.message.startsWith('RATE_LIMIT_HIT')) {
            const waitMs = parseInt(error.message.split(' ')[1], 10);
            await new Promise(resolve => setTimeout(resolve, waitMs));
            return translateChunkRecursively(chunk, apiKey, targetLang, model, temperature, requestDelay);
        } else if (error.message.startsWith('QUOTA_EXHAUSTED')) {
            const [, failedModel, failedApiKey] = error.message.split(' ');
            logMessage(`Daily quota exhausted for model: ${failedModel} with the selected API key.`, 'error');
            
            const userResponse = await showModelSwitchModal(failedModel, failedApiKey);
            
            if (userResponse && userResponse.choice === 'switch') {
                const { newModel, newApiKey } = userResponse;
                
                // Set the override for this session
                const failureKey = `${failedApiKey}|${failedModel}`;
                sessionOverrides[failureKey] = { newApiKey, newModel };
                logMessage(`Override stored for session: ${failureKey} -> ${newApiKey}|${newModel}`, 'info');

                return translateChunkRecursively(chunk, newApiKey, targetLang, newModel, temperature, requestDelay);
            } else {
                logMessage('User cancelled translation due to quota exhaustion.', 'warn');
                throw new Error('Translation cancelled by user due to model/key quota limit.');
            }
        } else {
            logMessage(`A non-recoverable error occurred during translation: ${error.message}`, 'error');
            throw error;
        }
    }
}

async function translateChunk(chunk, apiKey, targetLang, model, temperature, requestDelay) {
    const textsToTranslate = [];
    const cachedResults = new Map();

    // Check for session-level overrides before proceeding
    const failureKey = `${apiKey}|${model}`;
    const override = sessionOverrides[failureKey];
    let effectiveApiKey = apiKey;
    let effectiveModel = model;

    if (override) {
        logMessage(`Applying session override for ${failureKey}...`, 'warn');
        effectiveApiKey = override.newApiKey;
        effectiveModel = override.newModel;
    }

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

    const translatedTexts = await translateChunkRecursively(textsToTranslate, effectiveApiKey, targetLang, effectiveModel, temperature, requestDelay);

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
    
    await new Promise(resolve => setTimeout(resolve, requestDelay));
    return finalTranslations;
}

async function handleTranslate(event) {
    event.preventDefault();
    sessionOverrides = {}; // Reset session overrides at the start of a new translation
    formContainer.style.display = 'none';
    resultsArea.style.display = 'block';
    resetUIForNewTranslation();
    clearLog();
    logMessage('Translation process started.');

    const targetLanguage = langInput.value.trim();

    currentApiKey = apiKeySelect.value;
    currentModel = modelSelect.value;
    currentTemperature = parseFloat(temperatureInput.value);
    currentRequestDelay = parseInt(requestDelayInput.value, 10) || 4000;
    currentTargetLangForRetry = targetLanguage;
    
    let subtitleContent = '';
    const inputMethod = selectFileInputBtn.classList.contains('bg-primary-600') ? 'file' : 'text';

    if (inputMethod === 'file') {
        if (!uploadedFile) { showError(i18n[uiLang].errorNoFile); resetWizard(); return; }
        currentOriginalFormat = uploadedFile.name.split('.').pop()?.toLowerCase() || 'srt';
        currentOriginalFileName = uploadedFile.name.replace(/\.[^/.]+$/, "");
        subtitleContent = await uploadedFile.text();
    } else {
        if (srtTextInput.value.trim() === '') { showError(i18n[uiLang].errorNoText); resetWizard(); return; }
        currentOriginalFormat = 'srt';
        currentOriginalFileName = 'pasted_translation';
        subtitleContent = srtTextInput.value;
    }

    const startTime = performance.now();
    firstChunkTime = 0;

    try {
        logMessage(`Parsing ${currentOriginalFormat.toUpperCase()} file...`);
        const allParsedEntries = parseSubtitle(subtitleContent, currentOriginalFormat);
        logMessage(`Found ${allParsedEntries.length} total entries.`);
        
        allParsedEntries.forEach(entry => { if (entry.text) entry.text_original = entry.text; });
        
        const translatableEntries = allParsedEntries.filter(e => e.text?.trim());
        logMessage(`${translatableEntries.length} entries contain text to be translated.`);

        if (translatableEntries.length === 0) {
            currentAllTranslatedEntries = allParsedEntries;
            populateEditor();
            showError(i18n[uiLang].errorNoTranslatableText, 'success');
            logMessage('No translatable text found. Process finished.', 'success');
            return;
        }
        
        let chunkCount;
        const chunkStrategy = document.querySelector('input[name="chunk_strategy"]:checked').value;
        switch (chunkStrategy) {
            case 'auto':
                const idealLinesPerChunk = 50;
                chunkCount = Math.ceil(translatableEntries.length / idealLinesPerChunk);
                logMessage(`Automatic strategy: Calculated ${chunkCount} chunks for ${translatableEntries.length} lines.`, 'info');
                break;
            case 'manual':
                chunkCount = Math.ceil(parseInt(chunkCountManualInput.value, 10)) || 20;
                logMessage(`Manual strategy: Using ${chunkCount} chunks.`, 'info');
                break;
            default:
                chunkCount = 20;
                logMessage(`Default strategy: Using ${chunkCount} chunks.`, 'info');
                break;
        }
        
        const chunks = splitIntoChunks(translatableEntries, chunkCount);
        const totalChunks = chunks.length;
        logMessage(`Splitting into ${totalChunks} actual chunks for processing.`);
        const translatedTextMap = new Map();
        
        updateProgress(-1, totalChunks, startTime);

        for (let i = 0; i < totalChunks; i++) {
            updateProgress(i, totalChunks, i === 0 ? startTime : null);
            try {
                const chunkStartTime = performance.now();
                const translatedTexts = await translateChunk(chunks[i], currentApiKey, targetLanguage, currentModel, currentTemperature, currentRequestDelay);
                
                if (i === 0 && totalChunks > 1) {
                    firstChunkTime = (performance.now() - chunkStartTime) / 1000;
                    logMessage(`First chunk took ${firstChunkTime.toFixed(1)}s. Estimating remaining time.`, 'info');
                    updateProgress(i, totalChunks, null);
                }
                
                chunks[i].forEach((entry, idx) => translatedTextMap.set(entry, translatedTexts[idx] || entry.text));
            } catch (chunkError) {
                logMessage(`Chunk ${i + 1} failed permanently: ${chunkError.message}`, 'error');
                failedChunksData.push({ index: i, chunkData: chunks[i], reason: chunkError.message });
                chunks[i].forEach(entry => translatedTextMap.set(entry, entry.text));
            }
        }
        
        currentAllTranslatedEntries = allParsedEntries.map(entry => {
            const translatable = translatableEntries.find(t => t.id === entry.id && t.timeStamp === entry.timeStamp);
            return translatable && translatedTextMap.has(translatable) ? { ...entry, text: translatedTextMap.get(translatable) } : entry;
        });

        logMessage('All chunks processed. Populating editor.');
        populateEditor();
        
        if (failedChunksData.length > 0) {
            const msg = `Translation finished with ${failedChunksData.length} failed chunk(s). Edits can be made before downloading.`;
            showError(msg, 'warn');
            logMessage(msg, 'warn');
            displayRetryButtons();
        } else {
            showError(i18n[uiLang].successText, 'success');
            logMessage('Translation successful!', 'success');
        }

    } catch (error) {
        progressContainer.style.display = 'none';
        logMessage(`A critical error occurred: ${error.message}`, 'error');
        showError(i18n[uiLang].errorTranslationFailed.replace('{error}', error.message));
    }
}

function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

function isRtl(text) {
    const rtlRegex = /[\u0600-\u06FF\u0590-\u05FF]/; // Arabic, Persian, Hebrew characters
    return rtlRegex.test(text);
}

function isLanguageRtl(langName) {
    const lowerLang = langName.toLowerCase();
    const rtlKeywords = ['persian', 'farsi', 'arabic', 'hebrew', 'urdu', 'pashto', 'sindhi'];
    return rtlKeywords.some(keyword => lowerLang.includes(keyword));
}

function populateEditor() {
    if (!editorTbody) return;
    editorTbody.innerHTML = '';
    
    const targetLanguage = langInput.value.trim();
    const isTargetRtl = isLanguageRtl(targetLanguage);

    // Set header alignment based on UI language
    const headers = editorContainer.querySelectorAll('thead th');
    headers.forEach(th => {
        th.style.textAlign = (uiLang === 'fa') ? 'right' : 'left';
    });
    headers[0].style.textAlign = 'center'; // Keep '#' column centered
    headers[headers.length-1].style.textAlign = 'center'; // Keep 'Action' column centered

    currentAllTranslatedEntries.forEach((entry, index) => {
        if (entry.otherData.lineType !== 'cue' && entry.otherData.lineType !== 'dialogue') return;
        
        const tr = document.createElement('tr');
        tr.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200';
        tr.dataset.index = index;

        const originalText = entry.text_original || entry.text;
        const translatedText = entry.text;
        
        const isOriginalRtl = isRtl(originalText);

        tr.innerHTML = `
            <td class="px-4 py-2 text-center font-medium text-gray-900 dark:text-white">${entry.id}</td>
            <td class="px-6 py-2 whitespace-pre-wrap" style="direction: ${isOriginalRtl ? 'rtl' : 'ltr'}; text-align: ${isOriginalRtl ? 'right' : 'left'};">${originalText}</td>
            <td class="px-6 py-2">
                <textarea class="w-full p-1 bg-transparent border-0 rounded-md focus:ring-2 focus:ring-primary-500 overflow-hidden" style="direction: ${isTargetRtl ? 'rtl' : 'ltr'}; text-align: ${isTargetRtl ? 'right' : 'left'};" rows="1">${translatedText}</textarea>
            </td>
            <td class="px-4 py-2 text-center">
                <button class="retranslate-btn text-gray-400 hover:text-primary-500 transition-colors" title="Retranslate this line">
                    <i class="fas fa-sync-alt"></i>
                </button>
            </td>`;
        
        const textarea = tr.querySelector('textarea');
        textarea.addEventListener('input', function() {
            autoResizeTextarea(this);
            const entryIndex = this.closest('tr').dataset.index;
            currentAllTranslatedEntries[entryIndex].text = this.value;
        });

        editorTbody.appendChild(tr);
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
    button.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i> ${i18n[uiLang].retryingButton}`;
    
    const internalChunkIndex = parseInt(button.dataset.chunkIndex, 10);
    const failedChunkInfo = failedChunksData.find(fc => fc.index === internalChunkIndex);
    if (!failedChunkInfo) return;
    
    try {
        const translatedTexts = await translateChunk(failedChunkInfo.chunkData, currentApiKey, currentTargetLangForRetry, currentModel, currentTemperature, currentRequestDelay);
        const retriedMap = new Map();
        failedChunkInfo.chunkData.forEach((entry, idx) => retriedMap.set(entry, translatedTexts[idx] || entry.text));
        
        currentAllTranslatedEntries = currentAllTranslatedEntries.map(entry => {
             const translatable = failedChunkInfo.chunkData.find(t => t.id === entry.id && t.timeStamp === entry.timeStamp);
             return translatable && retriedMap.has(translatable) ? { ...entry, text: retriedMap.get(translatable) } : entry;
        });

        failedChunksData = failedChunksData.filter(fc => fc.index !== internalChunkIndex);
        showError(`Chunk ${internalChunkIndex + 1} successfully translated!`, 'success');
        button.remove();
        populateEditor();
        if (failedChunksData.length === 0) document.getElementById('retry-container')?.remove();
    } catch (retryError) {
        showError(`Retry failed for Chunk ${internalChunkIndex + 1}: ${retryError.message}`);
        button.disabled = false;
        button.textContent = `${i18n[uiLang].retryButton} ${internalChunkIndex + 1}`;
    }
}


// --- FEATURE FUNCTIONS ---

// 1. Individual Line Retranslation
async function handleIndividualRetranslate(button) { 
    const icon = button.querySelector('i');
    const tr = button.closest('tr');

    if (!tr) {
        console.error("Could not find parent row for retranslate button.");
        return;
    }

    const entryIndex = parseInt(tr.dataset.index, 10);
    const entryData = currentAllTranslatedEntries[entryIndex];
    const originalText = entryData.text_original;

    if (!originalText) {
        showError("No original text found for this line.");
        return;
    }

    // Set loading state
    icon.classList.add('fa-spin');
    button.disabled = true;

    try {
        const chunk = [{ text: originalText }]; // Create a chunk of one
        const translatedLines = await translateChunkRecursively(chunk, currentApiKey, currentTargetLangForRetry, currentModel, currentTemperature, 0);

        if (translatedLines && translatedLines.length > 0) {
            const newText = translatedLines[0];
            const textarea = tr.querySelector('textarea');
            textarea.value = newText;
            currentAllTranslatedEntries[entryIndex].text = newText;
            updateTranslationMemory(originalText, newText, currentTargetLangForRetry);
            autoResizeTextarea(textarea);
            logMessage(`Successfully re-translated line #${entryData.id}.`, 'success');
        } else {
            throw new Error("API returned no translation.");
        }
    } catch (error) {
        logMessage(`Failed to re-translate line #${entryData.id}: ${error.message}`, 'error');
        showError(`Failed to re-translate line: ${error.message}`);
    } finally {
        // Revert loading state
        icon.classList.remove('fa-spin');
        button.disabled = false;
    }
}

// 2. Find and Replace
function showFindReplaceModal() {
    findState = { lastFoundRow: -1, lastFoundPos: -1, currentQuery: '' }; // Reset state
    findReplaceFeedback.textContent = '';
    findReplaceModal.style.display = 'flex';
    setTimeout(() => {
        findReplaceDialog.classList.remove('opacity-0', 'scale-95');
        findReplaceDialog.classList.add('opacity-100', 'scale-100');
        findInput.focus();
    }, 10);
}

function hideFindReplaceModal() {
    findReplaceDialog.classList.remove('opacity-100', 'scale-100');
    findReplaceDialog.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        findReplaceModal.style.display = 'none';
    }, 200);
}

function handleFindNext() {
    const query = findInput.value;
    if (!query) {
        findReplaceFeedback.textContent = i18n[uiLang].errorFindText;
        return;
    }

    // If query changed, reset search
    if (query !== findState.currentQuery) {
        findState = { lastFoundRow: -1, lastFoundPos: -1, currentQuery: query };
    }

    const rows = Array.from(editorTbody.querySelectorAll('tr[data-index]'));
    const isCaseSensitive = caseSensitiveCheckbox.checked;

    for (let i = 0; i < rows.length; i++) {
        // Start from the beginning or the next row
        let rowIndex = (findState.lastFoundRow + i) % rows.length;
        // For the first iteration (i=0), start from the next position
        if(i === 0 && findState.lastFoundRow !== -1) {
            rowIndex = findState.lastFoundRow;
        }

        const row = rows[rowIndex];
        const textarea = row.querySelector('textarea');
        const text = textarea.value;
        const searchFrom = (rowIndex === findState.lastFoundRow) ? findState.lastFoundPos + 1 : 0;
        
        const pos = isCaseSensitive ? text.indexOf(query, searchFrom) : text.toLowerCase().indexOf(query.toLowerCase(), searchFrom);

        if (pos !== -1) {
            findState.lastFoundRow = rowIndex;
            findState.lastFoundPos = pos;
            
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
            textarea.focus();
            textarea.setSelectionRange(pos, pos + query.length);
            
            findReplaceFeedback.textContent = '';
            return;
        }
    }

    findReplaceFeedback.textContent = i18n[uiLang].errorFindEnd;
    findState = { lastFoundRow: -1, lastFoundPos: -1, currentQuery: query }; // Reset for next search
}

function handleReplace() {
    const rows = Array.from(editorTbody.querySelectorAll('tr[data-index]'));
    if (findState.lastFoundRow === -1 || !findInput.value) {
        handleFindNext(); // If nothing is selected, find first
        return;
    }

    const row = rows[findState.lastFoundRow];
    if (!row) return;

    const textarea = row.querySelector('textarea');
    const query = findInput.value;
    const replacement = replaceInput.value;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;

    // Check if the current selection matches the find query
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);
    const queryToCheck = caseSensitiveCheckbox.checked ? query : query.toLowerCase();
    const selectedTextToCheck = caseSensitiveCheckbox.checked ? selectedText : selectedText.toLowerCase();

    if (selectedTextToCheck === queryToCheck) {
        textarea.value = textarea.value.substring(0, selectionStart) + replacement + textarea.value.substring(selectionEnd);
        textarea.dispatchEvent(new Event('input')); // Trigger update
        
        // Adjust find state to the end of the replaced text
        findState.lastFoundPos = selectionStart + replacement.length -1;
    }
    
    handleFindNext();
}

function handleReplaceAll() {
    const query = findInput.value;
    if (!query) {
        findReplaceFeedback.textContent = i18n[uiLang].errorFindText;
        return;
    }

    const replacement = replaceInput.value;
    const flags = caseSensitiveCheckbox.checked ? 'g' : 'gi';
    const regex = new RegExp(query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    let replacementsCount = 0;

    editorTbody.querySelectorAll('tr[data-index] textarea').forEach(textarea => {
        const originalValue = textarea.value;
        if (originalValue.match(regex)) {
            const newValue = originalValue.replace(regex, replacement);
            replacementsCount += (originalValue.match(regex) || []).length;
            textarea.value = newValue;
            textarea.dispatchEvent(new Event('input')); // Trigger update and resize
        }
    });

    findReplaceFeedback.textContent = `Replaced ${replacementsCount} occurrence(s).`;
    findState = { lastFoundRow: -1, lastFoundPos: -1, currentQuery: '' }; // Reset search
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
    logViewerContainer = document.getElementById('log-viewer-container');
    logOutput = document.getElementById('log-output');
    toggleLogBtn = document.getElementById('toggle-log-btn');
    copyLogBtn = document.getElementById('copy-log-btn');
    clearLogBtn = document.getElementById('clear-log-btn');
    chunkStrategyRadios = document.querySelectorAll('input[name="chunk_strategy"]');
    manualChunkContainer = document.getElementById('manual_chunk_container');
    chunkCountManualInput = document.getElementById('chunk_count_manual');
    requestDelayInput = document.getElementById('request-delay');
    modelSwitchModal = document.getElementById('model-switch-modal');
    modelSwitchDialog = document.getElementById('model-switch-dialog');
    modalSwitchBtn = document.getElementById('modal-switch-btn');
    modalCancelBtn = document.getElementById('modal-cancel-btn');
    modalComboSelect = document.getElementById('modal-combo-select');
    separatorInput = document.getElementById('separator-input');
    promptTemplateInput = document.getElementById('prompt-template-input');
    noCensorCheckbox = document.getElementById('no-censor-checkbox');
    toneInput = document.getElementById('tone-input');
    apiKeySelect = document.getElementById('api-key-select');
    newKeyNameInput = document.getElementById('new-key-name');
    newKeyValueInput = document.getElementById('new-key-value');
    addKeyBtn = document.getElementById('add-key-btn');
    deleteKeyBtn = document.getElementById('delete-key-btn');
    customProxyContainer = document.getElementById('custom-proxy-container');
    customProxyInput = document.getElementById('custom-proxy-input');

    // Populate new DOM references
    findReplaceBtn = document.getElementById('find-replace-btn');
    findReplaceModal = document.getElementById('find-replace-modal');
    findReplaceDialog = document.getElementById('find-replace-dialog');
    findReplaceCloseBtn = document.getElementById('find-replace-close-btn');
    findInput = document.getElementById('find-input');
    replaceInput = document.getElementById('replace-input');
    caseSensitiveCheckbox = document.getElementById('case-sensitive-checkbox');
    findNextBtn = document.getElementById('find-next-btn');
    replaceBtn = document.getElementById('replace-btn');
    replaceAllBtn = document.getElementById('replace-all-btn');
    findReplaceFeedback = document.getElementById('find-replace-feedback');

    // Initial Page Setup
    loadApiKeys();
    updateLanguage(localStorage.getItem('language') === 'fa' ? 'fa' : 'en');
    goToStep(1);

    // Attach Event Listeners
    languageToggle.addEventListener('click', () => updateLanguage(uiLang === 'en' ? 'fa' : 'en'));
    clearMemoryButton.addEventListener('click', clearTranslationMemory);
    togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    
    // API Key Management Listeners
    addKeyBtn.addEventListener('click', handleAddKey);
    deleteKeyBtn.addEventListener('click', handleDeleteKey);
    apiKeySelect.addEventListener('change', handleSelectKey);
    
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
    
    toggleLogBtn.addEventListener('click', () => {
        const isHidden = logViewerContainer.style.display === 'none';
        logViewerContainer.style.display = isHidden ? 'block' : 'none';
    });
    clearLogBtn.addEventListener('click', clearLog);
    copyLogBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(logOutput.innerText)
            .then(() => {
                const originalText = i18n[uiLang].logCopy;
                copyLogBtn.querySelector('span').textContent = i18n[uiLang].logCopied;
                setTimeout(() => { copyLogBtn.querySelector('span').textContent = originalText; }, 2000);
            });
    });

    chunkStrategyRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            manualChunkContainer.style.display = e.target.value === 'manual' ? 'block' : 'none';
        });
    });
    
    modalSwitchBtn.addEventListener('click', () => {
        if (resolveModalPromise) {
            const selectedValue = modalComboSelect.value;
            if (selectedValue) {
                const [newApiKey, newModel] = selectedValue.split('|');
                resolveModalPromise({ choice: 'switch', newModel, newApiKey });
            } else {
                 resolveModalPromise({ choice: 'cancel' });
            }
        }
        resolveModalPromise = null;
        hideModal();
    });

    modalCancelBtn.addEventListener('click', () => {
        if (resolveModalPromise) {
            resolveModalPromise({ choice: 'cancel' });
        }
        resolveModalPromise = null;
        hideModal();
    });
    modelSwitchModal.addEventListener('click', (e) => {
        if (e.target === modelSwitchModal) {
             hideModal();
        }
    });

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

    // Event listeners for features
    editorTbody.addEventListener('click', (event) => {
        const retranslateButton = event.target.closest('.retranslate-btn');
        if (retranslateButton) {
            handleIndividualRetranslate(retranslateButton);
        }
    });
    
    findReplaceBtn.addEventListener('click', showFindReplaceModal);
    findReplaceCloseBtn.addEventListener('click', hideFindReplaceModal);
    findReplaceModal.addEventListener('click', (e) => {
        if (e.target === findReplaceModal) hideFindReplaceModal();
    });
    findNextBtn.addEventListener('click', handleFindNext);
    replaceBtn.addEventListener('click', handleReplace);
    replaceAllBtn.addEventListener('click', handleReplaceAll);
    findInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleFindNext(); });
    replaceInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleReplace(); });
    
    useProxyCheckbox.addEventListener('change', (e) => {
        customProxyContainer.style.display = e.target.checked ? 'block' : 'none';
    });
});
