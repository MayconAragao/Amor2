// Entrar na tela principal
document.getElementById("enterBtn").addEventListener("click", function () {
  const welcome = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");
  const music = document.getElementById("bgMusic");

  // Fade out e mostrar conteúdo principal
  welcome.classList.add("fade-out");
  setTimeout(() => {
    welcome.style.display = "none";
    mainContent.style.display = "block";
    music.play();
  }, 1000);
});

// Controle da música
document.getElementById("playMusic").addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
    this.textContent = "⏸ Pausar Música";
  } else {
    music.pause();
    this.textContent = "🎵 Tocar Música";
  }
});

// Animação de aparecimento na rolagem
const items = document.querySelectorAll(".timeline-item");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
