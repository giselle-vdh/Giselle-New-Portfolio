/* ============================================================
   EDIT YOUR CONTENT HERE. Each list below creates the cards on
   the pages. To add a new item, copy one {...} block and edit it.
   ============================================================ */

// Skills icons. level: "learning" = studying it, "using" = a tool I use.
// Put your own icon in images/technologies/ and set icon: "images/technologies/name.svg"
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"; // free icon set (optional, falls back to a letter)
const tools = [
  {name:"Python",level:"learning",icon:D+"python/python-original.svg"},
  {name:"JavaScript",level:"learning",icon:D+"javascript/javascript-original.svg"},
  {name:"HTML",level:"learning",icon:D+"html5/html5-original.svg"},
  {name:"CSS",level:"learning",icon:D+"css3/css3-original.svg"},
  {name:"SQL",level:"learning",icon:D+"mysql/mysql-original.svg"},
  {name:"VS Code",level:"using",icon:D+"vscode/vscode-original.svg"},
  {name:"GitHub",level:"using",icon:D+"github/github-original.svg"},
  {name:"Git",level:"using",icon:D+"git/git-original.svg"},
  {name:"MS Access",level:"using",icon:"images/technologies/Access-Logo.jpeg"},
  {name:"Word",level:"using",icon:"images/technologies/Word-Logo.jpeg"},
  {name:"Excel",level:"using",icon:"images/technologies/Spreadsheets-Access-Logo.jpeg"},
  {name:"PowerPoint",level:"using",icon:"images/technologies/Powerpoint-Logo.png"},
  {name:"Ren'Py",level:"using",icon:"images/technologies/RenPy-Logo.png"},
  {name:"ChatGPT",level:"using",icon:"images/technologies/ChatGPT-Logo.png"},
  {name:"Claude",level:"using",icon:"images/technologies/Claude-Logo.jpeg"},
  {name:"Reddit",level:"using",icon:"images/technologies/Reddit-Logo.png"}
];

// Side projects (homepage)
const sideProjects = [
  {title:"I Was Not There",
   image:"images/side-projects/Side-Project-Image.png",
   text:"A narrative-driven, point-and-click visual novel I am developing in my own time.",
   tech:["Ren'Py","Python"]}
];

// Web development projects (projects.html)
const web = [
  {title:"SwiftMart Website",image:"images/projects/SwiftMart-Website.png",text:"An online shop for gadgets, accessories, and home essentials, with product browsing, a shopping cart, and checkout.",tech:["HTML","CSS","JavaScript"],live:"https://swiftmart-flax.vercel.app/index.html",repo:"https://github.com/giselle-vdh/SwiftMart"},
  {title:"Explore SA Events",image:"images/projects/SA-Events-Website.png",text:"A website for discovering events and activities taking place across South Africa.",tech:["HTML","CSS","JavaScript"]},
  {title:"Explore SA Travel Agency",image:"images/projects/SA-Travel-Website.png",text:"A travel agency website showcasing destinations and helping visitors explore travel options across South Africa.",tech:["HTML","CSS","JavaScript"]},
  {title:"Hacker News Web Scraping",image:"images/projects/TechPulse-Website.png",text:"A Python web-scraping project that collects and displays Hacker News stories.",tech:["Python"],live:"https://hacker-news-webscarping-activity-744j87rxq-giselle-vdh.vercel.app/",repo:"https://github.com/giselle-vdh/Hacker-News-Webscarping-Activity"},
  {title:"Personal Recovery Website",image:"images/projects/Personal-Recovery-Website.png",text:"A simple, vibe coded website to allow journaling and logging desired things throughout the day. Time sensitive. Data is saved locally, no log-in needed.",tech:[],live:"https://personal-recovery-website.vercel.app/",repo:"https://github.com/giselle-vdh/Personal-Recovery-Website"},
].map(p => ({...p, live:p.live || "YOUR_PROJECT_URL_HERE", repo:p.repo || "YOUR_GITHUB_URL_HERE"}));

// Programming assignments (projects.html)
const assignments = [
  ["Student Records System","student-records","Link Currently Unavailable"],
  ["Basic Calculator","calculator","Link Available","https://github.com/giselle-vdh/Basic-Calculator"],
  ["COVID Support System","covid-support","Link Available","https://github.com/giselle-vdh/CovidSupportSystem"],
  ["Library Management System","library","Link Currently Unavailable"],
  ["Student Grade Management System","grades","Link Available","https://github.com/giselle-vdh/StudentGradeManagement"]
].map(([title,file,text,repo]) => ({title, image:`images/projects/${file}.png`, text, tech:["Python"], repo}));

/* ============================================================
   CODE BELOW BUILDS THE PAGE. You don't need to edit it.
   ============================================================ */
document.documentElement.classList.add("js");
const $ = id => document.getElementById(id);
const placeholder = text => `<div class="img-placeholder">${text}</div>`;
// If an image file is missing, show a labelled placeholder instead
const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML=\`<div class='img-placeholder'>Add image:<br>${src}</div>\`">`;
const techList = t => `<ul class="techs" aria-label="Technologies used">${t.map(x => `<li>${x}</li>`).join("")}</ul>`;

// Skills
if ($("tools")) $("tools").innerHTML = tools.map(t => `
  <div class="tool tool--${t.level}">
    <div class="tool__icon">${t.icon ? `<img src="${t.icon}" alt="" onerror="this.parentNode.textContent='${t.name[0]}'">` : t.name[0]}</div>${t.name}
  </div>`).join("");

// Side projects
if ($("side-list")) $("side-list").innerHTML = sideProjects.map(p => `
  <article class="feature">
    <div class="feature__img">${img(p.image, p.title + " screenshot")}</div>
    <div class="feature__body"><h3>${p.title}</h3><p>${p.text}</p>${techList(p.tech)}
      ${p.link ? `<div class="links"><a href="${p.link}" target="_blank" rel="noopener">${p.linkText || "Project link"}</a></div>` : ""}</div>
  </article>`).join("");

// Web projects
if ($("web-list")) $("web-list").innerHTML = web.map(p => `
  <article class="web-item">
    <a class="shot" href="${p.live}" target="_blank" rel="noopener" aria-label="Open ${p.title}">${img(p.image, p.title + " screenshot")}</a>
    <div><h3>${p.title}</h3><p>${p.text}</p>${techList(p.tech)}
      <div class="links"><a href="${p.live}" target="_blank" rel="noopener">Live website</a><a href="${p.repo}" target="_blank" rel="noopener">GitHub repository</a></div></div>
  </article>`).join("");

// Assignments
if ($("assign-list")) $("assign-list").innerHTML = assignments.map(p => `
  <article class="assign">
    <div class="term"><div class="term__bar"><i></i><i></i><i></i></div>${img(p.image, p.title + " terminal output")}</div>
    <h3>${p.title}</h3><p>${p.text}</p>${techList(p.tech)}
    ${p.repo ? `<div class="links"><a href="${p.repo}" target="_blank" rel="noopener">GitHub repository</a></div>` : ""}
  </article>`).join("");

// Footer year
document.querySelectorAll("#year").forEach(e => e.textContent = new Date().getFullYear());

// Mobile menu
const toggle = document.querySelector(".nav__toggle"), menu = $("menu");
toggle.addEventListener("click", () => toggle.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

// Fade sections in as they scroll into view
const io = "IntersectionObserver" in window && new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
