/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const initial = val
    return {
        toBe: (input) => {
            if (initial !== input) throw new Error("Not Equal")
            return true
        },
        notToBe: (input) => {
            if (initial === input) throw new Error("Equal")
            return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
