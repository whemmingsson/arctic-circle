class Domino {
    constructor(x, y, orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.w = this.orientation === ORIENTATION.Vertical ? cellSize : cellSize * 2;
        this.h = this.orientation === ORIENTATION.Vertical ? cellSize * 2 : cellSize;
        this.type = this.determineType(x, y, orientation); // Type is the color
    }

    determineType(x, y, o) {
        if (o === ORIENTATION.Vertical) {
            return isBlack(x, y) ? COLORS.Yellow : COLORS.Red;
        }
        else {
            return isBlack(x, y) ? COLORS.Blue : COLORS.Green;
        }
    }

    render() {
        fill(this.type.r, this.type.g, this.type.b, 200);

        rect(this.x * cellSize,
            this.y * cellSize,
            this.w,
            this.h,
            this.radius);
    }
}