
function openImage(img) {
    // יצירת אלמנט overlay עם התמונה
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // יצירת התמונה בתוך ה-overlay
    const image = document.createElement('img');
    image.src = img.src;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '90%';
    overlay.appendChild(image);

    // יצירת כפתור סגירה
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '40px';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };
    overlay.appendChild(closeButton);

    // יצירת כפתור שיתוף
    const shareButton = document.createElement('div');
    shareButton.innerHTML = 'שיתוף';
    shareButton.style.position = 'absolute';
    shareButton.style.bottom = '20px';
    shareButton.style.left = '20px';
    shareButton.style.backgroundColor = 'white';
    shareButton.style.padding = '10px';
    shareButton.style.borderRadius = '5px';
    shareButton.style.cursor = 'pointer';
    shareButton.onclick = function() {
        navigator.share({
            title: 'תמונה לשיתוף',
            url: img.src
        });
    };
    overlay.appendChild(shareButton);

    // הוספת ה-overlay לגוף הדף
    document.body.appendChild(overlay);
}





function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'he',
            includedLanguages: 'en', // אפשר להוסיף שפות נוספות עם פסיק, למשל: 'en,es,fr'
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        },
        'google_translate_element'
    );
}