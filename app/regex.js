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

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
