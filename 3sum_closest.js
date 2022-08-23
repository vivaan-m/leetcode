/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
    let result  = 0 ;
    let n = nums.length;

    for (let i = 0; i  < n; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i+1;
        let k = n-1;

        while (j<k){
            let sum = nums[i]+ nums[j]+nums[k];
            if(sum==target){
                result = sum;
                return result;
            }else if(sum<=0){
                j++;
            }else if(sum<target){
                j++;
                result = Math.min(sum,result);
            } else {
                k--;
                result = Math.min(sum,result);
            }
        }

    }


return result;

};

console.log(threeSumClosest([-1,2,1,-4],1));