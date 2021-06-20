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
};

// Do not write or modify code below this line.
module.exports = _;
