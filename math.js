(function (global) {
  const functions = {
    findNthInSequence: function (n, sequence) {
      if (sequence.length < 4) {
        if (sequence[1] - sequence[0] == sequence[2] - sequence[1]) {
          let d = sequence[1] - sequence[0];
          let a1 = sequence[0];

          return a1 + (n - 1) * d;
        } else {
          let dif1_1 = sequence[1] - sequence[0];
          let dif1_2 = sequence[2] - sequence[1];

          let dif2_1 = dif1_2 - dif1_1;

          let a = dif2_1 / 2;
          let b = dif1_1 - 3 * a;
          let c = sequence[0] - b - a;

          return a * Math.pow(n, 2) + b * n + c;
        }
      } else {
        return null;
      }
    },
  };

  for (let key in functions) {
    global[key] = functions[key];
  }
})(window);
