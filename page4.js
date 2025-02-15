// Spotlight effect for page 4
const flashlightLarge = document.getElementById('flashlight-large');
const flashlightSmall = document.getElementById('flashlight-small');
const overlay = document.getElementById('overlay');

// Get the clickable area
const clickableArea = document.getElementById('clickable-area');

let lastTime = 0;
const delay = 15; // Delay to control the speed of spotlight update

// Function to handle the spotlight following the cursor
function handleMouseMove(e) {
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < delay) {
        return;
    }
    lastTime = currentTime;

    const x = e.pageX;
    const y = e.pageY;

    // Move the small and large flashlight
    flashlightLarge.style.left = `${x}px`;
    flashlightLarge.style.top = `${y}px`;

    flashlightSmall.style.left = `${x}px`;
    flashlightSmall.style.top = `${y}px`;

    // Create a spotlight effect on the overlay
    overlay.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 25%, black 25%)`;
    overlay.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, transparent 25%, black 25%)`;
}

// Add mousemove event listener
document.addEventListener('mousemove', function (e) {
    requestAnimationFrame(() => handleMouseMove(e)); // Smooth mouse movement
});

// Add click event listener to the clickable area
clickableArea.addEventListener('click', function () {
    // Navigate to Page 5 or the next page
    window.location.href = 'page5.html'; // Adjust the target page as needed
});
