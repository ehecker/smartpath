import Board from "./board";
import PolyTreeNode from "./algorithms/polytreenode";
// const Board = require("./board")

document.addEventListener("DOMContentLoaded", () => {

    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    let n1 = new PolyTreeNode("node 1");
    let n2 = new PolyTreeNode("node 2");
    let n3 = new PolyTreeNode("node 3");

    console.log("Nodes loaded")

    n1.addParent(n2);
    console.log(n1);
    console.log(n2);

    console.log("Added Parent")

    n2.removeChild(n1);
    console.log(n1);
    console.log(n2);

    console.log("Removed Parent")
})