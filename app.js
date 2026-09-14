const TOTAL_PAGES = 34;

let currentPage = 1;
let zoom = 1;

const pageImage = document.getElementById("pageImage");
const pageInfo = document.getElementById("pageInfo");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const firstBtn = document.getElementById("firstBtn");
const lastBtn = document.getElementById("lastBtn");

const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");

const themeBtn = document.getElementById("themeBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const page = document.getElementById("page");


function updatePage() {

  const number = String(currentPage).padStart(3, "0");

  pageImage.src =
    `assets/pages/page-${number}.webp`;

  pageInfo.textContent =
    `${currentPage} / ${TOTAL_PAGES}`;

  const percent =
    ((currentPage - 1) /
      (TOTAL_PAGES - 1)) * 100;

  progress.style.width =
    `${percent}%`;

  prevBtn.disabled =
    currentPage === 1;

  nextBtn.disabled =
    currentPage === TOTAL_PAGES;

  firstBtn.disabled =
    currentPage === 1;

  lastBtn.disabled =
    currentPage === TOTAL_PAGES;

  page.style.transform =
    `scale(${zoom})`;

  localStorage.setItem(
    "digitalBookPage",
    currentPage
  );
}


function nextPage() {

  if (currentPage < TOTAL_PAGES) {

    currentPage++;

    updatePage();
  }
}


function prevPage() {

  if (currentPage > 1) {

    currentPage--;

    updatePage();
  }
}


nextBtn.addEventListener(
  "click",
  nextPage
);

prevBtn.addEventListener(
  "click",
  prevPage
);


firstBtn.addEventListener(
  "click",
  () => {

    currentPage = 1;

    updatePage();
  }
);


lastBtn.addEventListener(
  "click",
  () => {

    currentPage = TOTAL_PAGES;

    updatePage();
  }
);


zoomInBtn.addEventListener(
  "click",
  () => {

    zoom = Math.min(
      zoom + 0.1,
      1.8
    );

    updatePage();
  }
);


zoomOutBtn.addEventListener(
  "click",
  () => {

    zoom = Math.max(
      zoom - 0.1,
      0.7
    );

    updatePage();
  }
);


/* Theme */

themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark"
    );

    const dark =
      document.body.classList.contains(
        "dark"
      );

    themeBtn.textContent =
      dark ? "🌙" : "☀️";

    localStorage.setItem(
      "digitalBookTheme",
      dark ? "dark" : "light"
    );
  }
);


/* Fullscreen */

fullscreenBtn.addEventListener(
  "click",
  () => {

    if (!document.fullscreenElement) {

      document.documentElement
        .requestFullscreen();

    } else {

      document.exitFullscreen();
    }
  }
);


/* Keyboard */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "ArrowRight") {
      prevPage();
    }

    if (event.key === "ArrowLeft") {
      nextPage();
    }

    if (event.key === "+") {
      zoomInBtn.click();
    }

    if (event.key === "-") {
      zoomOutBtn.click();
    }
  }
);


/* Touch swipe */

let touchStartX = 0;

page.addEventListener(
  "touchstart",
  (event) => {

    touchStartX =
      event.changedTouches[0].screenX;
  }
);


page.addEventListener(
  "touchend",
  (event) => {

    const touchEndX =
      event.changedTouches[0].screenX;

    const distance =
      touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance > 0) {
      prevPage();
    } else {
      nextPage();
    }
  }
);


/* Restore */

const savedPage =
  Number(
    localStorage.getItem(
      "digitalBookPage"
    )
  );

if (
  savedPage >= 1 &&
  savedPage <= TOTAL_PAGES
) {

  currentPage = savedPage;
}


if (
  localStorage.getItem(
    "digitalBookTheme"
  ) === "dark"
) {

  document.body.classList.add("dark");

  themeBtn.textContent = "🌙";
}


updatePage();
