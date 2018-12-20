(function() {
  
  // if (window.hasRun) {
  //   return;
  // }
  // window.hasRun = true;
 
	let vidSpeed = (speed) => {
		document.querySelectorAll('video').forEach(v=>v.playbackRate=speed);
	};

	browser.runtime.onMessage.addListener((message) => {
		if (message.command === "1") {
			vidSpeed(1);
	    } else if (message.command === "0.75") {
	      vidSpeed(0.75);
	    } else if (message.command === "1.25") {
	      vidSpeed(1.25);
		}
	});
})();