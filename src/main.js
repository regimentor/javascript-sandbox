import s from "./index.css";
import quicksort from "./sorts/quicksort";
import mergesort from "./sorts/mergesort";
import BinaryTree from "./Entities/BinaryTree";

export default function main() {
  // quicksort
  // const arr = [];
  // for (let i = 0; i <= 100; i++) arr.push(Math.floor(Math.random() * (999 - 1)) + 1);

  // console.time("quicksort");
  // console.log(quicksort([...arr], 0, arr.length - 1));
  // console.timeEnd("quicksort");
  // console.time("mergesort");
  // console.log(mergesort([...arr]));
  // console.timeEnd("mergesort");

  const tree = new BinaryTree(null);

  BinaryTree.add(tree.root, 1);
  BinaryTree.add(tree.root, 10);
  BinaryTree.add(tree.root, 5);
  BinaryTree.add(tree.root, 2);
  BinaryTree.add(tree.root, 3);
  BinaryTree.add(tree.root, 4);
  BinaryTree.add(tree.root, 6);
  BinaryTree.add(tree.root, 7);
  BinaryTree.add(tree.root, 8);
  BinaryTree.add(tree.root, 11);
  BinaryTree.add(tree.root, 22);
  BinaryTree.add(tree.root, 21);
  BinaryTree.add(tree.root, 33);
  BinaryTree.add(tree.root, 24);
  BinaryTree.add(tree.root, 20);
  BinaryTree.add(tree.root, 9);
  BinaryTree.add(tree.root, 7.5);

  const a = BinaryTree.search(tree.root, 6);

  BinaryTree.inDepth(tree.root);

  const dom = tree.render(tree.root);

  document.querySelector("#root").appendChild(dom);

  console.log(tree, a);
}
