// import Tile from "./tile";
const Tile = require("./tile");

class Board {

    constructor() {

        this.grid = [];
        console.log("Board created")
    }

    fillGrid() {

        let subArray = [];
        subArray.fill(null, 0, 27)
        this.grid.fill(subArray, 0, 59)

        // Board is 28 x 60, 1680 total tiles

        let tileX = 0;
        let tileY = 0;

        for (let i = 0; i < 1680; i++) {
            if (tileX + 1 === 29) tileX = -1;
            if (tileY + 1 === 61) tileY = -1;
            tileX++;
            tileY++;

            let newTile = new Tile([tileX, tileY])
            this.grid[tileX][tileY].push(newTile)
        }
    }

}

// export default Board;
module.exports = Board;