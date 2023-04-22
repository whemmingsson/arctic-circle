const cellSize = 40;

let width, height, rows, cols;

const domino = new Domino(1, 2, ORIENTATION.Vertical);
const domino2 = new Domino(3, 2, ORIENTATION.Horizontal);
const domino3 = new Domino(1, 5, ORIENTATION.Horizontal);
const domino4 = new Domino(4, 4, ORIENTATION.Vertical);

const dominos = [domino, domino2, domino3, domino4];

const randomDominoes = [];

function setup() {
    width = 800;
    height = 800;

    rows = height / cellSize;
    cols = width / cellSize;

    createCanvas(width + 1, height + 1);

    noStroke();

    createRandomDominoes();
}

function createRandomDominoes() {
    for (let i = 0; i < 100; i++) {
        const x = floor(random(0, cols));
        const y = floor(random(0, rows));
        const o = random() > 0.5 ? ORIENTATION.Vertical : ORIENTATION.Horizontal;
        randomDominoes.push(new Domino(x, y, o));
    }
}

function drawGrid() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (isBlack(x, y)) {
                fillC(COLORS.Black);
            }
            else {
                fillC(COLORS.White);
            }
            rect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function draw() {
    drawGrid();
    randomDominoes.forEach(d => d.render());
}