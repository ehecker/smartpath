import Board from "./board";
import PolyTreeNode from "./algorithms/polytreenode";

document.addEventListener("DOMContentLoaded", () => {

    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    let n1 = new PolyTreeNode("node 1", [4, 9]);
    let n2 = new PolyTreeNode("node 2", [6, 17]);
    let n3 = new PolyTreeNode("node 3", [12, 4]);

    console.log("Nodes loaded")

    n1.addParent(n2);
    console.log(n1);
    console.log(n2);

    console.log("Added Parent");

    n1.addParent(n3);

    // n2.removeChild(n1);
    // console.log(n1);
    // console.log(n2);

    // console.log("Removed Parent")
})