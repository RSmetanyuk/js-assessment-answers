exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = { 
  alterContext: function(fn, obj) {		//not passed
  	return fn.call(obj)
  	/*name = obj.name;
  	greeting = obj.greeting;
  	fn();*/
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
