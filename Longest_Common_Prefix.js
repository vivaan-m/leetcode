
var longestCommonPrefix = function (strs) {

    let prefix = "";
    let stop = false;


    if(strs.length>1){


    for (var i = 0; (i < strs[0].length&&!stop); i++) {
        for (var j = 1; j < strs.length; j++) {
            console.log(strs[j][i],strs[0][i],prefix);
            if (strs[0][i] == strs[j][i]) {
                if(prefix[i] != strs[j][i]){
                 prefix +=strs[j][i];
                }
            }else{
                if(prefix[i] == strs[0][i]){
                   prefix = prefix.substring(0,prefix.length - 1);
                   }
                                   stop = true;
                break;
            }
        }
    }
    }else{
        prefix = strs[0];
    }
    return prefix;


};

console.log(longestCommonPrefix(["bird"]));