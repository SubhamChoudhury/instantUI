const body = document.querySelector('body'),
sidebar = document.querySelector('aside'),
toggle = document.querySelector(".toggle"),
activeIcon = document.querySelector(".icon")
toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
})