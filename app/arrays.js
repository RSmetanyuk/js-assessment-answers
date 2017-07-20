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
    var answer = [];
    for (var i = 0; i < arr.length + 1; i++) {
      if (i < index) {
        answer[i] = arr[i];
      } else if (i === index) {
        answer[i] = item;
      } else {
        answer[i] = arr[i - 1];
      };
    };
    return answer;
  },

  count: function(arr, item) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        sum ++;
      };
    };
    return sum;
  },

  duplicates: function(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length;) {
        if (arr[i] !== undefined && arr[i] === arr[j]) {
          answer[answer.length] = arr[i];
          delete arr[j];
          j = arr.length;
        } else {
          j++;
        };
      };    
    };
    return answer;    
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
