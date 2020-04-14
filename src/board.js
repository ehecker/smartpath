import Tile from "./tile";

export default class Board { 
    constructor() {
        this.grid = [];
        this.rootNode;
        this.targetNode;

        this.lastNodeType;
        this.animationSpeed = 5;
        this.algorithmIsRunning = false;

        this.validPos = this.validPos.bind(this);
        this.setRoot = this.setRoot.bind(this);
        this.setTarget = this.setTarget.bind(this);
        this.generateScatterMaze = this.generateScatterMaze.bind(this);
        this.reset = this.reset.bind(this);
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

                } else if (i === 12 && j === 38) {
                    let targetNode = new Tile("target", [i, j], this, true)
                    targetNode.tile.classList.add("target-node")
                    targetNode.tile.setAttribute("draggable", "true")
                    this.targetNode = targetNode.node;
                    row.push(targetNode)

                } else {
                    let newTile = new Tile(null, [i, j], this, true);
                    newTile.tile.setAttribute("draggable", "true")
                    row.push(newTile);
                }
            }

            this.grid.push(row);
        }
    }

    setRoot(pos) { // Change variables in this & setTarget to newRootTile/newNullTile
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

        oldNullTile.tile.setAttribute("draggable", "true")

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

        oldNullTile.tile.setAttribute("draggable", "true")

        oldTargetTile.setDraggingFunctions();
        oldNullTile.setDraggingFunctions();

        this.targetNode = oldNullTile.node;
    }

    generateScatterMaze() {
        if (this.algorithmIsRunning === true) return;

        this.clearWalls();
        this.clearPath();
        let wallCount = 0;

        while (wallCount < 300) {
            let x = Math.floor(Math.random() * 25);
            let y = Math.floor(Math.random() * 48);
            
            let currentNode = this.grid[x][y].node;
            if (currentNode.value === null) {
                currentNode.value = "wall"
                currentNode.tileObj.classList.add("wall")
                wallCount++
            }
        }
    }

    reset() {
        if (this.algorithmIsRunning === true) return;

        let grid = document.getElementById("grid");
        grid.innerHTML = "";
        
        this.algorithmIsRunning = false;
        this.grid = [];
        this.fillGrid();
    }

    resetTree() {
        for (let row of this.grid) {
            for (let tile of row) {
                tile.node.parent = null;
                tile.node.children = [];
            }
        }
    }

    clearPath() {
        if (this.algorithmIsRunning === true) return;

        const visitedTiles = Array.from(document.getElementsByClassName("visited"))
        const shortestPathTiles = Array.from(document.getElementsByClassName("shortest-path-node"))

        for (let tile of visitedTiles) {
            tile.classList.remove("visited");
        }

        for (let shortTile of shortestPathTiles) {
            shortTile.classList.remove("shortest-path-node")
        }

        const targetTile = document.getElementsByClassName("target-node");
        targetTile[0].classList.remove("target-found")
    }

    clearWalls() {
        if (this.algorithmIsRunning === true) return;

        let wallTiles = Array.from(document.getElementsByClassName("wall"));
        
        for (let wallEl of wallTiles) {
            let wallPos = wallEl.id.split("-")
            let wallTile = this.grid[+wallPos[0]][+wallPos[1]];

            wallTile.node.value = null;
            wallEl.classList.remove("wall");
        }
    }

    validPos(pos) {
        return (pos[0] >= 0 && pos[0] < 25) && (pos[1] >= 0 && pos[1] < 48);
    }
}