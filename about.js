function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display clock immediately

  document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const text = textContainer.innerText;
    let index = 0;

    function updateText() {
      textContainer.innerText = text.slice(0, index);
      index++;

      if (index > text.length) {
        index = 0; // Reset the index when it reaches the end
      }

      setTimeout(updateText, 100); // Adjust the delay (in milliseconds) as needed
    }

    updateText();
  });