import Tile from "./tile";
import PolyTreeNode from "./algorithms/polytreenode";

export default class Board { 

    constructor(rootPos, targetPos) {
        this.grid = [];
        this.rootPos = rootPos;
        this.targetPos = targetPos; 
        // this.fillGrid = this.fillGrid.bind(this);
    }

    fillGrid() {   
        // Create tiles, populate this.grid
        for (let i = 0; i < 25; i++) { // Board is 25 x 48, 1200 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
                let newTile = new Tile([i, j], this);
                row.push(newTile);
            }

            this.grid.push(row);
        }

        // Set root node // Change these to ifs within for loop? Then use continue for each
        this.grid[12][9].node = new PolyTreeNode("root", [12, 9], this.grid);
        let rootNode = this.grid[12][9];
        rootNode.tile.classList.add("root-node")
        console.log("Root node set");

        // Set target node
        this.grid[17][29].node = new PolyTreeNode("target", [17, 29], this.grid);
        let targetNode = this.grid[17][29];
        targetNode.tile.classList.add("target-node")
        console.log("Target node set");
    }

    validPos(pos) {
        
    }

    setRoot(pos) {
    
    }

    setTarget(pos) {

    }

    // reset() {
    //     debugger
    //     this.grid = [];
    //     this.fillGrid();
    // }

}