/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const s of strs) {
    const sortedS = [...s].sort().join("");
    if (!map.has(sortedS)) {
      map.set(sortedS, []);
    }
    map.get(sortedS).push(s);
  }

  return Array.from(map.values());
};
