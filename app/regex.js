exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var i = 0;
    var answer = false;
    while (i < str.length) {
      if (isNaN(str.charAt(i))) {
        i++;
      } else {
        answer = true;
        break;
      };
    }
    return answer;
  },

  containsRepeatingLetter: function(str) {
    var answer = false;
    for (var i = 0; i < str.length; i++) {
      if (!isNaN(str.charAt(i))) continue;
      for (var j = i + 1; j < str.length; j++) {
        if(str.charAt(i) === str.charAt(j)) {
          answer = true;
          i = str.length
          break;
        };
      };
    };
    return answer;
  },

  endsWithVowel: function(str) {
    var vowel = "aeiou";
    var answer = false;
    str = str.toLowerCase();
    for (var i = 0; i < vowel.length; i++) {
      if (str.endsWith(vowel.charAt(i))) {
        answer = true;
        break;
      }
    }
    return answer;
  },

  captureThreeNumbers: function(str) {
    var answer = false;
    for (var i = 0; i < str.length - 2; i++) {
      if (!isNaN(str.charAt(i)) && !isNaN(str.charAt(i + 1)) && !isNaN(str.charAt(i + 2))) {
        if (str.charAt(i) - str.charAt(i + 1) === 1 && str.charAt(i + 1) - str.charAt(i + 2) === 1) {
          answer = str.slice(i, i + 3);
          break;         
        } else if (str.charAt(i) - str.charAt(i + 1) === - 1 && str.charAt(i + 1) - str.charAt(i + 2) === - 1) {
          answer = str.slice(i, i + 3);
          break; 
        };
      };
    }; 
    return answer;
  },

  matchesPattern: function(str) {
    var answer = false;
    if (str.length === 12) {
      if (str.charAt(3) === "-" && str.charAt(7) === "-") {
        if(!isNaN(str.slice(0, 3)) && !isNaN(str.slice(4, 7)) && !isNaN(str.slice(8))) {
          answer = true;
        };
      };
    };
    return answer;
  },

  isUSD: function(str) {

  }
};
