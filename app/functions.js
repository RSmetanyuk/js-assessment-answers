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
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
      (function(n) {
        answer.push(function() {return fn(arr[n])});
      })(i)
    };
    return answer
  },

  partial: function(fn, str1, str2) {
    return function (x) {return fn(str1, str2, x)};
    // return fn.bind(null, str1, str2) // alternative passed code
  },

  useArguments: function() {
    var answer = 0;
    for (var i=0; i<arguments.length; i++) {
      answer += arguments[i]
    };
    return answer
  },

  callIt: function(fn) {
    var args = [].slice.call(arguments);
    args.shift()
    return fn.apply(null, args)
  },

  partialUsingArguments: function(fn) {
    var args = arguments, curryArgs = [];
 
    for (var i = 1; i < args.length; i++) {
    curryArgs[i - 1] = args[i];
    }
 
    return function () {
    var argsArr = Array.prototype.slice.call(arguments, 0);    
    curryArgs = curryArgs.concat(argsArr);
    return fn.apply(this, curryArgs);
    }
  },

  curryIt: function(fn) {

  }
};
