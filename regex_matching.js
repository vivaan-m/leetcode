
var isMatch = function (s, p) {

    var dp = new Array(p.length + 1);

    for (var i = 0; i < p.length + 1; i++) {
        dp[i] = new Array(s.length + 1);
    }





    for (var i = 0; i < dp.length; i++) {
        for (var j = 0; j < dp[0].length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true;
            } else if (i == 0) {
                dp[i][j] = false;
            } else if (j == 0) {
                if (p[i - 1] == "*") {
                    dp[i][j] = dp[i - 2][j];
                } else {
                    dp[i][j] = false;
                }
            } else {
                if (p[i - 1] == "." || p[i - 1] == s[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p[i - 1] == "*") {
                    dp[i][j] = dp[i - 2][j];
                    if (p[i - 2] == "." || p[i - 2] == s[j - 1]) {
                        dp[i][j] = dp[i][j]||dp[i][j - 1];
                    }
                } else {
                    dp[i][j] = false;
                }

            }
        }


    }
    return dp;
}



    console.log(isMatch("aaa","ab*a*c*a"));