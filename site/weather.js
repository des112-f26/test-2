// The parts of the page we want to change
const tempText = document.querySelector('.temp');
const conditionText = document.querySelector('.condition');
const hours = document.querySelectorAll('.hour');

hours.forEach((hour) => {
  hour.addEventListener('click', () => {
    // Move the highlight: un-select every hour, then select this one
    hours.forEach((h) => h.classList.remove('selected'));
    hour.classList.add('selected');

    // Fade the header out...
    tempText.classList.add('fading');
    conditionText.classList.add('fading');

    // ...swap the text once it's invisible, then fade back in.
    // 150ms matches the transition time in weather.css.
    setTimeout(() => {
      tempText.textContent = hour.dataset.temp + '°';
      conditionText.textContent = hour.dataset.condition;
      tempText.classList.remove('fading');
      conditionText.classList.remove('fading');
    }, 150);
  });
});
