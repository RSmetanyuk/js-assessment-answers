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
    var answer = [];
    for (var i = 0, n = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        answer[n] = arr[i];
        n ++;
      };
    };
    return answer;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        i --;
      };
    };
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    var answer = [];
    for (var i = 0; i < arr.length -1; i++) {
      answer[i] = arr[i];
    };
    return answer;
  },

  prepend: function(arr, item) {
    var answer = [item];
    for (var i = 0; i < arr.length; i++) {
      answer[i + 1] = arr[i];
    };
    return answer;
  },

  curtail: function(arr) {
    var answer = [];
    for (var i = 1; i < arr.length; i++) {
      answer[i - 1] = arr[i];
    };
    return answer;
  },

  concat: function(arr1, arr2) {
    n = arr1.length;
    for (var i = 0; i < arr2.length; i++) {
      arr1[n + i] = arr2[i];
    };
    return arr1;
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
