import Board from "./board";

document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    const bfsText = "Breadth-First Search (BFS) is a search algorithm in which nodes prioritize exploration of their immediate neighbors before moving on to nodes at the next level of depth. BFS guarantees discovery of the shortest path."
    const dfsText = "Depth-First Search (DFS) is a search algorithm in which nodes prioritize exploration of nodes located deeper in the graph structure before backtracing to immediate neighbors. Note that although the animation is included for illustrative purposes, DFS does not guarantee discovery of the shortest path."
    const dijkstrasText = "Dijkstra's algorithm is a search algorithm which applies a breadth-first strategy while also accounting for varying levels of difficulty in passing through certain nodes. Considered the most efficient pathfinding algorithm, it has widespread application in many fields including navigational systems and artificial intelligence."
    
    const infoTitleEl = document.getElementById("algo-title")
    const infoTextEl = document.getElementById("algo-info");

    // Add functionality to radio buttons
    function setAlgo(event) {
        let oldActive = document.getElementById(algorithm);
        oldActive.classList.remove("active");

        visButton.classList.remove("vis-disabled")

        algorithm = event.target.id;
        let newActive = document.getElementById(algorithm);
        newActive.classList.add("active");

        if (algorithm === "bfs-btn") {
            infoTitleEl.innerHTML = "Breadth-First Search";
            infoTextEl.innerHTML = bfsText;
        } else if (algorithm === "dfs-btn") {
            infoTitleEl.innerHTML = "Depth-First Search";
            infoTextEl.innerHTML = dfsText;
        } else if (algorithm === "dijkstras-btn") {
            visButton.classList.add("vis-disabled")
            infoTitleEl.innerHTML = "Dijkstra's Algorithm - Coming Soon"
            infoTextEl.innerHTML = dijkstrasText;
        }
    }

    // Set defaults
    infoTitleEl.innerHTML = "Breadth-First Search"; // Set default title
    infoTextEl.innerHTML = bfsText; // Set default text
    let algorithm = "bfs-btn"; // Set default algorithm
       
    const dijkstrasButton = document.getElementById("dijkstras-btn");
    const bfsButton = document.getElementById("bfs-btn");
    const dfsButton = document.getElementById("dfs-btn");
    
    dijkstrasButton.addEventListener("click", setAlgo);
    bfsButton.addEventListener("click", setAlgo);
    dfsButton.addEventListener("click", setAlgo);

    // Add functionality to Visualize button
    const visButton = document.getElementById("vis-button");
    visButton.addEventListener("click", runAlgorithm);

    function runAlgorithm() {
        if (board.algorithmIsRunning === true) return;

        let rootNode = board.rootNode;
        board.clearPath();

        switch (algorithm) {
            case "bfs-btn":
                board.algorithmIsRunning = true;
                board.resetTree()

                rootNode.visitedTiles = [];
                rootNode.visited = new Set();
                rootNode.visited.add(rootNode.position.join("-"));

                rootNode.buildTree();
                console.log("Node tree built")
                rootNode.bfs("target");
                console.log("BFS executed");
                break;
            case "dfs-btn":
                board.algorithmIsRunning = true;
                board.resetTree()
                 
                rootNode.visitedTiles = [];
                rootNode.visited = new Set();
                rootNode.visited.add(rootNode.position.join("-"));

                rootNode.buildTree();
                console.log("Node tree built")
                rootNode.dfs("target");
                console.log("DFS executed");
                break;
            default:
                break;
        }
    }

    // Add functionality to Reset button
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", board.reset)

    // Add functionality to Animation Speed dropdown
    function setAnimationSpeed(event) {
        let newSpeed;

        switch (event.target.value) {
            case "lightning":
                newSpeed = 5;
                break;
            case "fast":
                newSpeed = 15;
                break;
            case "medium":
                newSpeed = 30;
                break;
            case "slowmotion":
                newSpeed = 100;
                break;
            default:
                break;
        }

        board.animationSpeed = newSpeed;
    }

    const selectButton = document.getElementById("anim-speed");
    selectButton.addEventListener("change", setAnimationSpeed)

    // Add functionality to Clear Walls and Clear Path buttons
    const clearWallsButton = document.getElementById("clear-walls");
    clearWallsButton.addEventListener("click", board.clearWalls);

    const clearPathButton = document.getElementById("clear-path");
    clearPathButton.addEventListener("click", board.clearPath)

    // Add functionality to Generate Maze button
    const genMazeButton = document.getElementById("gen-maze-button");
    genMazeButton.addEventListener("click", board.generateScatterMaze);
})