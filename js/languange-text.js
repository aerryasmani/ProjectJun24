document.addEventListener('DOMContentLoaded', () => {
    const languageText = document.getElementById('language-text');
  
    if (!languageText) {
      console.error('Error: Element with ID "language-text" not found in the DOM.');
      return;
    }
  
    const languages = ['English', 'Malay', 'Japanese'];
    const translations = {
      'English': 'Hello!',
      'Malay': 'Hai!',
      'Japanese': 'こんにちは！'
    };
  
    let currentLanguageIndex = 0;
  
    function updateLanguageText() {
      const currentLanguage = languages[currentLanguageIndex];
      languageText.textContent = translations[currentLanguage];
      currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    }
  
    setInterval(updateLanguageText, 10000);
    updateLanguageText(); // Call immediately to show the first language
  });