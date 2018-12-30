(function() {  
	// if (window.hasRun) {
	//   return;
	// }
	// window.hasRun = true;
	let vidSpeed = (speed) => {
		document.querySelectorAll('video').forEach(v=>v.playbackRate=speed);
	}

	browser.runtime.onMessage.addListener((message) => {	
		if (message.speed == 1) {
			vidSpeed(1);
	    } else if (message.speed == 0.5) {
	    	vidSpeed(0.5);
	    } else if (message.speed == 1.5) {
	    	vidSpeed(1.5);
		}
	});
})();