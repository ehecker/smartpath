import Board from "../board";

export default class PolyTreeNode {

    constructor(value, position) {
        this.tileObj = document.getElementById(`${position[0]}-${position[1]}`);

        this.value = value;
        this.position = position;
        this.parent = null;
        this.children = [];
        this.grid = Board.grid; //Is this the right way to do this??
    }

    bfs(target) {
        let queue = [this];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            currentNode.tileObj.visit();

            if (currentNode.value === target) return currentNode;
            queue.push(...currentNode.children);
        }
    }

    buildTree() {
        const increments = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        // buildTree function will use the node it is called on as the root node of the tree.
        let neighbors = [this];

        while (neighbors.length > 0) {
            let currentNode = neighbors.shift();
            
            increments.forEach(inc => {
                let newPos = [currentNode.position[0] + inc[0], currentNode.position[1] + inc[1]]
                let neighbor = this.grid[newPos[0]][newPos[1]];

                // If the neighbor exists and is not the parent or child of the current node:
                if (neighbor.node && neighbor.node !== currentNode.parent && !currentNode.children.includes(neighbor.node)) {
                    neighbors.push(neighbor.node);
                    currentNode.addChild(neighbor.node);
                }
            })

        }

    }

    addParent(parentNode) {

        debugger

        if (this.parent !== null) { // Check to see if current node already has a parent
            let index = this.parent.children.indexOf(this);
            this.parent.children.splice(index, 1); // Remove itself from old parent's children
        }

        this.parent = parentNode;

        if (this.parent) { // Check in case node passed in is null
            this.parent.children.push(this);
        }
    }

    addChild(childNode) {
        childNode.addParent(this);
        this.children.push(childNode);
    }

    removeChild(childNode) {
        let index = this.children.indexOf(childNode);
        this.children.splice(index, 1);
        childNode.parent = null;
    }

}