import Tile from "./tile";

export default class Board { 

    constructor() {
        this.grid = [];
        console.log("Board created")
    }

    fillGrid() { 
        
        for (let i = 0; i < 24; i++) { // Board is 24 x 48, 1152 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
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