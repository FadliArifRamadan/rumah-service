// Toggle class active untk menu
const navList = document.querySelector(".nav-list");

// ketika menu diklik
document.querySelector("#bars").onclick = () => {
  navList.classList.toggle("active");
};

// klik diluar elemen
const bars = document.querySelector("#bars");

document.addEventListener("click", function (e) {
  if (!bars.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});
