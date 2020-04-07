import Tile from "./tile";
import PolyTreeNode from "./algorithms/polytreenode";

export default class Board { 

    constructor() {
        this.grid = [];
        this.rootNode;
        this.targetNode;
        // this.fillGrid = this.fillGrid.bind(this);

        this.validPos = this.validPos.bind(this)
    }

    fillGrid() {   
        // Create tiles, populate this.grid
        for (let i = 0; i < 25; i++) { // Board is 25 x 48, 1200 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
                if (i === 12 && j === 9) {
                    let rootNode = new Tile("root", [i, j], this)
                    rootNode.tile.classList.add("root-node")
                    this.rootNode = rootNode;
                    row.push(rootNode)
                } else if (i === 17 && j === 29) {
                    let targetNode = new Tile("target", [i, j], this)
                    targetNode.tile.classList.add("target-node")
                    this.targetNode = targetNode;
                    row.push(targetNode)
                } else {
                    let newTile = new Tile(null, [i, j], this);
                    row.push(newTile);
                }
            }

            this.grid.push(row);
        }
    }

    validPos(pos) {
        return (pos[0] >= 0 && pos[0] < 25) && (pos[1] >= 0 && pos[1] < 48);
    }

    setRoot(pos) {
        // Remove old root


        // Set new root
        let x = pos[0];
        let y = pos[1];
        let newRoot = new Tile ("root", [pos[0], pos[1]], this);
        this.grid[x][y] = newRoot;
        this.rootNode = newRoot;
    }

    setTarget(pos) {
        // Remove old target


        // Set new target
        let x = pos[0];
        let y = pos[1];
        let newTarget = new Tile ("target", [pos[0], pos[1]], this);
        this.grid[x][y] = newTarget;
        this.targetNode = newTarget;
    }

}