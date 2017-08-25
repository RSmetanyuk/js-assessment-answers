exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName, answer) {
    var answer = answer || [];
    var dirName = dirName || data.dir;
    if (dirName === data.dir) {
    for (var i = 0; i < data.files.length; i++) {
        if (typeof data.files[i] === "string") {
          answer.push(data.files[i]); 
        } else {
          answer = exports.recursionAnswers.listFiles(data.files[i], null, answer)               
        };
      };
    } else {
      for (var i = 0; i < data.files.length; i++) {
      if (typeof data.files[i] !== "string") {answer = exports.recursionAnswers.listFiles(data.files[i], dirName, answer)}
      };
    };
    return answer
  },

  permute: function(arr) {
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
    if (n === 0) {     
      return 0;
    } else if (n === 1) {
      return 1;
    };
    return exports.recursionAnswers.fibonacci(n-1) + exports.recursionAnswers.fibonacci(n-2);
  },

  validParentheses: function(n) {
    if (n == 0)
        return [""];

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = exports.recursionAnswers.validParentheses(i);
        var rights = exports.recursionAnswers.validParentheses(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
  }
};
