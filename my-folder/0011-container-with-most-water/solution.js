/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // brute force
  // let res = 0;

  // for (let l = 0; l < height.length; l++) {
  //   for (let r = l + 1; r < height.length; r++) {
  //     const area = (r - l) * Math.min(height[l], height[r]);
  //     res = Math.max(res, area);
  //   }
  // }

  // double points
  let res = 0;
  let [l, r] = [0, height.length - 1];

  while (l !== r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(area, res);

    height[l] < height[r] ? (l += 1) : (r -= 1);
  }

  return res;
};
