class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      this.add(this.root, node);
    }
  }

  add(parent, child) {
    if (child.data < parent.data) {
      if (parent.left === null) {
        parent.left = child;
        return;
      } else {
        this.add(parent.left, child);
      }
    } else if (child.data > parent.data) {
      if (parent.right === null) {
        parent.right = child;
        return;
      } else {
        this.add(parent.right, child);
      }
    }
  }

  hasNode(number) {
    return this.search(this.root, number);
  }

  search(currNode, number) {
    if (currNode === null) {
      return false;
    }
    if (number < currNode.data) {
      return this.search(currNode.left, number);
    } else if (number > currNode.data) {
      return this.search(currNode.right, number);
    } else if (number === currNode.data) {
      return true;
    }
  }
}

module.exports = Tree;
