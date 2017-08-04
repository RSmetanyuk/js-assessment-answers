exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) { // NOT PASSED
    var permArr = [],
        usedChars = [];
    return (function main() {
        for (var i = 0; i < arr.length; i++) {
            var ch = arr.splice(i, 1)[0];
            usedChars.push(ch);
            if (arr.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            arr.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
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
