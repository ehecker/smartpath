import Board from "./src/board";

document.addEventListener("DOMContentLoaded", () => {
    let board = new Board();
    board.fillGrid()
    console.log("Board initialized and populated")
})