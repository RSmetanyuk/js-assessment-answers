exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], '!');
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(x) {return str + ", " + x}
  },

  makeClosures: function(arr, fn) {     //not passed
    for (var i=0; i<arr.length; i++) {
      arr[i]=fn(arr[i]);
    }
    return arr
  },

  partial: function(fn, str1, str2) {
    return function (x) {return fn(str1, str2, x)};
  },

  useArguments: function() {
    var answer = 0;
    for (var i=0; i<arguments.length; i++) {
      answer += arguments[i]
    };
    return answer
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
