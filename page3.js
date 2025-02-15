document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        'tartan.png',
        '1of8.png',
        '2of8.png',
        '3of8.png',
        '4of8.png',
        '5of8.png',
        '6of8.png',
        '7of8.png',
        '8of8.png'
    ];

    let currentIndex = 0;
    const backgroundLayer1 = document.getElementById('background-layer-1');
    const backgroundLayer2 = document.getElementById('background-layer-2');
    let isLayer1Active = true;

    // Preload all background images
    function preloadImages(imageArray) {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages(backgrounds);

    // Set initial background for layer 1
    backgroundLayer1.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    backgroundLayer1.classList.add('active');

    // Handle background change on body click
    document.body.addEventListener('click', (event) => {
        // Prevent background change when the button is clicked
        if (event.target.classList.contains('page3-button')) {
            return;
        }

        currentIndex = (currentIndex + 1) % backgrounds.length; // Loop back to first image after 8

        if (isLayer1Active) {
            backgroundLayer2.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
            backgroundLayer2.classList.add('active');
            backgroundLayer1.classList.remove('active');
        } else {
            backgroundLayer1.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
            backgroundLayer1.classList.add('active');
            backgroundLayer2.classList.remove('active');
        }

        isLayer1Active = !isLayer1Active;
    });
});

function goToPage4() {
    window.location.href = "page4.html"; // Redirect to the new Page 4
}
