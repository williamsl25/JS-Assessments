exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    var timeout;
    function countUp () {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(countUp, 100);
        // counts one number per 1/10 of a sec
      }
    }

    countUp();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
// console.log was overwritten in the tests, but you can test this if you copy from countAnswers on line 3 to line 21 and paste in the console.
// Then, console.log(countAnswers.count(1, 20)); will count 1-20
