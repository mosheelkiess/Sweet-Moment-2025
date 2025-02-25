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
    overlay.style.flexDirection = 'column'; // מסדר את התמונה והכפתור אנכית
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // יצירת התמונה בתוך ה-overlay
    const image = document.createElement('img');
    image.src = img.src;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '80%';
    image.style.marginBottom = '20px'; // רווח בין התמונה לכפתור
    overlay.appendChild(image);

    // יצירת כפתור סגירה
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.left = '50%';
    closeButton.style.transform = 'translateX(-50%)';
    closeButton.style.fontSize = '40px';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };
    overlay.appendChild(closeButton);

    // יצירת כפתור שיתוף ממורכז
    const shareButton = document.createElement('div');
    shareButton.innerHTML = '📤 שיתוף';
    shareButton.style.backgroundColor = '#4CAF50';
    shareButton.style.color = 'white';
    shareButton.style.padding = '15px 30px';
    shareButton.style.borderRadius = '10px';
    shareButton.style.fontSize = '18px';
    shareButton.style.cursor = 'pointer';
    shareButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    shareButton.style.transition = 'transform 0.3s';
    shareButton.onmouseover = function() {
        shareButton.style.transform = 'scale(1.1)';
    };
    shareButton.onmouseout = function() {
        shareButton.style.transform = 'scale(1)';
    };
    shareButton.onclick = function() {
        if (navigator.share) {
            navigator.share({
                title: 'תמונה לשיתוף',
                url: img.src
            }).catch(console.error);
        } else {
            alert('השיתוף לא נתמך בדפדפן שלך.');
        }
    };
    overlay.appendChild(shareButton);

    // הוספת ה-overlay לגוף הדף
    document.body.appendChild(overlay);
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'he',
            includedLanguages: 'en', // ניתן להוסיף עוד שפות עם פסיקים: 'en,fr,es'
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        },
        'google_translate_element'
    );
}
