exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
        break;
      };
    };
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    };
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr.length > 0 && arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      };
    };
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
