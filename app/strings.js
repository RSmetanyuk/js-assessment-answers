exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	return str.replace(/(\w)\1+/g,"$1".repeat(amount))

  	/*var re = new RegExp("(.)(?=\\1{" + amount + "})","g");  // alternative variant
    return str.replace(re, "");*/
  },

  wordWrap: function(str, cols) {
    var formatedString = '', wordsArray = [];
    wordsArray = str.split(' ');
    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }
    return formatedString;
  },

  reverseString: function(str) {
  	str = str.split("");
  	str.reverse();
  	return str.join("");
  }
};
