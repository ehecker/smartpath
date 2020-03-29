import Tile from "./tile";

export default class Board { 

    constructor() {
        this.grid = [];
        console.log("Board created")
    }

    fillGrid() {
        // Board is 24 x 48, 1152 total tiles
        for (let i = 0; i < 24; i++) {
            let row = [];

            for (let j = 0; j < 48; j++) {

                // debugger

                let newTile = new Tile([i, j], this);
                row.push(newTile);
            }

            this.grid.push(row);
        }

    }

    setRoot() {

    }

    setTarget() {

    }

}