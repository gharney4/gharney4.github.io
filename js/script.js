// RON SWANSON QUOTE GENERATOR //

const button = document.getElementById("ask-ron");

if (button) {
	const ronSection = document.getElementById("ron-section");
	const ronQuote = document.getElementById("ron-quote");
	button.addEventListener("click", getRonQuote);


	async function getRonQuote() {
		console.log("clicked");
		const url = `http://ron-swanson-quotes.herokuapp.com/v2/quotes`;
		const response = await fetch(url);
		const quote = await response.json();
		ronSection.classList.remove("swanson-response-container-hide");
		ronSection.classList.add("swanson-response-container-show");
		ronQuote.innerHTML = quote;
	}
}


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