class Tile {
    
    constructor(position) {
        this.position = position
        this.tile = document.createElement("div").classList.add("tile");
        document.addEventListener("DOMContentLoaded", () => {
            let grid = document.getElementById("grid");
            grid.appendChild(this.tile)
        })
    }

    

    
}

module.exports = Tile;