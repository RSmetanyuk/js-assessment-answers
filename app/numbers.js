exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bin = num.toString(2);
    return + bin.charAt(bin.length - bit)
  },

  base10: function(str) {
  	return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    var answer = num.toString(2);  
    while (answer.length < 8) {answer = "0" + answer};
    return answer
  },

  multiply: function(a, b) {
  	a *= 10;
  	b *=10

  	return a * b / 100;
  }
};
