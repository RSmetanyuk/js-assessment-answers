exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = { 
  alterContext: function(fn, obj) {		//not passed
  	name = obj.name;
  	greeting = obj.greeting;
  	fn();
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
