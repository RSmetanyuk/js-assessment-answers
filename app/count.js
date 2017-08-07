exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
	if (start <= end) {
    	console.log(start);
    	start++;
    	var myTimer = setTimeout(exports.countAnswers.count, 100, start, end);
    }
    return counter = {cancel: function() {clearTimeout(myTimer)}}
  }
};