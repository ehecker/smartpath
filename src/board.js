import Tile from "./tile";

export default class Board { 
    constructor() {
        this.grid = [];
        this.rootNode;
        this.targetNode;

        this.lastNodeType;

        this.validPos = this.validPos.bind(this);
        this.setRoot = this.setRoot.bind(this);
        this.setTarget = this.setTarget.bind(this);
    }

    fillGrid() { // Create tile objects, populate this.grid
        for (let i = 0; i < 25; i++) { // Board is 25 x 48, 1200 total tiles
            let row = [];

            for (let j = 0; j < 48; j++) {
                if (i === 12 && j === 9) {
                    let rootNode = new Tile("root", [i, j], this, true)
                    rootNode.tile.classList.add("root-node")
                    rootNode.tile.setAttribute("draggable", "true")
                    this.rootNode = rootNode.node;
                    row.push(rootNode)

                } else if (i === 12 && j === 37) {
                    let targetNode = new Tile("target", [i, j], this, true)
                    targetNode.tile.classList.add("target-node")
                    targetNode.tile.setAttribute("draggable", "true")
                    this.targetNode = targetNode.node;
                    row.push(targetNode)

                } else {
                    let newTile = new Tile(null, [i, j], this, true);
                    row.push(newTile);
                }
            }

            this.grid.push(row);
        }
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

        oldRootTile.tile.classList.remove("root-node");
        oldNullTile.tile.classList.add("root-node");

        oldRootTile.setDraggingFunctions();
        oldNullTile.setDraggingFunctions();

        this.rootNode = oldNullTile.node;
    }

    setTarget(pos) {
        const oldX = this.targetNode.position[0];
        const oldY = this.targetNode.position[1];
        const x = pos[0];
        const y = pos[1];

        let oldTargetTile = this.grid[oldX][oldY];
        let oldNullTile = this.grid[x][y];

        oldTargetTile.node.value = null;
        oldNullTile.node.value = "target";

        oldTargetTile.tile.classList.remove("target-node");
        oldNullTile.tile.classList.add("target-node");

        oldTargetTile.setDraggingFunctions();
        oldNullTile.setDraggingFunctions();

        this.targetNode = oldNullTile.node;
    }

    validPos(pos) {
        return (pos[0] >= 0 && pos[0] < 25) && (pos[1] >= 0 && pos[1] < 48);
    }
}