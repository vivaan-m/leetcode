var maxArea = function(height) {
    
    var n = height.length;

    var ans = 0;

    var l = 0;
    var r = n-1;

    while(l<r){
        var area = (Math.min(height[l], height[r])*(r-l));
        ans = Math.max(ans, area);
        console.log(height[l], height[r],Math.min(height[l], height[r]),r-l,area);

        if(height[l] > height[r]){
            r--;
        }else{
            l++;
        }
    }

    return ans;

};

console.log(maxArea([1,1]));