
 // Listen for clicks on the buttons, and send the appropriate message to
 // the content script in the page.
 
const listenForClicks = () => {
	document.getElementsByClassName("number").addEventListener("click", () => {
		console.log(document.getElementsByClassName("number"))})}
listenForClicks();

	// }
// 		(num) => {
//       switch (num) {
//         case 0.75:
//         	console.log(0.75);
//         	// return 0.75;
//         case 1:
//           	console.log(0.75);
//           	// return 1;
//         case 1.25:
//           	console.log(0.75);
//           	// return 1.25;
//       }
//     }
// )}
