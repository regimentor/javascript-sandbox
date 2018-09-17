import style from "./style.css";

class BinaryTreeNode {
  /**
   * @type HTMLElement
   */
  DOMNode = null;
  childsNode = null;
  root = false;
  data = null;
  parrent = null;
  leftNode = null;
  rightNode = null;
  constructor(data, parrent, root) {
    this.data = typeof data === undefined ? null : data;
    this.parrent = parrent;
    this.root = root || false;

    this.DOMNode = document.createElement("div");
    this.DOMNode.classList.add(style["node"]);

    const dataView = document.createElement("div");
    dataView.classList.add(style["node-data"]);
    dataView.textContent = this.data;

    this.childsNode = document.createElement("div");
    this.childsNode.classList.add(style["node-childs"]);

    this.DOMNode.appendChild(dataView);
    this.DOMNode.appendChild(this.childsNode);
  }
}

export default class BinaryTree {
  root = null;
  /**
   * @type HTMLElement
   */
  DOMNode = null;

  constructor(data, DOMNode) {
    this.root = new BinaryTreeNode(data, this, true);
    this.DOMNode = DOMNode;
  }

  /**
   * @param {BinaryTreeNode} node
   * @param {Number} value
   */
  static search(node, value) {
    if (node.data === value) return node;
    else {
      if (value < node.data) return this.search(node.leftNode, value);
      if (value > node.data) return this.search(node.rightNode, value);
    }
  }

  /**
   * @param {BinaryTreeNode} node
   * @param {Number} dataToInsert
   */
  static add(node, dataToInsert) {
    if (node.root === true && node.data === null) {
      node.data = dataToInsert;
      return;
    } else {
      if (node.data > dataToInsert) {
        if (node.leftNode) this.add(node.leftNode, dataToInsert);
        else {
          node.leftNode = new BinaryTreeNode(dataToInsert, node);
          return;
        }
      }
      if (node.data < dataToInsert) {
        if (node.rightNode) this.add(node.rightNode, dataToInsert);
        else {
          node.rightNode = new BinaryTreeNode(dataToInsert, node);
          return;
        }
      }
    }
  }

  /**
   * @param {BinaryTreeNode} node
   */
  static inDepth(node) {
    if (node.leftNode) this.inDepth(node.leftNode);
    if (node.rightNode) this.inDepth(node.rightNode);
  }

  /**
   * @param {BinaryTreeNode} node
   */
  render(node) {
    if (node.leftNode) {
      node.childsNode.appendChild(this.render(node.leftNode));
    } else {
      const emptyNode = document.createElement("div");
      emptyNode.classList.add(style["empty-child"]);
      node.childsNode.appendChild(emptyNode);
    }

    if (node.rightNode) {
      node.childsNode.appendChild(this.render(node.rightNode));
    } else {
      const emptyNode = document.createElement("div");
      emptyNode.classList.add(style["empty-child"]);
      node.childsNode.appendChild(emptyNode);
    }

    return node.DOMNode;
  }
}
