function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    for (let y = 0; y < lengthY; y++) {
        matrix.push([]);
        for (let x = 0; x < lengthX; x++) {
            let randomCount = getRandomInt(number);
            matrix[y].push(randomCount);
        }
    }
    return matrix;

}

let matrix = genetareMatrix(10,10, 6);

let side =200;
let grassArr = [];
let grassEaterArr = [];
let gishatichArr = [];
let gaylarr = []
let hovazarr =[];

function setup() {
    frameRate(4);
    
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));

            }
            else if (matrix[y][x] == 2) {

                grassEaterArr.push(new GrassEater(x, y));

            }
            else if (matrix[y][x] == 3) {

                gishatichArr.push(new Gishatich(x, y));

            }
            else if (matrix[y][x] == 4) {

                gaylarr.push(new Gayl(x, y));

            }
            else if (matrix[y][x] == 5) {

              hovazarr.push(new Hovaz(x, y));

            }
        }
    }
    console.log(grassArr);
}

function draw() {
    console.log(gishatichArr.length)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }

    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (let i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (let i in gaylarr) {
        gaylarr[i].eat();
    }
    for (let i in hovazarr) {
        hovazarr[i].eat();
    }
}