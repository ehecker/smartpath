// import Board from "./board";
const Board = require("./board")

document.addEventListener("DOMContentLoaded", () => {
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")
})