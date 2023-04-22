const COLORS = {
    Black: { r: 50, g: 50, b: 50 },
    White: { r: 255, g: 255, b: 255 },
    Red: { r: 220, g: 50, b: 50 },
    Green: { r: 50, g: 255, b: 70 },
    Blue: { r: 32, g: 162, b: 255 },
    Yellow: { r: 250, g: 200, b: 50 },
}

function fillC(color) {
    fill(color.r, color.g, color.b)
}

const ORIENTATION = {
    Horizontal: 'Horizontal', Vertical: 'Vertical'
}

const isBlack = (x, y) => (y % 2 === 0) ? ((x + 1) % 2 === 0) : (x % 2 === 0);