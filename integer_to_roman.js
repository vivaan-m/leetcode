// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var intToRoman = function (num) {
    console.log('I :>> ', ("i" * 4));

    var result = "";
    var n = num.toString().length;

    for (var i = 0; i < n; i++) {
        var last = num % 10;
        num = parseInt(num / 10);
        var pos = Math.pow(10, i);
        console.log(last, pos, last * pos);

        result = repeatAdd(last, pos) + result;



    }
    return result;




};

repeatAdd = (value, pos) => {
    var result = "";



    if (value == 9) {
        if (pos == "1") {
            result = result + "IX";
        } else if (pos == "10") {
            result = result + "XC";
        } else if (pos == "100") {
            result = result + "CM";
        } else if (pos == "1000") {

        }
        return result;

    } else if (value > 5) {
        if (pos == "1") {
            result = result + "V";
            value = value - 5;
            while (value > 0) {
                result = result + "I"
                value--;
            }
        } else if (pos == "10") {
            result = result + "L";
            value = value - 5;
            while (value > 0) {
                result = result + "X"
                value--;
            }

        } else if (pos == "100") {
            result = result + "D";
            value = value - 5;
            while (value > 0) {
                result = result + "C"
                value--;
            }

        } else if (pos == "1000") {

        }
        return result;

    } else if (value == 5) {
        if (pos == "1") {
            result = result + "V";
        } else if (pos == "10") {
            result = result + "L";
        } else if (pos == "100") {
            result = result + "D";
        } else if (pos == "1000") {

        }
        return result;

    } if (value == 4) {
        if (pos == "1") {
            result = result + "IV";
        } else if (pos == "10") {
            result = result + "XL";
        } else if (pos == "100") {
            result = result + "CD";
        } else if (pos == "1000") {

        }
        return result;

    } else {
        if (pos == "1") {
            while (value > 0) {
                result = result + "I"
                value--;
            }
        } else if (pos == "10") {
            while (value > 0) {
                result = result + "X"
                value--;
            }

        } else if (pos == "100") {
            while (value > 0) {
                result = result + "C"
                value--;
            }

        } else if (pos == "1000") {
            while (value > 0) {
                result = result + "M"
                value--;
            }
        }
        return result;

    }
}


console.log(intToRoman(1994))
