// Function to create the falling kiss element
function createKiss(x, y) {
    const kiss = document.createElement('img');
    kiss.src = 'kiss1.png';  // Use the single kiss image
    kiss.classList.add('kiss');

    // Adjust the initial position to ensure it falls exactly where clicked
    kiss.style.left = `${x - 75}px`;  // Offset by half the width (center the image)
    kiss.style.top = `${y - 75}px`;   // Offset by half the height

    // Random rotation between -30 and 30 degrees
    const randomRotation = Math.random() * 60 - 30;  // Random value between -30 and 30
    kiss.style.transform = `rotate(${randomRotation}deg)`;

    document.body.appendChild(kiss);

    // Animate the falling kiss
    setTimeout(() => {
        kiss.style.transform += ` translateY(${window.innerHeight}px)`;  // Add the translation to the rotation
        kiss.style.opacity = '0';  // Fade out as it falls
    }, 100);  // Slight delay to allow for initial positioning

    // Remove the kiss from DOM after animation ends
    setTimeout(() => {
        kiss.remove();
    }, 4000);  // Adjust to match fall duration
}

// Event listener to detect clicks and generate kisses
document.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    // Get the button (on new Page 1, for example)
    const button = document.querySelector('.page1-button');

    // Only create kisses when clicking outside the button
    if (!button.contains(e.target)) {
        createKiss(x, y);
    }
});


// Make sure this exists in your script.js file:
const button = document.querySelector('.page2-button');
button.addEventListener('click', function () {
    window.location.href = 'page3.html';  // Ensure it's redirecting to page3.html
});

document.addEventListener('DOMContentLoaded', () => {
    // Only apply spotlight effect if we're on Page 4
    if (document.body.classList.contains('page4')) {
        // Create the spotlight element and add it to the body
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        document.body.appendChild(spotlight);

        // Update the spotlight position based on mouse movement
        document.addEventListener('mousemove', (e) => {
            // Center the spotlight at the mouse position
            spotlight.style.left = `${e.pageX - 75}px`;  // Offset to center the spotlight
            spotlight.style.top = `${e.pageY - 75}px`;
        });
    }
});
