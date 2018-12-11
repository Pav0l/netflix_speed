const vidSpeed = (speed=onClick()) => {
	document.querySelectorAll('video').forEach(v=>v.playbackRate=speed);
}

