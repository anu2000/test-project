exports.romanGenerate = function (str) {
    roman = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    array = str.split("")
    sum = 0
    array.forEach(element => {
        const a = roman[element];
        sum += a    
    });
    return sum
  };