function Whole(num) {
  return num % 1 != 0;
}

(function (global) {
  const functions = {
    findNthInSequence: function (n, sequence) {
      if (sequence.length < 4) {
        let isArithmetic =
          sequence[1] - sequence[0] === sequence[2] - sequence[1];
        let isGeometric =
          sequence[1] / sequence[0] === sequence[2] / sequence[1];

        if (isArithmetic) {
          let d = sequence[1] - sequence[0];
          let a1 = sequence[0];

          return a1 + (n - 1) * d;
        } else if (isGeometric) {
          let r = sequence[1] / sequence[0];
          let a1 = sequence[0];

          return a1 * Math.pow(r, n - 1);
        } else {
          let dif1_1 = sequence[1] - sequence[0];
          let dif1_2 = sequence[2] - sequence[1];

          let dif2_1 = dif1_2 - dif1_1;

          let a = dif2_1 / 2;
          let b = dif1_1 - 3 * a;
          let c = sequence[0] - b - a;

          return a * (n**2) + b * n + c;
        }
      } else {
        return null;
      }
    },

    sq: function (n) {
      return n**2;
    },

    root: function (n) {
      return Math.sqrt(n);
    },

    cube: function (n) {
      return n**3
    },

    byPi: function (n) {
      return Number((n * 3.141592653589793238462643).toFixed(2));
    },

    removeCharFromString: function (str, target) {
      return str.replace(/target/g, "");
    },

    removeNumFromInt: function (num, target) {
      let a = target.toString();
      return Number(num.toString().replace(/target/g, ""));
    },

    isWhole: function (num) {
      return num % 1 != 0;
    },

    getMedian: function (array) {
      let sorted = array.sort((a, b) => a - b);

      if (Whole(sorted.length / 2)) {
        return sorted[sorted.length / 2];
      } else {
        return (
          sorted[Math.floor(sorted.length / 2)] +
          sorted[Math.ceil(sorted.length / 2)] / 2
        );
      }
    },
  };

  for (let key in functions) {
    global[key] = functions[key];
  }
})(window);
