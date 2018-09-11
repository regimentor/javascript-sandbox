import s from "./index.css";
import quicksort from "./sorts/quicksort";
import mergesort from "./sorts/mergesort";

export default function main() {
  // quicksort
  const arr = [];
  for (let i = 0; i <= 100; i++) arr.push(Math.floor(Math.random() * (999 - 1)) + 1);

  console.time("quicksort");
  console.log(quicksort([...arr], 0, arr.length - 1));
  console.timeEnd("quicksort");
  console.time("mergesort");
  console.log(mergesort([...arr]));
  console.timeEnd("mergesort");
}
