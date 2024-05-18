class VObject {
    pixels = [];

    constructor(objectColor, bboxColor, distanceThreshold) {
        this.objectColor       = objectColor;
        this.bboxColor         = bboxColor;
        this.distanceThreshold = distanceThreshold;
        this.minmax            = { 
            minX : Number.MAX_SAFE_INTEGER, 
            minY : Number.MAX_SAFE_INTEGER, 
            maxX : 0, 
            maxY : 0 
        };
    }
    addPixel(pixel) {
        if (pixel.color.distance(this.objectColor) < this.distanceThreshold) {
            this.minmax.minX = (pixel.x < this.minmax.minX) ? pixel.x : this.minmax.minX;
            this.minmax.minY = (pixel.y < this.minmax.minY) ? pixel.y : this.minmax.minY;
            this.minmax.maxX = (pixel.x > this.minmax.maxX) ? pixel.x : this.minmax.maxX;
            this.minmax.maxY = (pixel.y > this.minmax.maxY) ? pixel.y : this.minmax.maxY;
            this.pixels.push(pixel);
        }
    }
    getCenter() {
        let width = this.minmax.maxX - this.minmax.minX;
        let height = this.minmax.maxY - this.minmax.minY;
        return {
            x : this.minmax.minX + width / 2,
            y : this.minmax.minY + height / 2
        };
    }
    getLeftCenter() {
        let width = this.minmax.maxX - this.minmax.minX;
        let limX  = this.minmax.minX + (width * 0.1);
        let sum   = 0;
        let count = 0;
        for (let pixel of this.pixels) {
           if (pixel.x < limX) {
               sum += pixel.y;
               count++;
           }
        }
        return {
            x : this.minmax.minX,
            y : sum / count
        };
    }
    getRightCenter() {
        let width = this.minmax.maxX - this.minmax.minX;
        let limX  = this.minmax.maxX - (width * 0.1);
        let sum   = 0;
        let count = 0;
        for (let pixel of this.pixels) {
           if (pixel.x > limX) {
               sum += pixel.y;
               count++;
           }
        }
        return {
            x : this.minmax.maxX,
            y : sum / count
        };
    }
    getRadiansInclination() {
        let leftCenter = this.getLeftCenter();
        let rightCenter = this.getRightCenter();
        let dx = rightCenter.x - leftCenter.x;
        let dy = rightCenter.y - leftCenter.y;
        return Math.atan(dy / dx);
    }
    getDegreesInclination() {
        return Math.round(this.getRadiansInclination() * 180 / Math.PI);
    }
    drawBBox(ctx) {
        if (this.minmax.minX == Number.MAX_SAFE_INTEGER) {
            return;
        }
        let rect = new Rectangle(this.minmax.minX, this.minmax.minY, 
                                 this.minmax.maxX - this.minmax.minX, 
                                 this.minmax.maxY - this.minmax.minY);
        rect.draw(ctx, this.bboxColor);
    }
    drawCenter(ctx) {
        let center = this.getCenter();
        let circle = new Circle(center.x, center.y, 10);
        circle.draw(ctx, new Color(0, 0, 255));
    }
    drawLeftCenter(ctx) {
        let leftCenter = this.getLeftCenter();
        let circle = new Circle(leftCenter.x, leftCenter.y, 10);
        circle.draw(ctx, new Color(0, 0, 255));
    }
    drawRightCenter(ctx) {
        let rightCenter = this.getRightCenter();
        let circle = new Circle(rightCenter.x, rightCenter.y, 10);
        circle.draw(ctx, new Color(0, 0, 255));
    }
    drawLineFromCenterToRight(ctx) {
        let leftCenter = this.getLeftCenter();
        let rightCenter = this.getRightCenter();
        ctx.beginPath();
        ctx.moveTo(leftCenter.x, leftCenter.y);
        ctx.lineTo(rightCenter.x, rightCenter.y);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}