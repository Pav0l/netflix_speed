import listenForClicks from popup/script.js

let speed = listenForClicks();

console.log(speed);
console.log('app.js')
const vidSpeed = () => {
	document.querySelectorAll('video').forEach(v=>v.playbackRate=speed);
}

