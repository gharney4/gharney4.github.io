// TOGGLE POPUP MENU (FOR SMALL SCREENS)//

const popupMenu = document.getElementById("popup-menu");

const menuDisplayButton = document.getElementById("menu-open");
menuDisplayButton.addEventListener("click", openMenu);
function openMenu() {
	popupMenu.classList.remove("popup-menu-hide");
	popupMenu.classList.add("popup-menu-show");
}

const menuCloseButton = document.getElementById("menu-close")
menuCloseButton.addEventListener("click", closeMenu)
function closeMenu() {
popupMenu.classList.remove("popup-menu-show");
popupMenu.classList.add("popup-menu-hide");
}