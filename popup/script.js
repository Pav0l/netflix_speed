
 // Listen for clicks on the buttons, and send the appropriate message to
 // the content script in the page.
 
const listenForClicks = () => {
	document.addEventListener("click", (e) => {
		// console.log('log: ', e.target.textContent);
		// console.log(e);
		switch (e.target.textContent) {
			case '0.75':
				console.log(0.75);
				return 0.75;
				break;
			case '1':
				console.log(1);
				return 1;
				break;
			case '1.25':
				console.log(1.25);
				return 1.25;
				break;
			default:
				console.log("default");
				return 1;
		}
	}
)};

listenForClicks();

export default listenForClicks
