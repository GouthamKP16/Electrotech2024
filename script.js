document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("typing-text");
  var text = textElement.innerHTML;
  textElement.innerHTML = "";

  var i = 0;
  var speed = 100; // Adjust typing speed (milliseconds)

  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      i = 0;
      setTimeout(typeWriter, 2000);
      textElement.innerHTML = "";
    }
  }

  typeWriter(); // Start typing effect
});

// Set the date we're counting down to
var countDownDate = new Date("May 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = pad(hours);
  document.getElementById("minutes").innerHTML = pad(minutes);
  document.getElementById("seconds").innerHTML = pad(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-section").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to pad numbers with leading zeros
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

document.querySelectorAll(".jumble-text").forEach((element) => {
  const originalText = element.textContent;
  element.innerHTML = originalText
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  element.addEventListener("mouseover", () => {
    element.querySelectorAll("span").forEach((span) => {
      const randomX = Math.floor(Math.random() * 20 - 10); // Random position within ±10px
      const randomY = Math.floor(Math.random() * 20 - 10); // Random position within ±10px
      span.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  });

  element.addEventListener("mouseout", () => {
    element.querySelectorAll("span").forEach((span) => {
      span.style.transform = "translate(0, 0)";
    });
  });
});
