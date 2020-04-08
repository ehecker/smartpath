import Tile from "./tile";
import PolyTreeNode from "./algorithms/polytreenode";

export default class Board { 
    constructor() {
        this.grid = [];
        this.rootNode;
        this.targetNode;
        // this.fillGrid = this.fillGrid.bind(this);

        this.validPos = this.validPos.bind(this)
        this.setRoot = this.setRoot.bind(this)
        this.setTarget = this.setTarget.bind(this);
    }

    fillGrid() {   
        // Create tiles, populate this.grid
        for (let i = 0; i < 25; i++) { // Board is 25 x 48, 1200 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
                if (i === 12 && j === 9) {
                    let rootNode = new Tile("root", [i, j], this, true)
                    rootNode.tile.classList.add("root-node")
                    rootNode.tile.setAttribute("draggable", "true")
                    this.rootNode = rootNode;
                    row.push(rootNode)
                } else if (i === 17 && j === 29) {
                    let targetNode = new Tile("target", [i, j], this, true)
                    targetNode.tile.classList.add("target-node")
                    targetNode.tile.setAttribute("draggable", "true")
                    this.targetNode = targetNode;
                    row.push(targetNode)
                } else {
                    let newTile = new Tile(null, [i, j], this, true);
                    row.push(newTile);
                }
            }

            this.grid.push(row);
        }
        // debugger
    }

    setRoot(pos) {
        const oldX = this.rootNode.position[0];
        const oldY = this.rootNode.position[1];
        const x = pos[0];
        const y = pos[1];

        let oldRootTile = this.grid[oldX][oldY];
        let oldNullTile = this.grid[x][y];

        oldRootTile.node.value = null;
        oldNullTile.node.value = "root";

        oldRootTile.tile.classlist = "";
        oldRootTile.tile.classList.remove("root-node")
        oldRootTile.tile.classList.add("tile");

        oldNullTile.tile.classList = ""
        oldNullTile.tile.classList.add("tile")
        oldNullTile.tile.classList.add("root-node")

        this.rootNode = oldNullTile.node;
    }

    setTarget(pos) {
        // Remove old target
        const oldX = this.targetNode.position[0];
        const oldY = this.targetNode.position[1];
        let newTile = new Tile(null, this.targetNode.position, this)
        this.grid[oldX][oldY] = newTile;

        // Set new target
        const x = pos[0];
        const y = pos[1];
        let newTarget = new Tile ("target", [pos[0], pos[1]], this);
        newTarget.tile.classList.add("target-node")
        newTarget.tile.setAttribute("draggable", "true")
        this.grid[x][y] = newTarget;
        this.targetNode = newTarget;
    }

    

    validPos(pos) {
        return (pos[0] >= 0 && pos[0] < 25) && (pos[1] >= 0 && pos[1] < 48);
    }
}