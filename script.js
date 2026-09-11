const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projects.forEach((project) => {
      const isVisible = filter === "todos" || project.dataset.category === filter;
      project.hidden = !isVisible;
    });
  });
});

const gameProjects = [
    "Black Tide", "Shahnameh - Ascensão dos Reis", "Cobra Kai: The Karate Kid Saga Continues",
    "Deepersona", "Fantasy", "Get Out", "Nosferatu - Between Ink & Blood", "Desert Rose",
    "One Men's Trash", "STRAH", "Plantaê", "Pixel Whole", "Assassin's Creed® Jade",
    "Honor of Kings: World", "The Division Resurgence", "Club Blox 🎵",
    "Hearts of Iron IV: Trial of Allegiance", "Rapala Fishing", "FootVolley.Hyper",
    "Scribble Sailor (CTR)", "Tank Draw", "Splash Runner", "Bomb Runner", "Blob Attack",
    "Slingshot Master", "Bottle Rush", "Draw the Way", "Burrow Blast", "Ghost Hunter 3",
    "Office Dash 2 (Mini)", "Hyper Pixelus (Mini)", "Bounce Tower Puzzle", "Type or Die",
    "CannonBall Fruit", "Hot Dog Stadium", "Master of the Universe", "Scream",
    "Beavis and Butthead", "Slime Royalle", "Pinball Adventure", "Faz de conta Projeto 1",
    "Final Sprint (CTR)", "Hoop Master", "Age of Rivals: Conquest", "Photobomber!!",
    "Hyper Raid", "Find the Bomb", "Tennis Demolition", "Tool Master", "Waitress Rush",
    "Quiz Geek!", "Shadow Cross", "Mole Heist", "Caos", "Office Dash!!", "Rolling Demolition",
    "LifeWind", "Rabbit In the Hole", "Draw Leaders", "Bullseye Balloons", "Efeito Ana",
    "Hidden Objects 3D!!", "Necromaniacs", "Coffe Rush", "Color Rush 3D!!", "Hungry Mole!",
    "P.O.W. - The rescue", "Amazing Science!", "The Legendary Rion", "MINICORE", "Slime Jam",
    "A Shark Light", "Rocketball", "Empathy Wanderer", "AM2R 2.0", "Guild Hunters",
    "So Fart Away", "SparkHub", "Amazon Blocks", "Gym Wars", "Mago das Libras"
];

const gamesList = document.querySelector("#games-list");
if (gamesList) {
  gameProjects.forEach((title, index) => {
    const project = document.createElement("article");
    project.className = "game-item";
    project.innerHTML = `<span class="game-number">${String(index + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>Descrição, função, ano e plataforma — editar este projeto.</p></div>`;
    gamesList.appendChild(project);
  });
}
