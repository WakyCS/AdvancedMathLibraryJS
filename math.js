(function (global) {
    function findNextInQuadratic(n, sequence) {
        let dif1_1 = sequence[1] - sequence[0];
        let dif1_2 = sequence[2] - sequence[1];

        let dif2_1 = dif1_2 - dif1_1;

        let a = dif2_1 / 2;
        let b = dif1_1 - (3 * a);
        let c = sequence[0] - b - a;

        return a * Math.pow(n, 2) + b * n + c;
    }

    // Attach functions directly to the global window object
    global.findNextInQuadratic = findNextInQuadratic;
})(window);
