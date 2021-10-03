// Navbar
const menuWrapper = document.getElementById("menuWrapper");
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggleBtn");
// add eventListener
toggleBtn.addEventListener("click", handleToggleBtn);
let isShow = false;
function handleToggleBtn() {
    isShow = !isShow;
    let menuHeight = window.getComputedStyle(menu).height;
    if (isShow) {
        menuWrapper.style.height = menuHeight;
    } else {
        menuWrapper.style.height = "0px";
    }
}
