exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) { // NOT PASSED
  	var answer = [];
  	for (var i=0; i<arr.length; i++) {
  		answer[i] = arr[arr.length-1-i];
  	}
  	return answer;
  },

  fibonacci: function(n) {
  	var arrFibonacci = [0, 1];
  	for (var i=2; i<=n; i++) {
  		arrFibonacci[i] = arrFibonacci[i-1] + arrFibonacci[i-2];
  	}
  	return arrFibonacci[n]
  },

  validParentheses: function(n) {

  }
};
