import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    constructor(nodeValue, position, board) {
        this.position = position;
        this.board = board;

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);

        this.node = new PolyTreeNode(nodeValue, position, board); // This MUST come after this.tile's id is set

        this.setDraggingFunctions();
    }

    setDraggingFunctions() {
        let board = this.board;

        const handleDragStart = event => {
            console.log("Drag start fired")

            let tileId = event.target.id.split("-");
            let dragStartPos = [+tileId[0], +tileId[1]];
            board.lastNodeType = board.grid[dragStartPos[0]][dragStartPos[1]].node.value;
        }

        const handleDragEnter = event => {
            console.log("Drag enter fired")
            event.preventDefault()

            let tileId = event.target.id.split("-");
            let currentTile = board.grid[+tileId[0]][+tileId[1]]

            // if (board.lastNodeType === "root") {
            //     board.rootNode.tileObj.classList.add("hidden");
            // } else if (board.lastNodeType === "target") {
            //     board.targetNode.tileObj.classList.add("hidden");
            // }

            if (board.lastNodeType === "wall" || board.lastNodeType === null) {
                if (currentTile.node.value === "wall") {
                    currentTile.removeWall()
                } else if (currentTile.node.value === null) {
                    currentTile.placeWall()
                }
            }
        }

        const handleDragOver = event => { // DO NOT REMOVE. Root/target node repositioning does not work without this.
            console.log("Drag over fired")
            event.preventDefault()
        }

        const handleDrop = event => {
            console.log("Drop fired")
            event.preventDefault();

            let tileId = event.target.id.split("-");
            let dragEndPos = [+tileId[0], +tileId[1]];

            if (board.lastNodeType === "root") {
                // board.rootNode.tileObj.classList.remove("hidden");
                board.setRoot(dragEndPos)
            } else if (board.lastNodeType === "target") {
                // board.targetNode.tileObj.classList.remove("hidden");
                board.setTarget(dragEndPos)
            }
        }

        const handleClick = event => {
            console.log("Click fired")
            event.preventDefault()

            let tileId = event.target.id.split("-");
            let currentTile = board.grid[+tileId[0]][+tileId[1]]

            if (currentTile.node.value === "wall") {
                currentTile.removeWall()
            } else if (currentTile.node.value === null) {
                currentTile.placeWall()
            }
        }

        // All tiles listen for dragstart
        this.tile.addEventListener("dragstart", handleDragStart)

        // Only walls and nulls receive other listeners
        if (this.node.value === "wall" || this.node.value === null) {
            this.tile.addEventListener("dragenter", handleDragEnter)
            this.tile.addEventListener("dragover", handleDragOver)
            this.tile.addEventListener("drop", handleDrop)
            this.tile.addEventListener("click", handleClick)
        }
    }

    placeWall() {
        if (this.board.algorithmIsRunning === true) return;

        this.node.value = "wall";
        this.tile.classList.add("wall")
        console.log("Wall placed")
    }

    removeWall() {
        if (this.board.algorithmIsRunning === true) return;

        this.node.value = null;
        this.tile.classList.remove("wall")
        console.log("Wall removed")
    }

}