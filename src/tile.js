export default class Tile {
    
    constructor(position) {
        this.position = position
        this.tile = document.createElement("div");
        this.tile.classList.add("tile");

        let grid = document.getElementById("grid");
        grid.appendChild(this.tile);
    }

    
}