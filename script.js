const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Function to move the "Nahi" button randomly
function moveNoButton() {
    const container = document.querySelector(".container").getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = container.width - buttonRect.width;
    const maxY = container.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Event listener for "Yes" button
yesButton.addEventListener("click", () => {
    window.location.href = "thanks.html"; // Replace this with your desired link
});

// Event listeners for "No" button
noButton.addEventListener("mouseover", moveNoButton); // For desktop
noButton.addEventListener("touchstart", moveNoButton); // For touch devices
