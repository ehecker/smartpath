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
        this.clearWalls = this.clearWalls.bind(this);
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

    setRoot(pos) {
        const oldX = this.rootNode.position[0];
        const oldY = this.rootNode.position[1];
        const x = pos[0];
        const y = pos[1];
        let newNullTile = this.grid[oldX][oldY];
        let newRootTile = this.grid[x][y];

        newNullTile.node.value = null;
        newRootTile.node.value = "root";

        newNullTile.tile.classList.remove("root-node");
        newRootTile.tile.classList.remove("wall")
        newRootTile.tile.classList.add("root-node");

        newRootTile.tile.setAttribute("draggable", "true")

        newNullTile.setDraggingFunctions();
        newRootTile.setDraggingFunctions();

        this.rootNode = newRootTile.node;
    }

    setTarget(pos) {
        const oldX = this.targetNode.position[0];
        const oldY = this.targetNode.position[1];
        const x = pos[0];
        const y = pos[1];
        let newNullTile = this.grid[oldX][oldY];
        let newTargetTile = this.grid[x][y];

        newNullTile.node.value = null;
        newTargetTile.node.value = "target";

        newNullTile.tile.classList.remove("target-node");
        newTargetTile.tile.classList.remove("wall")
        newTargetTile.tile.classList.add("target-node");

        newTargetTile.tile.setAttribute("draggable", "true")

        newTargetTile.setDraggingFunctions();
        newNullTile.setDraggingFunctions();

        this.targetNode = newTargetTile.node;
    }

    generateScatterMaze() {
        if (this.algorithmIsRunning === true) return;

        this.clearWalls();
        this.clearPath();
        let wallCount = 0;

        while (wallCount < 350) {
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