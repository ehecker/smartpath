import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    
    constructor(nodeValue, position, board) {
        this.position = position;
        this.board = board; // Do I actually need this?

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);

        this.node = new PolyTreeNode(nodeValue, position, board); // This MUST come after this.tile's id is set
        // debugger
        this.makeDraggable();
        // this.tile.addEventListener("dragover", )
    }

    makeDraggable() {
        // console.log("makeDraggable fired")
        if (this.node.value === "root" || this.node.value === "target") {
            // debugger
            // console.log("Entered conditional")
            this.tile.addEventListener("drag", (event) => {
                console.log("Drag started")
                event.target.classList.add("dragging")
            });

        }
    }

    makeDroppable() {

    }

    // visit() {
    //     this.tile.classList.add("visited");
    // }
    
    // markFound() {
    //     this.tile.classList.add("target-found")
    // }
}