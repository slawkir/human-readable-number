module.exports = function toReadable(number) {
    
    let units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: 'eight',
        9: 'nine'
    }
    let tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }
    let unigueTens = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let array = [];
    array = String(number).split("");


    if (array.length == 1) {
        return units[array[0]];

    } else if (array.length == 2) {
        if (number % 10 == 0) {
            return tens[array[0]];
        } else if (number < 20) {
            return unigueTens[number];
        } else {
            return tens[array[0]] + " " + units[array[1]];
        }

    } else {
        if (number % 100 == 0) {
            return units[array[0]] + " " + "hundred";
        } else if (array[2] == 0) {
            return units[array[0]] + " " + "hundred " + tens[array[1]];
        } else {
            if (number % 100 < 10) {
                return units[array[0]] + " " + "hundred " + units[number % 100];
            } else if (number % 100 < 20 && number % 100 > 9) {
                return units[array[0]] + " " + "hundred " + unigueTens[number % 100];
            } else {
                return units[array[0]] + " " + "hundred " + tens[array[1]] + " " + units[array[2]];
            }
        }
    }
};
