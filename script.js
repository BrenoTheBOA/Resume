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
const experienceCards = document.querySelectorAll(".timeline-card");

experienceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.experienceFilter;

    experienceFilters.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    experienceCards.forEach((card) => {
      const categories = card.dataset.experienceCategory.split(" ");
      const matchesCard = filter === "all" || categories.includes(filter);
      card.hidden = !matchesCard;
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

function organizeExperienceCards() {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  const cards = [...timeline.querySelectorAll(".timeline-card")];
  cards.sort((first, second) => {
    const firstEntry = timelineEntries.find((entry) => entry.card === first.querySelector("h2")?.textContent.trim());
    const secondEntry = timelineEntries.find((entry) => entry.card === second.querySelector("h2")?.textContent.trim());
    const firstEnd = firstEntry?.end ? monthValue(firstEntry.end) : Number.POSITIVE_INFINITY;
    const secondEnd = secondEntry?.end ? monthValue(secondEntry.end) : Number.POSITIVE_INFINITY;
    return secondEnd - firstEnd;
  });

  cards.forEach((card) => timeline.appendChild(card));
  timeline.querySelectorAll(".timeline-date-group").forEach((group) => group.remove());
}

function monthValue(value) {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + month;
}

function renderTimelineTree(filter = "all") {
  if (!timelineTree) return;

  const visibleEntries = timelineEntries.filter((entry) => filter === "all" || entry.category === filter || entry.categories?.includes(filter));
  const visibleMonths = visibleEntries.flatMap((entry) => [monthValue(entry.start), entry.end ? monthValue(entry.end) : monthValue("2026-09")]);
  const startMonth = filter === "all" ? Math.min(...visibleMonths, monthValue("2007-01")) : Math.min(...visibleMonths);
  const endMonth = filter === "all" ? Math.max(...visibleMonths, monthValue("2026-09")) : Math.max(...visibleMonths);
  const axisX = 500;
  const top = 58;
  const bottom = 690;
  const height = 750;
  timelineTree.setAttribute("viewBox", `0 0 1000 ${height}`);
  const eventMonths = [...new Set(visibleEntries.flatMap((entry) => [
    monthValue(entry.start),
    entry.end ? monthValue(entry.end) : endMonth
  ]))].sort((first, second) => first - second);
  const eventPositions = new Map();
  const minEventGap = 28;
  eventMonths.forEach((month, index) => {
    const naturalY = bottom - ((month - startMonth) / Math.max(1, endMonth - startMonth)) * (bottom - top);
    const previousY = index ? eventPositions.get(eventMonths[index - 1]) : bottom;
    eventPositions.set(month, Math.min(naturalY, previousY - minEventGap));
  });
  const firstEventY = eventPositions.get(eventMonths[eventMonths.length - 1]);
  const lastEventY = eventPositions.get(eventMonths[0]);
  const yForMonth = (value) => {
    const month = monthValue(value);
    if (eventPositions.has(month)) return eventPositions.get(month);
    const next = eventMonths.find((eventMonth) => eventMonth > month);
    const previous = [...eventMonths].reverse().find((eventMonth) => eventMonth < month);
    if (!next || !previous) return month > eventMonths[eventMonths.length - 1] ? firstEventY : lastEventY;
    const progress = (month - previous) / (next - previous);
    return eventPositions.get(previous) + (eventPositions.get(next) - eventPositions.get(previous)) * progress;
  };
  const branchColor = { management: "#35d07f", games: "#71e0ff", operations: "#f2c14e" };
  const years = [...new Set(visibleEntries.flatMap((entry) => [entry.start.slice(0, 4), entry.end?.slice(0, 4)]).filter(Boolean))]
    .sort((first, second) => Number(first) - Number(second))
    .filter((year, index, allYears) => index === 0 || Math.abs(yForMonth(`${year}-01`) - yForMonth(`${allYears[index - 1]}-01`)) >= 26);
  let svg = `<line class="tree-axis mindmap-spine" x1="${axisX}" y1="${top}" x2="${axisX}" y2="${bottom}" />`;
  years.forEach((year) => {
    const y = yForMonth(`${year}-01`);
    svg += `<circle class="mindmap-year-dot" cx="${axisX}" cy="${y}" r="5" /><text class="tree-year" x="${axisX}" y="${y - 13}" text-anchor="middle">${year}</text>`;
  });

  const nodeGap = 104;
  const laneGap = 75;
  const sideLanes = { left: [], right: [] };
  const nodePositions = new Map();
  const durationOf = (entry) => (entry.end ? monthValue(entry.end) : endMonth) - monthValue(entry.start);
  const rightPriority = new Set(["BOA.Productions"]);
  const leftPriority = new Set(["Oktagon Games", "Rataiada Games"]);
  const orderedEntries = [...visibleEntries].sort((first, second) => durationOf(second) - durationOf(first));

  orderedEntries.forEach((entry, index) => {
    const startY = yForMonth(entry.start);
    const endY = entry.end ? yForMonth(entry.end) : top;
    const side = rightPriority.has(entry.title) ? "right"
      : leftPriority.has(entry.title) ? "left"
        : index % 2 === 0 ? "left" : "right";
    const midpoint = (startY + endY) / 2;
    const intervalStart = Math.min(startY, endY) - nodeGap / 2;
    const intervalEnd = Math.max(startY, endY) + nodeGap / 2;
    let laneIndex = sideLanes[side].findIndex((lane) => lane && lane.every((interval) => (
      intervalEnd <= interval.start || intervalStart >= interval.end
    )));
    if (entry.title === "BOA.Productions") laneIndex = Math.max(laneIndex, 2);
    if (laneIndex === -1) laneIndex = sideLanes[side].length;
    if (!sideLanes[side][laneIndex]) sideLanes[side][laneIndex] = [];
    const laneIntervals = sideLanes[side][laneIndex];
    let nodeY = midpoint;
    while (laneIntervals.some((interval) => Math.abs(interval.node - nodeY) < nodeGap)) nodeY += nodeGap;
    laneIntervals.push({ start: intervalStart, end: intervalEnd, node: nodeY });
    const laneOffset = 100;
    const boundedLane = Math.min(laneIndex, 3);
    const laneX = side === "left" ? axisX - laneOffset - boundedLane * laneGap : axisX + laneOffset + boundedLane * laneGap;
    nodePositions.set(entry, { side, laneX, nodeY });
  });

  timelineTree.setAttribute("viewBox", `0 0 1000 ${height}`);

  visibleEntries.forEach((entry) => {
    const startY = yForMonth(entry.start);
    const endY = entry.end ? yForMonth(entry.end) : top;
    const { side, laneX, nodeY } = nodePositions.get(entry);
    const color = branchColor[entry.category];
    const isOpen = !entry.end;
    const nodeRadius = 38;
    const entryPath = `M ${axisX} ${startY} H ${laneX} V ${nodeY + nodeRadius} M ${laneX} ${nodeY - nodeRadius} V ${endY} H ${axisX}`;
    const logoPath = `assets/experience/${encodeURIComponent(entry.logo)}`;
    svg += `<g class="tree-company" data-entry-index="${timelineEntries.indexOf(entry)}" tabindex="0" role="button" aria-label="View ${entry.title}">`;
    svg += `<path class="tree-branch tree-branch-start" stroke="${color}" d="${entryPath.split(" M ")[0]}" /><path class="tree-branch tree-branch-end ${isOpen ? "is-open" : ""}" stroke="${color}" d="M ${entryPath.split(" M ")[1]}" />`;
    svg += `<circle class="tree-start" cx="${axisX}" cy="${startY}" r="4" fill="${color}" /><circle class="tree-end ${isOpen ? "tree-end-open" : ""}" cx="${axisX}" cy="${endY}" r="4" stroke="${color}" fill="${isOpen ? "none" : color}" /><circle class="mindmap-node" cx="${laneX}" cy="${nodeY}" r="${nodeRadius}" stroke="${color}" />`;
    svg += `<image class="tree-logo" x="${laneX - 29}" y="${nodeY - 29}" width="58" height="58" href="${logoPath}" preserveAspectRatio="xMidYMid meet" />`;
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

organizeExperienceCards();
renderTimelineTree();
