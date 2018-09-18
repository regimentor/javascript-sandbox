import style from "./style.css";

class TreeNode {
  /** @type HTMLElement */
  DOMNode = null;
  /** @type HTMLElement */
  childrensNode = null;
  /** @type Array */
  childrens = [];
  /** @type Object */
  data = null;
  /** @type TreeNode */
  parrent = null;

  constructor(data, parrent) {}
  /**
   * @param {TreeNode} node
   */
  addChild(node) {
    node.parrent = this;
    this.childrens.push(node);
  }
}

class Tree {
  /** @type TreeNode */
  rootNode = null;

  constructor(rootNodeData) {
    this.rootNode = new TreeNode(rootNodeData);
  }

  /**
   * @param {TreeNode} node
   * @param {TreeNode} to
   */
  addTo(node, to) {
    to.addChild(node);
  }
}
