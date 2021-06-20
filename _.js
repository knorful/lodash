const _ = {
  clamp(num, lower, upper) {
    if (num < lower) return lower;
    else if (num > upper) return upper;
    else return num;
  },
};

// Do not write or modify code below this line.
module.exports = _;
