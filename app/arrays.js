exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length - 1; i++){
    console.log(arr)
    console.log(arr.indexOf(item));
      arr.splice(arr.indexOf(item), 1);
    }
    console.log(arr)
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
      for (i = 0; i < arr.length; i++) {
        console.log(arr) // [1, 2, 2, 3, 4, 2, 2]
        if (arr[i] === item) {
          console.log(arr)
          arr.splice(i, 1);
          console.log(arr)
          i = i - 1;
          length = length - 1;
        }
      }
      console.log(arr)
      return arr;
    },

  append : function(arr, item) {
   arr.push(item);
   console.log(arr)
   return arr;

   },


  truncate : function(arr) {
    arr.pop();
    console.log(arr)
    return arr;
  },

// you should be able to add an item to the beginning of an array
  prepend : function(arr, item) {
    arr.unshift(item);
    console.log(arr)
    return arr;
  },

// you should be able to remove the first item of an array
  curtail : function(arr) {
    arr.shift();
    console.log(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    console.log(arr); //will splice out at index[2] and push in the item which is z
    return arr;
  },

// 'you should be able to count the occurences of an item in an array'
  count : function(arr, item) {
    var count = 0;
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      if (arr[i] === item) {
        count++;
        console.log(arr)
        console.log(count)
      }
    }

    return count;
  },

// thanks Mike DeSimone on stackoverflow for the tip http://stackoverflow.com/questions/8314297/best-way-to-return-duplicate-elements-in-an-array
  duplicates : function(arr) {
    var results = [];
    for (var i = 0, length = arr.length - 1; i < length; i++) {
      console.log(results)
      if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
        console.log(results)
          results.push(arr[i]);
       }
    }
    console.log(results);
    return results;
  },

  //most concise and efficient way to find out if a JavaScript array contains an obj?

  // function contains(a, obj) {
  //     for (var i = 0; i < a.length; i++) {
  //         if (a[i] === obj) {
  //             return true;
  //         }
  //     }
  //     return false;
  // }


  square : function(arr) {
    var squaredArr = [];
    for (var i = 0, length = arr.length; i < length; i++) {
      squaredArr.push(arr[i] * arr[i]);
    }
    console.log(squaredArr) //[1,4,9,16]
    return squaredArr;
  },

// be able to find all occurrences of an item in an array
  findAllOccurrences : function(arr, item) {
   var occurArr = [];
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] === item) {
       occurArr.push(i);
     }
   }
   return occurArr;
 }
};
