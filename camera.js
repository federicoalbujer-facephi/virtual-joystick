class Camera {
    constructor(width, height) {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
    }
    start() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        navigator.getUserMedia({
            audio: false,
            video: { width: this.width, height: this.height}
        }, stream => {
            this.video.srcObject = stream;
            this.video.play();
        }, err => {
            console.error(err);
        });
    }
    stop() {
        this.video.pause();
        this.video.srcObject = null;
    }
    capture(processFrameCallback) {
        this.context.drawImage(this.video, 0, 0, this.width, this.height, 0, 0, this.canvas.width, this.canvas.height);
        processFrameCallback(this);
    }
}
