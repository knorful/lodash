const _ = {
  clamp(num, lower, upper) {
    if (num < lower) return lower;
    else if (num > upper) return upper;
    else return num;
  },
  inRange(num, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }

    if (start > end) {
      temp = start;
      start = end;
      end = temp;
    }
    if (num < start) return false;
    else if (num >= end) return false;
    else return true;
  },
  words(str) {
    return str.split(" ");
  },
  pad(str, length) {
    //if length parameter is less than str length, return str
    if (length < str.length) return str;
    //subract length of string from length parameter to see how much space is needed
    let paddingNeeded = length - str.length;
    //if even amount of space, split evenly before and after string
    if (paddingNeeded % 2 === 0) {
      return (
        " ".repeat(paddingNeeded / 2) + str + " ".repeat(paddingNeeded / 2)
      );
    } else {
      //if odd, subtract one from space needed and add to end of string
      return (
        " ".repeat(Math.floor(paddingNeeded / 2)) +
        str +
        " ".repeat(Math.floor(paddingNeeded / 2)) +
        " "
      );
    }
  },
  has(obj, key) {
    if (obj[key]) return true;
    else return false;
  },
  invert(obj) {
    let newObj = {};

    for (let key in obj) {
      newObj[obj[key]] = key;
    }
    return newObj;
  },
  findKey(obj, predicate) {
    for (let key in obj) {
      if (predicate(obj[key])) {
        return key;
      }
    }
  },
  drop(arr, num) {
    if (!num) return arr.slice(1);
    return arr.slice(num);
  },
  dropWhile(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
      if (!predicate(arr[i], i, arr)) {
        return arr.slice(i);
      }
    }
  },
  chunk(arr, size) {
    let chunks = [];

    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
