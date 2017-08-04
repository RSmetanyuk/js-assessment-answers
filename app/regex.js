exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1+/i.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    var re = /012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210/g
    return re.exec(str);  // NOT PASSED!!!
  },

  matchesPattern: function(str) {
    return /^(\d){3}-(\d){3}-(\d){4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$(\d){1,3}(,\d\d\d){0,}(\.\d\d){0,1}$/.test(str);
  }
};
