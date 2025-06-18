
window.addEventListener("DOMContentLoaded", () => {
  const stages = ["stage1", "stage2", "stage3"];
  let current = 0;

  function showStage(index) {
    stages.forEach((id, i) => {
      const el = document.getElementById(id);
      const video = el.querySelector("video");
      const lines = el.querySelectorAll('.tagline, .welcome');
      const box = el.querySelector('.overlay');

      if (i === index) {
        el.style.opacity = '1';
        if (video) {
          video.currentTime = 0;
          video.play();
        }

        // Fade in the overlay box
        box.style.opacity = "0";
        box.style.transition = "opacity 0.8s ease";
        setTimeout(() => { box.style.opacity = "1"; }, 250);

        // Animate taglines and welcome line with revised timings
        lines.forEach((line, idx) => {
          line.style.opacity = "0";
          line.style.animation = "none";
          line.offsetHeight;

          line.style.animation = `fadeIn 1.4s ease forwards`;

          let delay = 0;
          if (line.classList.contains("tagline")) {
            delay = idx === 0 ? 0.75 : 2.25;
          } else if (line.classList.contains("welcome")) {
            delay = 3.9;
          }

          line.style.animationDelay = `${delay}s`;
        });
      } else {
        el.style.opacity = '0';
      }
    });
  }

  function loopStages() {
    showStage(current);
    current = (current + 1) % stages.length;
    setTimeout(loopStages, 6750);
  }

  loopStages();
});
