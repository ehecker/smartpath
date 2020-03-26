export default class PolyTreeNode {

    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }

    addParent(node) {
        if (this.parent !== null && this.parent !== node) {
            this.parent.children
        }

        this.parent = node;

        if (this.parent) {
            this.parent.children.push(this);
        }
    }

}