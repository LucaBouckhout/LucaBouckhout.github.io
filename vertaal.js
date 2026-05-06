let currentLang = 'nl';
let translations = {};

fetch('translation.json')
    .then(r => r.json())
    .then(data => { translations = data; });

function toggleLang() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('langBtn').textContent = t['langBtn'];
    document.documentElement.lang = currentLang;
}