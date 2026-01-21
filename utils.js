/*
 * Virtual Joystick - Hand Gesture Control
 * Copyright (c) 2026 Federico Albujer Zornoza
 * Licensed under the MIT License
 * See LICENSE file for more information
 */

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    distance(color) {
        return Math.sqrt(
            Math.pow(this.r - color.r, 2) + 
            Math.pow(this.g - color.g, 2) + 
            Math.pow(this.b - color.b, 2)
        );
    }
    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

class Pixel {
    constructor(data, index, rowWidth) {
        this.x = (index / 4) % rowWidth;
        this.y = Math.floor((index / 4) / rowWidth);
        this.fromData(data, index);
    }
    fromData(data, index) {
        this.color = new Color(data[index], data[index + 1], data[index + 2]);
    }
    draw(ctx) {
        ctx.fillStyle = this.color.toString();
        ctx.fillRect(this.x, this.y, 1, 1);
    }
}

class Rectangle {
    constructor(x, y, width, height) {
        this.x      = x;
        this.y      = y;
        this.width  = width;
        this.height = height;
    }
    draw(ctx, color) {
        ctx.strokeStyle = color.toString();
        ctx.lineWidth   = 4;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }   
}

class Circle {
    constructor(x, y, radius) {
        this.x      = x;
        this.y      = y;
        this.radius = radius;
    }
    draw(ctx, color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color.toString();
        ctx.fill();
    }
}

