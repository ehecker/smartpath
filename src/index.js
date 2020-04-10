import Board from "./board";

// Smartpath Entry File:
document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Add functionality to radio buttons
    function setAlgo(event) {
        algorithm = event.target.id;
    }

    let algorithm = "bfs-btn"; // Set default algorithm
       
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
        let rootNode = board.rootNode;

        switch (algorithm) {
            case "bfs-btn":
                rootNode.buildTree();
                console.log("Node tree built")

                rootNode.bfs("target");
                console.log("BFS executed");
                break;
            case "dfs-btn":
                rootNode.buildTree();
                console.log("Node tree built")

                rootNode.dfs("target");
                console.log("DFS executed");
                break;
            default:
                break;
        }
    }

    const visButton = document.getElementById("vis-button");
    visButton.addEventListener("click", runAlgorithm);

    // Add functionality to Reset button
    function reset() {
        let grid = document.getElementById("grid");
        grid.innerHTML = "";
        
        board.grid = [];
        console.log("Board cleared")
        board.fillGrid();
    }

    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", reset)
})