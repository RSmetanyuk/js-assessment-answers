exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = { 
  alterContext: function(fn, obj) {
  	return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.greeting = greeting
  },

  iterate: function(obj) {    // NOT PASSED
    var answer = [];
    for (i in obj) {
      answer.push(i + ': ' + obj[i]);
    }
    return answer;
  }
};
