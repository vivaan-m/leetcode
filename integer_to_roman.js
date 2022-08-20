// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var intToRoman = function (num) {
    console.log('I :>> ', ("i"*4));

    var result = "";
    var n = num.toString().length;

    for (var i = n; i >= 0; i--) {
        var last = num % 10;
        var pos = Math.pow(10, i);
        console.log(last, pos, last * pos);
        if (pos == "1000") {

        } else if (pos == "100") {

        } else if (pos == "10") {

        } else {

        }



    }





};

repeatAdd = (value, pos) => {
    var result = "";
    if (value > 5) {

    } else if (value == 5) {

    } else {
        while (value >= 0) {
            result +=""
            value--;
        }
    }
}


console.log(intToRoman(10))