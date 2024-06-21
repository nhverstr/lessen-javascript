// Initialize the last known mouse position
let lastMouseX = null;
let lastMouseY = null;
const threshold = 10; // Threshold distance in pixels

// Function to be called when the mouse moves about 10px
let onMouseMove10px = () => {
  console.log("Mouse moved about 10 pixels!");
  // Place your desired logic here
};

// Event listener for mouse movement
document.addEventListener("mousemove", (event) => {
  // Get the current mouse position
  const currentMouseX = event.clientX;
  const currentMouseY = event.clientY;

  // If this is the first move, just record the position
  if (lastMouseX === null || lastMouseY === null) {
    lastMouseX = currentMouseX;
    lastMouseY = currentMouseY;
    return;
  }

  // Calculate the distance moved
  const deltaX = currentMouseX - lastMouseX;
  const deltaY = currentMouseY - lastMouseY;
  const distance = Math.sqrt(deltaX * deltaY + deltaY * deltaY); // Euclidean distance

  // Check if the distance exceeds the threshold
  if (distance >= threshold) {
    // Call the function
    onMouseMove10px();

    // Update the last known mouse position
    lastMouseX = currentMouseX;
    lastMouseY = currentMouseY;
  }
});
