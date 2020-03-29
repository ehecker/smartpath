import Board from "./board";
import PolyTreeNode from "./algorithms/polytreenode";

document.addEventListener("DOMContentLoaded", () => {

    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")


    // Set root node
    board.grid[11][9].node = new PolyTreeNode("root", [11, 9], board.grid);
    let rootNode = board.grid[11][9];
    // let rootNode = document.getElementById("11-9");
    rootNode.tile.classList.add("root-node")

    // Set target node
    board.grid[11][40].node = new PolyTreeNode("target", [11, 40], board.grid);
    let targetNode = board.grid[11][40];
    // let targetNode = document.getElementById("11-40");
    targetNode.tile.classList.add("target-node")

    // Create tree and run BFS
    rootNode.node.buildTree();
    rootNode.node.bfs("target");


    // let n1 = new PolyTreeNode("node 1", [4, 9]);
    // let n2 = new PolyTreeNode("node 2", [6, 17]);
    // let n3 = new PolyTreeNode("node 3", [12, 4]);

    // console.log("Nodes loaded")

    // n1.addParent(n2);
    // console.log(n1);
    // console.log(n2);
    
    // console.log("Added Parent");



})