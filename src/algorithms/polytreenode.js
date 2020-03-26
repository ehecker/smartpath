export default class PolyTreeNode {

    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }

    bfs(target) {
        let queue = [];

        queue.push(this);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode.value === target) return currentNode;
            queue.push(...currentNode.children);
        }
    }

    addParent(node) {
        if (this.parent !== null) {
            let index = this.parent.children.indexOf(this); // Does indexOf work for finding objects? Need to research.
            this.parent.children.splice(index, 1);
        }

        this.parent = node;

        if (this.parent) {
            this.parent.children.push(this);
        }
    }

    addChild(childNode) {
        this.children.push(childNode);
    }

    removeChild(childNode) {
        let index = this.children.indexOf(childNode);
        this.children.splice(index, 1); // Same as above here
    }

}