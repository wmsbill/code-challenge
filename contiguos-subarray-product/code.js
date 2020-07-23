/*
* Amazon
* Find the contiguous subarray within an array
* (containing at least one number) which has the largest product.
* Return an integer corresponding to the maximum product possible.
* Example:
* Input: arr[] = {6, -3, -10, 0, 2}
* Output: {6, -3, -10} // The max product is 180
*/

const maxProduct = arr => {
    let max = arr[0];
    let min = arr[0];
    let globalMax = arr[0];

    for(let i = 1; i < arr.length; i++) {
        max = Math.max(arr[i], max * arr[i], min * arr[i]);
        min = Math.min(arr[i], max * arr[i], min * arr[i]);

        globalMax = Math.max(globalMax, max);
    }

    return globalMax;
}

module.exports = maxProduct;
