/**
 * Lexicographical comparison of strings
 * @param  {...string} strings
 */
export default function CompareStrings(...strings) {
  let max = strings[0];

  for (let i = 0; i < strings.length; i++) {
    if (typeof strings[i] !== 'string') {
      throw new Error(`CompareStrings: ${i + 1}-й Аргумент не является строкой`);
    }

    if (strings[i].length === 1 && max.length === 1) {
      if (strings[i][0].charCodeAt(0) > max[0].charCodeAt(0)) max = strings[i];

      continue;
    }

    let jCounter = 0;
    let gCounter = 0;
    while (strings[i].length > jCounter && max.length > gCounter) {
      if (strings[i][jCounter].charCodeAt(0) < max[gCounter].charCodeAt(0)) {
        max = strings[i];
        break;
      } else if (strings[i][jCounter].charCodeAt(0) > max[gCounter].charCodeAt(0)) {
        break;
      } else {
        jCounter++;
        gCounter++;
      }
    }
  }

  return max;
}
