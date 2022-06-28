const BinaryTree = require("./binaryTree");

describe("it should add a new value to the tree", () => {
  it("tests add on binary tree", () => {
    let node = new BinaryTree(5);
    node.insert(7);
    console.log(node);
    expect(node.root.right.value).toEqual(7);
  });
});
