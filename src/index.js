import Board from "./board";

// Smartpath Entry File:
document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Add functionality to radio buttons
    function setAlgo(event) {
        let oldActive = document.getElementById(algorithm);
        oldActive.classList.remove("active");

        algorithm = event.target.id;
        let newActive = document.getElementById(algorithm);
        newActive.classList.add("active");

        if (algorithm === "bfs-btn") {
            infoTitleEl.innerHTML = "Breadth First Search";
            infoTextEl.innerHTML = bfsText;
        } else if (algorithm === "dfs-btn") {
            infoTitleEl.innerHTML = "Depth First Search";
            infoTextEl.innerHTML = dfsText;
        } else if (algorithm === "dijkstras-btn") {
            infoTitleEl.innerHTML = "Dijkstra's Algorithm"
            infoTextEl.innerHTML = dijkstrasText;
        }
    }

    
    const bfsText = "Breadth First Search (BFS) is a search algorithm used for navigating graph data structures. It utilizes a 'breadth-first' strategy, meaning that each node explores each of its neighbor nodes before moving onto the nodes at the next level of depth. It was invented in 1945 by Konrad Zuse."
    const dfsText = "Depth First Search (DFS) is a search algorithm which prioritizes exploration of nodes located 'deeper' in a graph structure. It was originally invented by French mathematician Charles Pierre Tremaux in the 19th century."
    const dijkstrasText = "Dijkstra's algorithm is a search algorithm which guarantees discovery of the shortest path between nodes. It is considered the most efficient search algorithm in existence. It was invented by Edsger W. Dijkstra in 1956."
    
    const infoTitleEl = document.getElementById("algo-title")
    const infoTextEl = document.getElementById("algo-info");

    infoTitleEl.innerHTML = "Breadth First Search"; // Set default title
    infoTextEl.innerHTML = bfsText; // Set default text
    let algorithm = "bfs-btn"; // Set default algorithm

       
    const dijkstrasButton = document.getElementById("dijkstras-btn");
    const bfsButton = document.getElementById("bfs-btn");
    const dfsButton = document.getElementById("dfs-btn");
    
    dijkstrasButton.addEventListener("click", setAlgo);
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

    // Add functionality to Animation Speed dropdown
    function setAnimationSpeed(event) {
        let newSpeed;

        switch (event.target.value) {
            case "lightning":
                newSpeed = 5;
                break;
            case "veryfast":
                newSpeed = 15;
                break;
            case "medium":
                newSpeed = 30;
                break;
            case "slowmotion":
                newSpeed = 75;
                break;
            default:
                break;
        }

        board.animationSpeed = newSpeed;
    }

    const selectButton = document.getElementById("anim-speed");
    selectButton.addEventListener("change", setAnimationSpeed)
})