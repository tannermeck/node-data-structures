class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(current, newNode) {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
};
