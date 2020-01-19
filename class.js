class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }


    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
		 
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}





class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        console.log("move Xotaker")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }
    }



    eat() {
         console.log("eat Xotaker")
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
            }
        }
    }


    mul() {
		 console.log("mul Xotaker")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;


            var norXotaker = new GrassEater(x, y, this.index);
            grassEaterArr.push(norXotaker);


            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }


    die() {
         console.log("die Xotaker")
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
            }
        }
    }

}


class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 20;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }




    move() {
        console.log("move Gishatich")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }
    }



    eat() {
		 console.log("eat gishatich ")
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);


        if (cord) {
            console.log("eat")
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy < 1) {
                this.die();
            }
        }
    }


    mul() {
        console.log("mul gishatich")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;


            var norgishatich = new Gishatich(x, y);
            gishatichArr.push(norgishatich);


            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }


    die() {
        console.log("die gishatich")
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }

}


class Gayl {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 20;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 4, this.y - 4],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 4]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }




    move() {
        console.log("move gayl")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }
         

       
    }



    eat() {

        var fundCords = this.getDirections(3);
        var cord = random(fundCords);


        if (cord) {
            console.log("eat gayl")
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for (var i in gaylarr) {
                if (x == gaylarr[i].x && y == gaylarr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
            }
        }
    }


    mul() {
        console.log("mul gayl")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;


            var norgayl = new Gayl(x, y);
            gaylarr.push(norgayl);


            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }


    die() {
        console.log("die gayl")
        matrix[this.y][this.x] = 0;
        for (var i in gaylarr) {
            if (this.x == gaylarr[i].x && this.y == gaylarr[i].y) {
                gaylarr.splice(i, 1);
            }
        }
    }

}



class Hovaz {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 20;
        this.directions = [];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 4, this.y - 4],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 4]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }




    move() {
        console.log("move Hovaz")
        var Cords= this.getDirections(0);
        
        var cord = random(Cords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }
         

       
    }



    eat() {

        var fundCords = this.getDirections(4);
        var cord = random(fundCords);


        if (cord) {
            console.log("eat gayl")
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;

            for (var i in hovazarr) {
                if (x == hovazarr[i].x && y == hovazarr[i].y) {
                    gaylarr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy < 5) {
                this.die();
            }
        }
    }


    mul() {
        console.log("mul Hovaz")
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;


            var norHovaz = new Hovaz(x, y);
            hovazarr.push(norHovaz);


            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }


    die() {
        console.log("die gayl")
        matrix[this.y][this.x] = 0;
        for (var i in hovazarr) {
            if (this.x == hovazarr[i].x && this.y == hovazarr[i].y) {
                hovazarr.splice(i, 1);
            }
        }
    }

}



//let x = Math.floor(Math.random()*matrix[0].length)