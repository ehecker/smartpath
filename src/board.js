import Tile from "./tile";

export default class Board { 

    constructor() {
        this.grid = [];
        console.log("Board created")
    }

    fillGrid() {
        // Board is 28 x 56, 1568 total tiles
        for (let i = 0; i < 28; i++) {
            let row = [];

            for (let j = 0; j < 56; j++) {
                let newTile = new Tile([i, j])
                row.push(newTile);
            }

            this.grid.push(row);
        }

    }

}