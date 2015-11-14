exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
// you should be able to use an array as arguments when calling a function
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },
  //syntax: fun.apply(thisArg, [argsArray])
// ----------------------------------------
  speak : function(fn, obj) {
    return fn.call(obj);
  },

//   function greet() {
// var reply = [this.person, 'Is An Awesome', this.role].join(' ');
//   console.log(reply);
// }
//
// var i = {
//   person: 'Douglas Crockford', role: 'Javascript Developer'
// };
//
// greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer
// -----------------------------------------
// you should be able to return a function from a function
  functionFunction : function(str) {
      return function(arg) {
      return str + ', ' + arg;

    };
  },
// function counter() {
//   var count = 0;
//   return function() {
//       console.log(count++);
//   }
// }
// var count = counter();
// count();
// count();
// count();
// will console.log 0 1 2
// ---------------------------------
// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created. The closure incorporates both the makeFn function and the ret variable that existed when the closure was created.
  makeClosures : function(arr, fn) {
    var ret = [];
    var makeFn = function(val) {
      return function() {
         return fn(val);
        };
    };
    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
