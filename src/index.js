import Board from "./board";
import PolyTreeNode from "./algorithms/polytreenode";

document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Set root node
    board.grid[11][9].node = new PolyTreeNode("root", [11, 9], board.grid);
    let rootNode = board.grid[11][9];
    rootNode.tile.classList.add("root-node")
    console.log("Root node set");

    // Set target node
    board.grid[11][40].node = new PolyTreeNode("target", [11, 40], board.grid);
    let targetNode = board.grid[11][40];
    targetNode.tile.classList.add("target-node")
    console.log("Target node set");

    // Set Visualize button functionality
    let algorithm = "bfs-btn"; // Default algorithm

    function setAlgo(event) {
        algorithm = event.target.id;
    }

    function runAlgorithm() {
        switch (algorithm) {
            case "bfs-btn":
                rootNode.node.buildTree();
                console.log("Node tree built")
                rootNode.node.bfs("target");
                console.log("Algorithm executed");
                break;
            case "dfs-btn":
                rootNode.node.buildTree();
                console.log("Node tree built")
                rootNode.node.dfs("target");
                console.log("Algorithm executed");
            default:
                break;
        }
    }
    
    let dijkstrasButton = document.getElementById("dijkstras-btn");
    let astarButton = document.getElementById("astar-btn");
    let bfsButton = document.getElementById("bfs-btn");
    let dfsButton = document.getElementById("dfs-btn");
    
    dijkstrasButton.addEventListener("click", setAlgo);
    astarButton.addEventListener("click", setAlgo);
    bfsButton.addEventListener("click", setAlgo);
    dfsButton.addEventListener("click", setAlgo);
    
    let visButton = document.getElementById("vis-button");
    visButton.addEventListener("click", runAlgorithm);

})