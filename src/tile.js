import PolyTreeNode from "./algorithms/polytreenode";

export default class Tile {
    
    constructor(position) {
        this.position = position; // i.e [4, 12];

        this.tile = document.createElement("div");
        this.tile.classList.add("tile");
        this.tile.id = `${position[0]}-${position[1]}`;

        this.node = new PolyTreeNode(null, position);

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);
    }

    visit() {
        this.tile.classList.add("visited");
    }
    
}