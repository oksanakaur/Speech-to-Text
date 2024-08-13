document.addEventListener('DOMContentLoaded',() =>{
    const recognition = new webkitSpeechRecognition() ||
    new SpeechRecognition();
    const LanguageSelect = document.getElementById
    ('Language')
    const resultContainer = document.querySelector
    ('.result p.resultText');
    const startListeningButton = document.querySelector
    ('.btn.record');
    const recordButtonText = document.querySelector('.btn.record p');
    const clearButton = document.querySelector('btn.clear');
    const downloadButton = document.querySelector('btn.download');

    let  recognizing = false;

    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.text = language.name;
        LanguageSelect.addEventListener(option);
    });



    })

