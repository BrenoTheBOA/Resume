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
  { title: "DualCore", start: "2007-07", end: "2007-12", category: "operations", logo: "Dualcore.png", card: "DualCore · IT Technician" },
  { title: "Toy Square", start: "2012-07", end: "2013-10", category: "operations", logo: "ToySquaer.png", card: "Toy Square · Store Manager" },
  { title: "Livraria Cultura", start: "2015-02", end: "2015-08", category: "operations", logo: "Livraria Cultura.png", card: "Livraria Cultura · Book Seller" },
  { title: "BOA.Productions", start: "2018-03", end: null, category: "management", logo: "BOA_Productions.png", card: "BOA.Productions · Project Manager, Consultant & Producer" },
  { title: "Abragames", start: "2018-03", end: "2018-07", category: "management", logo: "Abragames.png", card: "Abragames · Event Manager & Producer" },
  { title: "Flux Games", start: "2020-04", end: "2020-08", category: "games", logo: "Flux.png", card: "Flux Games · Game Producer & Project Manager" },
  { title: "Izyplay", start: "2020-09", end: "2021-03", category: "games", logo: "Izyplay.png", card: "Izyplay Game Studio · Game Producer & Portfolio Manager" },
  { title: "Oktagon Games", start: "2021-03", end: "2021-09", category: "games", logo: "Oktagon.png", card: "Oktagon Games · Game Producer & Project Manager" },
  { title: "Kokku", start: "2022-01", end: "2023-06", category: "games", logo: "Kokku.png", card: "Kokku · Game Designer II / III" },
  { title: "Rataiada Games", start: "2022-09", end: "2025-03", category: "games", categories: ["games", "management"], logo: "Rataiada.png", card: "Rataiada Games · Mentor, Business Developer & Product Owner" },
  { title: "Quinta das Baunilhas", start: "2023-10", end: "2025-05", category: "management", logo: "Quinta das Baunilhas.png", card: "Quinta das Baunilhas · Director, Program Management Office" },
  { title: "JGA", start: "2023-12", end: "2025-03", category: "management", logo: "JGA.png", card: "JGA · Director, Project Management Office" },
  { title: "Martins / Martins Fontes", start: "2025-10", end: "2026-06", category: "operations", logo: "Livraria Martins Fontes.png", card: "Martins / Martins Fontes Editora · Book Seller" }
];

const timelineTree = document.querySelector("#timeline-tree");
const timelineNow = new Date("2026-09-11T00:00:00");

function monthValue(value) {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + month;
}

