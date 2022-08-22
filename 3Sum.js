/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    var result = [];
    nums.sort();
    for (var i = 0; i < nums.length; i++) {

        let num = nums[i];
        for (var j = 0; j < nums.length; j++) {
            if (i != j) {
                let secondNum = nums[j];
                let last = nums[j + 1];
                let sum = num + secondNum + last;
                if (sum == 0) {
                    console.log(num, secondNum, last, sum);
                    result.push([num, secondNum, last]);
                }
            }
        }
    }

    let lastObj = [];
    result = result.filter(function (element) {
        let isDup = false;
        if (element.toString() == lastObj.toString()) {
            isDup = true;
        }
        lastObj = element;
        return !isDup;
    });

    return result;

};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));