export default class PolyTreeNode {

    constructor(value, position, grid) {
        this.tileObj = document.getElementById(`${position[0]}-${position[1]}`);
        this.value = value;
        this.position = position;
        this.parent = null;
        this.children = [];
        this.grid = grid;
    }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {

            let currentNode = queue.shift();

            if (currentNode.value !== "root" && currentNode.value !== "target") {
                currentNode.tileObj.classList.add("visited");
            }

            if (currentNode.value === target) {
                currentNode.tileObj.classList.add("target-found");
                console.log(currentNode);
                return currentNode;
            }
            
            queue.push(...currentNode.children);

        }
        
    }

    dfs(target) {

        if (this.value === target) {
            this.tileObj.classList.add("target-found");
            console.log(this);
            return this;
        }

        if (this.value !== "root" && this.value !== "target") {
            this.tileObj.classList.add("visited");
        }

        for (let i = 0; i < this.children.length; i++) {
            return this.children[i].dfs(target)
        }

    }

    buildTree() {
        const increments = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        // buildTree function will use the node on which it is called as the root node of the tree.
        let neighbors = [this];

        while (neighbors.length > 0) {
            let currentNode = neighbors.shift();
            
            increments.forEach(inc => {
                let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]]

                // If the position is valid:
                if (newPos[0] >= 0 && newPos[0] < 24 && newPos[1] >= 0 && newPos[1] < 48) {
                    let neighbor = this.grid[newPos[0]][newPos[1]];

                    // If the neighbor exists and is not the parent or child of the current node: // edit this later
                    if (neighbor.node && neighbor.node.parent === null && !currentNode.children.includes(neighbor.node)) {
                        neighbors.push(neighbor.node);
                        neighbor.node.addParent(currentNode);
                    }
                }

            })

        }

    }

    addParent(parentNode) {

        if (this.parent !== null) { // Check to see if current node already has a parent
            this.parent.removeChild(this) // Remove itself from old parent's children
        }

        if (parentNode !== null) {
            this.parent = parentNode;
            this.parent.children.push(this);
        }

        // this.parent = parentNode;

        // if (this.parent) { // Check in case node passed in is null
        //     this.parent.children.push(this);
        // }
    }

    // addChild(childNode) {
    //     childNode.addParent(this);
    // }

    // removeChild(childNode) {
    //     let index = this.children.indexOf(childNode);
    //     this.children.splice(index, 1);
    //     childNode.parent = null;
    // }

}

















    