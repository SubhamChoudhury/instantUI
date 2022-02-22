const baseline = document.querySelector(".snackbar-btn");
const baselineContent = document.querySelector(".snackbar-baseline");
const hideToast = () => (baselineContent.style.visibility = "hidden");
baseline.addEventListener("click", () => {
    baselineContent.style.visibility = "visible";
    setTimeout(hideToast, 3000);
});