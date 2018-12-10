
 // Listen for clicks on the buttons, and send the appropriate message to
 // the content script in the page.

let listenForClicks = () => {
	document.addEventListener("click", e => {
		// console.log('log: ', e.target.textContent);
		// console.log(e);
		switch (e.target.textContent) {
			case '0.75':
				document.querySelectorAll('video').forEach(v=>v.playbackRate=0.75);
				console.log(0.75);
				break;
			case '1':
				document.querySelectorAll('video').forEach(v=>v.playbackRate=1);
				console.log(1);
				break;
			case '1.25':
				document.querySelectorAll('video').forEach(v=>v.playbackRate=1.25);
				console.log(1.25);
				break;
			default:
				document.querySelectorAll('video').forEach(v=>v.playbackRate=1);
				console.log("default");
			}
		}
	)
}

listenForClicks();





 ///////////////////////////////////////////////////////////////////////////
// async function listenForClicks() {
// 	let buttonClick = document.addEventListener("click", e => {
// 		// console.log('log: ', e.target.textContent);
// 		// console.log(e);
// 		switch (e.target.textContent) {
// 			case '0.75':
// 				console.log(0.75);
// 				0.75;
// 				break;
// 			case '1':
// 				console.log(1);
// 				1;
// 				break;
// 			case '1.25':
// 				console.log(1.25);
// 				1.25;
// 				break;
// 			default:
// 				console.log("default");
// 				1;
// 			}
// 		}
// 	)
// 	await (() => {
// 	document.querySelectorAll('video').forEach(v=>v.playbackRate=buttonClick);
// 	console.log('result: ', buttonClick);
// })
// }

// listenForClicks();
///////////////////////////////////////////////////////////////////////////

// const listenForClicks = new Promise((resolve, reject) => {
// 	let clickValue = document.addEventListener("click", e => {
// 		// console.log('log: ', e.target.textContent);
// 		// console.log(e);
// 		switch (e.target.textContent) {
// 			case '0.75':
// 				console.log(0.75);
// 				return 0.75;
// 				break;
// 			case '1':
// 				console.log(1);
// 				return 1;
// 				break;
// 			case '1.25':
// 				console.log(1.25);
// 				return 1.25;
// 				break;
// 			default:
// 				console.log("default");
// 				return 1;
// 			}
// 		}
// 	)
// 	resolve(clickValue)
// })