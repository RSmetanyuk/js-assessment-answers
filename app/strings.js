exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	return str.replace(/(\w)\1+/g,"$1".repeat(amount))

  	/*var re = new RegExp("(.)(?=\\1{" + amount + "})","g");  // alternative variant
    return str.replace(re, "");*/
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	str = str.split("");
  	str.reverse();
  	return str.join("");
  }
};
