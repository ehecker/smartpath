import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    
    constructor(position, board) {
        this.position = position; // Array of nums, i.e [4, 12];
        // this.board = board;

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        // debugger

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);

        this.node = new PolyTreeNode(null, position, board.grid);
    }

    visit() {
        this.tile.classList.add("visited");
    }
    
    markFound() {
        this.tile.classList.add("target-found")
    }
}