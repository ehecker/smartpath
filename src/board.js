import Tile from "./tile";

export default class Board { 

    constructor() {
        this.grid = [];
    }

    fillGrid() {       
        for (let i = 0; i < 25; i++) { // Board is 25 x 48, 1200 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
                let newTile = new Tile([i, j], this);
                row.push(newTile);
            }

            this.grid.push(row);
        }
    };

    validPos(pos) {
        
    }

    setRoot(pos) {
    
    }

    setTarget(pos) {

    }

    reset() {
        
    }

}