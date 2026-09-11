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
    project.innerHTML = `<span class="game-number">${String(index + 1).padStart(2, "0")}</span><div><h2>${title}</h2><p>Description, role, year and platform — edit this project.</p></div>`;
    gamesList.appendChild(project);
  });
}

const experienceFilters = document.querySelectorAll("[data-experience-filter]");
const experienceGroups = document.querySelectorAll("[data-experience-group]");

experienceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.experienceFilter;

    experienceFilters.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    experienceGroups.forEach((group) => {
      const categories = group.dataset.experienceGroup.split(" ");
      const matchesGroup = filter === "all" || categories.includes(filter);
      group.hidden = !matchesGroup;
    });

    renderTimelineTree(filter);
  });
});

const timelineEntries = [
  { title: "DualCore", start: "2007-07", end: "2007-12", category: "operations" },
  { title: "Toy Square", start: "2012-07", end: "2013-10", category: "operations" },
  { title: "Livraria Cultura", start: "2015-02", end: "2015-08", category: "operations" },
  { title: "BOA.Productions", start: "2018-03", end: null, category: "management" },
  { title: "Abragames", start: "2018-03", end: "2018-07", category: "management" },
  { title: "Flux Games", start: "2020-04", end: "2020-08", category: "games" },
  { title: "Izyplay", start: "2020-09", end: "2021-03", category: "games" },
  { title: "Oktagon Games", start: "2021-03", end: "2021-09", category: "games" },
  { title: "Kokku", start: "2022-01", end: "2023-06", category: "games" },
  { title: "Rataiada · Mentor", start: "2022-09", end: "2023-05", category: "games" },
  { title: "Rataiada · Business", start: "2023-06", end: "2023-12", category: "management" },
  { title: "Quinta das Baunilhas", start: "2023-10", end: "2025-05", category: "management" },
  { title: "JGA", start: "2023-12", end: "2025-03", category: "management" },
  { title: "Rataiada · Product", start: "2024-01", end: "2025-03", category: "games" },
  { title: "Martins / Martins Fontes", start: "2025-10", end: "2026-06", category: "operations" }
];

const timelineTree = document.querySelector("#timeline-tree");
const timelineNow = new Date("2026-09-11T00:00:00");

function monthValue(value) {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + month;
}

function renderTimelineTree(filter = "all") {
  if (!timelineTree) return;

  const visibleEntries = timelineEntries.filter((entry) => filter === "all" || entry.category === filter);
  const startMonth = monthValue("2007-01");
  const endMonth = monthValue("2026-09");
  const axisX = 110;
  const axisEndX = 930;
  const axisWidth = axisEndX - axisX;
  const rows = Math.max(visibleEntries.length, 1);
  const rowHeight = 38;
  const top = 54;
  const height = Math.max(190, top + rows * rowHeight + 42);
  timelineTree.setAttribute("viewBox", `0 0 1000 ${height}`);

  const xForMonth = (value) => axisX + ((monthValue(value) - startMonth) / (endMonth - startMonth)) * axisWidth;
  const branchColor = { management: "#35d07f", games: "#71e0ff", operations: "#f2c14e" };
  const years = [2007, 2012, 2017, 2022, 2026];
  let svg = `<line class="tree-axis" x1="${axisX}" y1="${top - 20}" x2="${axisEndX}" y2="${top - 20}" />`;
  years.forEach((year) => {
    const x = xForMonth(`${year}-01`);
    svg += `<line class="tree-tick" x1="${x}" y1="${top - 28}" x2="${x}" y2="${top - 12}" /><text class="tree-year" x="${x}" y="${top - 36}" text-anchor="middle">${year}</text>`;
  });

  visibleEntries.forEach((entry, index) => {
    const y = top + index * rowHeight;
    const startX = xForMonth(entry.start);
    const endX = entry.end ? xForMonth(entry.end) : axisEndX;
    const color = branchColor[entry.category];
    const isOpen = !entry.end;
    const labelAnchor = startX < axisX + 90 ? "start" : "end";
    const labelX = labelAnchor === "start" ? startX + 8 : startX - 8;
    const axisY = top - 20;
    const branchY = y + 18;
    const path = isOpen
      ? `M ${startX} ${axisY} C ${startX} ${axisY + 16}, ${startX - 24} ${branchY}, ${startX} ${branchY} L ${endX} ${branchY}`
      : `M ${startX} ${axisY} C ${startX} ${axisY + 16}, ${startX - 24} ${branchY}, ${startX} ${branchY} L ${endX} ${branchY} C ${endX} ${branchY - 10}, ${endX} ${axisY}, ${endX} ${axisY}`;
    svg += `<path class="tree-branch ${isOpen ? "is-open" : ""}" stroke="${color}" d="${path}" />`;
    svg += `<circle class="tree-start" cx="${startX}" cy="${axisY}" r="4" fill="${color}" /><circle class="${isOpen ? "tree-end-open" : "tree-end"}" cx="${endX}" cy="${isOpen ? branchY : axisY}" r="${isOpen ? 6 : 4}" stroke="${color}" fill="${isOpen ? "none" : color}" />`;
    svg += `<text class="tree-label" x="${labelX}" y="${y - 7}" text-anchor="${labelAnchor}">${entry.title}</text>`;
  });

  timelineTree.innerHTML = svg;
}

renderTimelineTree();
