/*
 * Virtual Joystick - Hand Gesture Control
 * Copyright (c) 2026 Federico Albujer Zornoza
 * Licensed under the MIT License
 * See LICENSE file for more information
 */

var OBJECT_COLOR       = new Color(60, 160, 235); 
var MARKER_COLOR       = new Color(255, 0, 0);
var DISTANCE_THRESHOLD = 75;
var SENSIBILITY_ROTATE = 2;
var DEBUG_MARKS        = false;
var DEBUD_DEGREES      = false;

function showMarks(vObject, ctx) {
    vObject.drawBBox(ctx);
    vObject.drawCenter(ctx);
    vObject.drawLeftCenter(ctx);
    vObject.drawRightCenter(ctx);
    vObject.drawLineFromCenterToRight(ctx);
}

function showDegrees(vObject) {
    let degrees = vObject.getDegreesInclination();
    let info = document.getElementById('info');
    info.innerHTML = `Degrees: ${degrees}`;
}

function rotateCar(degrees) {
    let car = document.getElementById('car');
    car.style.transform = `rotate(${degrees * SENSIBILITY_ROTATE}deg)`;
}

function processFrame(camera) {
    let ctx     = camera.context;
    let canvas  = camera.canvas;
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data    = imgData.data;
    let vObject  = new VObject(OBJECT_COLOR, MARKER_COLOR, DISTANCE_THRESHOLD);

    for (let idx = 0; idx < data.length; idx += 4) {
        let pixel = new Pixel(data, idx, canvas.width);
        vObject.addPixel(pixel);
    }

    ctx.putImageData(imgData, 0, 0);

    if (DEBUG_MARKS) {
        showMarks(vObject, ctx);
    }
    if (DEBUD_DEGREES) {
        showDegrees(vObject);
    }

    rotateCar(-vObject.getDegreesInclination());
}

function main() {
    const camera = new Camera(720, 720);
    camera.start();
    setInterval(() => {
        camera.capture(processFrame);
    }, 20);
}