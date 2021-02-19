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

