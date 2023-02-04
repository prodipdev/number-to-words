// Number to Word Conversion
function numberToWord(input) {
    const firstStep = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const secondStep = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    // 1-19  Number
    if (input < 20) {
      return firstStep[input];
    }

    // 20-99 Number
    if (input < 100) {
        return secondStep[Math.floor(input / 10)] + " " + firstStep[input % 10];
    }

    // 100-999 Number
    if (input < 1000) {
        return firstStep[Math.floor(input / 100)] + " hundred and " + numberToWord(input % 100);
    }

    // 1000-9999 Number
    if (input < 10000) {
     return firstStep[Math.floor(input / 1000)] + " thousand and " + numberToWord(input % 1000);
    }

    // 10000-99999 Number
    if (input < 100000) {
        return secondStep[Math.floor(input / 10000)] + " " + numberToWord(input % 10000);
    }
    else {
      console.log("Please input correct number (1-99999).");
    }

    return "";
  }
console.log(numberToWord(1399));