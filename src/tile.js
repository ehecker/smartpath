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

        this.makeDraggable();
    }

    makeDraggable() {
        let board = this.board;

        if (this.node.value === "root" || this.node.value === "target") {

            this.tile.addEventListener("dragstart", (event) => {
                console.log("Dragstart fired")
                // event.target.classList.add("dragging")
            });

        } else {
            this.tile.addEventListener("dragenter", (event) => {
                console.log("Drag enter fired")
                event.preventDefault()
            })

            this.tile.addEventListener("dragover", (event) => {
                console.log("Drag over fired")
                event.preventDefault()
            })

            this.tile.addEventListener("drop", (event) => {
                console.log("Drop fired")
                event.preventDefault();

                let tileId= event.target.id.split("-")
                let newRootPos = [+tileId[0], +tileId[1]]

                board.setRoot(newRootPos)

                // Check target value to determine which board function to call
            });

        }
    }

}