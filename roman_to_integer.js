/**
 * @param {string} s
 * @return {number}
 */

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//IV             4
//IX             9
//XL 40
//XC 90
//CD 400
//CM 900



 var romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let elementLast = s[s.length-1-i];
        let elementLastSecond = s[s.length-2-i];
        let data = helper(elementLast,elementLastSecond);
        if(data.skip){
            i++;
            result += data.value;
        }else{
            result += data.value;
        }
    }
    return result;
};


helper =(elementLast,elementLastSecond)=>{


    let combined = elementLastSecond+elementLast;

    if(combined=="IV"){
        return {"value":4,"skip":true};
    }else if(combined=="IX"){
        return {"value":9,"skip":true};
    }else if(combined=="XL"){
        return {"value":40,"skip":true};
    }else if(combined=="XC"){
        return {"value":90,"skip":true};
    }else if(combined=="CD"){
        return {"value":400,"skip":true};
    }else if(combined=="CM"){
        return {"value":900,"skip":true};
    }else{
        if(elementLast=="I"){
            return {"value":1,"skip":false};
        }else if(elementLast=="V"){
            return {"value":5,"skip":false};
        }else if(elementLast=="X"){
            return {"value":10,"skip":false};
        }else if(elementLast=="L"){
            return {"value":50,"skip":false};
        }else if(elementLast=="C"){
            return {"value":100,"skip":false};
        }else if(elementLast=="D"){
            return {"value":500,"skip":false};
        }else if(elementLast=="M"){
            return {"value":1000,"skip":false};
        }
    }

}



console.log(romanToInt("III"));