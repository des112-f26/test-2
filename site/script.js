// Find every bouncy button on the page
const buttons = document.querySelectorAll('.bouncy');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the class and re-add it so the animation restarts
    // even if you click again before it finishes.
    button.classList.remove('is-bouncing');
    void button.offsetWidth; // forces the browser to notice the removal
    button.classList.add('is-bouncing');
  });

  // When the animation ends, clean up so the next click works
  button.addEventListener('animationend', () => {
    button.classList.remove('is-bouncing');
  });
});
