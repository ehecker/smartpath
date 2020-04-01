import Board from "./board";
import PolyTreeNode from "./algorithms/polytreenode";

document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Set root node
    board.grid[12][9].node = new PolyTreeNode("root", [12, 9], board.grid);
    let rootNode = board.grid[12][9];
    rootNode.tile.classList.add("root-node")
    console.log("Root node set");

    // Set target node
    board.grid[6][18].node = new PolyTreeNode("target", [6, 18], board.grid);
    let targetNode = board.grid[6][18];
    targetNode.tile.classList.add("target-node")
    console.log("Target node set");

    // Add functionality to radio buttons
    function setAlgo(event) {
        algorithm = event.target.id;
    }

    let algorithm = "bfs-btn"; // Default algorithm
       
    const dijkstrasButton = document.getElementById("dijkstras-btn");
    const astarButton = document.getElementById("astar-btn");
    const bfsButton = document.getElementById("bfs-btn");
    const dfsButton = document.getElementById("dfs-btn");
    
    dijkstrasButton.addEventListener("click", setAlgo);
    astarButton.addEventListener("click", setAlgo);
    bfsButton.addEventListener("click", setAlgo);
    dfsButton.addEventListener("click", setAlgo);


    // Add functionality to Visualize button
    function runAlgorithm() {
        switch (algorithm) {
            case "bfs-btn":
                rootNode.node.buildTree();
                console.log("Node tree built")
                rootNode.node.bfs("target");
                console.log("BFS executed");
                break;
            case "dfs-btn":
                rootNode.node.buildTree();
                console.log("Node tree built")
                rootNode.node.dfs("target");
                console.log("DFS executed");
            default:
                break;
        }
    }

    let visButton = document.getElementById("vis-button");
    visButton.addEventListener("click", runAlgorithm);

})