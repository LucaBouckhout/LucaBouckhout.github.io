let currentLang = 'nl';
let translations = {};

const xhr = new XMLHttpRequest();
xhr.open('GET', 'translation.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        translations = JSON.parse(xhr.responseText);
    }
};
xhr.send();

function setLang(language) {
    currentLang = language.toLowerCase();
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.documentElement.lang = currentLang;
    document.getElementById("langSelect").value = language.toUpperCase();

}
document.getElementById("langSelect").addEventListener("change",event=>{setLang(event.target.value);});
