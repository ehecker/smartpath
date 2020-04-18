import Board from "./board";

document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Add Modal navigation
    const modal = document.getElementsByClassName("modal")[0];
    const modalPageCounter = document.getElementsByClassName("modal-counter")[0];
    const modalTitle = document.getElementsByClassName("modal-title")[0];
    const modalCloseButton = document.getElementsByClassName("modal-close-btn")[0];
    const modalBackButton = document.getElementsByClassName("back-button")[0];
    const modalNextButton = document.getElementsByClassName("next-button")[0];

    const modalPage1 = document.getElementById("modal-p1")
    const modalPage2 = document.getElementById("modal-p2")
    const modalPage3 = document.getElementById("modal-p3")
    const modalPage4 = document.getElementById("modal-p4")
    const modalPage5 = document.getElementById("modal-p5")

    const modalPages = {
        1: modalPage1,
        2: modalPage2,
        3: modalPage3,
        4: modalPage4,
        5: modalPage5
    }

    let modalPageNum = 1;
    let lastPage;

    function updateModal(event) {
        lastPage = modalPages[modalPageNum];

        // debugger

        if (event.target.innerHTML === "Next" || event.target.innerHTML === "Get Started") {
            modalPageNum++;
        } else if (event.target.innerHTML === "Back") {
            modalPageNum--;
        }

        if (modalPageNum === 1) {
            modalPageCounter.innerHTML = "1/5"
            modalTitle.innerHTML = "Welcome to Smartpath!"

            modalPage1.classList.remove("hide-modal")
            lastPage.classList.add("hide-modal")

            modalTitle.classList.add("modal-title");
            modalTitle.classList.remove("modal-title-p2");

            modalBackButton.style.visibility = "hidden";
        } else if (modalPageNum === 2) {
            modalPageCounter.innerHTML = "2/5"
            modalTitle.innerHTML = "Smartpath 101"

            modalTitle.classList.add("modal-title-p2");
            modalTitle.classList.remove("modal-title");

            modalPage2.classList.remove("hide-modal")
            lastPage.classList.add("hide-modal")
            
            modalBackButton.style.visibility = "visible";
        } else if (modalPageNum === 3) {
            modalPageCounter.innerHTML = "3/5"

            modalPage3.classList.remove("hide-modal")
            lastPage.classList.add("hide-modal")
        } else if (modalPageNum === 4) {
            modalPageCounter.innerHTML = "4/5"

            modalPage4.classList.remove("hide-modal")
            lastPage.classList.add("hide-modal")

            modalNextButton.innerHTML = "Next";
        } else if (modalPageNum === 5) {
            modalPageCounter.innerHTML = "5/5"

            modalPage5.classList.remove("hide-modal")
            lastPage.classList.add("hide-modal")

            modalNextButton.innerHTML = "Get Started"
        } else if (modalPageNum === 6) {
            closeModal();
        }
    }

    modalNextButton.addEventListener("click", updateModal);
    modalBackButton.addEventListener("click", updateModal);

    function closeModal() {
        modal.style.display = "none";
    }

    modalCloseButton.addEventListener("click", closeModal);

    // Add functionality to radio buttons
    const bfsText = "Breadth-First Search (BFS) is a search algorithm in which nodes prioritize exploration of their immediate neighbors before moving on to nodes at the next level of depth. BFS guarantees discovery of the shortest path."
    const dfsText = "Depth-First Search (DFS) is a search algorithm in which nodes prioritize exploration of nodes located deeper in the graph structure before backtracing to immediate neighbors. Although it is certain to find the target node, it does not guarantee discovery of the shortest path."
    const dijkstrasText = "Dijkstra's algorithm is a search algorithm which applies a breadth-first strategy while also accounting for varying levels of difficulty in passing through certain nodes. Considered the most efficient pathfinding algorithm, it has widespread application in many fields including navigational systems and artificial intelligence."
    const dfsNote = " Note: The shortest path animation is included in this application only for illustrative purposes."

    const infoTitleEl = document.getElementById("algo-title");
    const infoTextEl = document.getElementById("algo-info");
    const dfsNoteEl = document.getElementById("dfs-note");

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
            dfsNoteEl.innerHTML = "";
        } else if (algorithm === "dfs-btn") {
            infoTitleEl.innerHTML = "Depth-First Search";
            infoTextEl.innerHTML = dfsText;
            dfsNoteEl.innerHTML = dfsNote;
        } else if (algorithm === "dijkstras-btn") {
            visButton.classList.add("vis-disabled")
            infoTitleEl.innerHTML = "Dijkstra's Algorithm - Coming Soon"
            infoTextEl.innerHTML = dijkstrasText;
            dfsNoteEl.innerHTML = "";
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
                newSpeed = 40;
                break;
            case "slowmotion":
                newSpeed = 150;
                break;
            default:
                break;
        }

        board.animationSpeed = newSpeed;
    }

    const selectButton = document.getElementById("anim-speed");
    selectButton.addEventListener("change", setAnimationSpeed)

    // Add functionality to Clear Walls and Clear Path buttons
    // const clearWallsButton = document.getElementById("clear-walls");
    // clearWallsButton.addEventListener("click", board.clearWalls);

    const clearPathButton = document.getElementById("clear-path");
    clearPathButton.addEventListener("click", board.clearPath)

    // Add functionality to Generate Maze button
    const genMazeButton = document.getElementById("gen-maze-button");
    genMazeButton.addEventListener("click", board.generateScatterMaze);
})