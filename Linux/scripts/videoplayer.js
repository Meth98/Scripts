let myVideo = document.getElementById('videoplayer');

function PlayPause() {
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
}

function MakeSmall() {
	myVideo.width = 250;
}

function MakeNormal() {
	myVideo.width = 300;
}