function renderTimelineTree(filter = "all") {
  if (!timelineTree) return;

  const visibleEntries = timelineEntries.filter((entry) => filter === "all" || entry.category === filter || entry.categories?.includes(filter));
  const startMonth = monthValue("2007-01");
  const endMonth = monthValue("2026-09");
  const axisX = 142;
  const top = 48;
  const bottom = 760;
  const height = 810;
  const laneGap = 132;
  const laneStart = 330;
  const laneEnds = [];
  const laneForEntry = (entry) => {
    const start = monthValue(entry.start);
    const end = entry.end ? monthValue(entry.end) : Number.POSITIVE_INFINITY;
    let lane = laneEnds.findIndex((lastEnd) => start >= lastEnd);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = end;
    return lane;
  };
  const completedEntries = visibleEntries.filter((entry) => entry.end);
  const openEntries = visibleEntries.filter((entry) => !entry.end);
  const entryLanes = new Map(completedEntries.map((entry) => [entry, laneForEntry(entry)]));
  openEntries.forEach((entry) => {
    laneEnds.push(Number.POSITIVE_INFINITY);
    entryLanes.set(entry, laneEnds.length - 1);
  });
  const laneCount = Math.max(1, laneEnds.length);
  const canvasWidth = Math.max(1000, laneStart + laneCount * laneGap + 180);
  timelineTree.setAttribute("viewBox", `0 0 ${canvasWidth} ${height}`);

  const yForMonth = (value) => bottom - ((monthValue(value) - startMonth) / (endMonth - startMonth)) * (bottom - top);
  const branchColor = { management: "#35d07f", games: "#71e0ff", operations: "#f2c14e" };
  const years = [2007, 2012, 2017, 2022, 2026];
  let svg = `<line class="tree-axis" x1="${axisX}" y1="${top}" x2="${axisX}" y2="${bottom}" />`;
  years.forEach((year) => {
    const y = yForMonth(`${year}-01`);
    svg += `<line class="tree-tick" x1="${axisX - 8}" y1="${y}" x2="${axisX + 8}" y2="${y}" /><text class="tree-year" x="${axisX - 18}" y="${y + 5}" text-anchor="end">${year}</text>`;
  });

  visibleEntries.forEach((entry, index) => {
    const startY = yForMonth(entry.start);
    const endY = entry.end ? yForMonth(entry.end) : top;
    const laneX = laneStart + entryLanes.get(entry) * laneGap;
    const color = branchColor[entry.category];
    const isOpen = !entry.end;
    const direction = endY < startY ? -1 : 1;
    const curve = Math.min(42, Math.max(20, Math.abs(endY - startY) * 0.16));
    const logoY = startY + (endY - startY) * 0.5;
    const logoTop = logoY - 27;
    const logoBottom = logoY + 27;
    const path = `M ${axisX} ${startY} C ${axisX + curve} ${startY}, ${laneX - curve} ${logoBottom + direction * 12}, ${laneX} ${logoBottom} L ${laneX} ${logoTop} C ${laneX - curve} ${logoTop - direction * 12}, ${axisX + curve} ${endY}, ${isOpen ? laneX : axisX} ${endY}`;
    const logoPath = `assets/experience/${encodeURIComponent(entry.logo)}`;
    svg += `<g class="tree-company" data-entry-index="${timelineEntries.indexOf(entry)}" tabindex="0" role="button" aria-label="View ${entry.title}">`;
    svg += `<path class="tree-branch ${isOpen ? "is-open" : ""}" stroke="${color}" d="${path}" />`;
    svg += `<circle class="tree-start" cx="${axisX}" cy="${startY}" r="4" fill="${color}" /><circle class="${isOpen ? "tree-end-open" : "tree-end"}" cx="${isOpen ? laneX : axisX}" cy="${endY}" r="${isOpen ? 6 : 4}" stroke="${color}" fill="${isOpen ? "none" : color}" />`;
    svg += `<image class="tree-logo" x="${laneX - 30}" y="${logoY - 21}" width="60" height="42" href="${logoPath}" preserveAspectRatio="xMidYMid meet" />`;
    svg += `</g>`;
  });

  timelineTree.innerHTML = svg;
}

function selectTimelineEntry(index) {
  const entry = timelineEntries[index];
  if (!entry) return;

  document.querySelectorAll(".tree-company").forEach((item) => {
    item.classList.toggle("is-selected", Number(item.dataset.entryIndex) === index);
  });

  const card = [...document.querySelectorAll(".timeline-card")].find((item) => item.querySelector("h2")?.textContent.trim() === entry.card);
  document.querySelectorAll(".timeline-card").forEach((item) => item.classList.remove("is-selected"));
  if (card) {
    card.classList.add("is-selected");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

document.querySelectorAll(".timeline-card").forEach((card) => {
  const title = card.querySelector("h2");
  const entry = timelineEntries.find((item) => item.card === title?.textContent.trim());
  if (!entry || !title) return;

  const logo = document.createElement("img");
  logo.className = "timeline-card-logo";
  logo.src = `assets/experience/${encodeURIComponent(entry.logo)}`;
  logo.alt = `${entry.title} logo`;
  logo.width = 56;
  logo.height = 56;
  title.before(logo);
});

timelineTree?.addEventListener("click", (event) => {
  const company = event.target.closest(".tree-company");
  if (company) selectTimelineEntry(Number(company.dataset.entryIndex));
});

timelineTree?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const company = event.target.closest(".tree-company");
  if (company) {
    event.preventDefault();
    selectTimelineEntry(Number(company.dataset.entryIndex));
  }
});

renderTimelineTree();
