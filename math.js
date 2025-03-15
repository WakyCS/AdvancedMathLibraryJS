(function (global) {
    const MyLibrary = {
        functions: {},

        addFunction: function(name, fn) {
            this.functions[name] = fn;
        },

        callFunction: function(name, ...args) {
            if (this.functions[name]) {
                return this.functions[name](...args);
            } else {
                console.warn(`Function '${name}' not found.`);
            }
        },

        findNextInQuadratic: function(n, sequence) {
            let dif1_1 = sequence[1] - sequence[0];
            let dif1_2 = sequence[2] - sequence[1];

            let dif2_1 = dif1_2 - dif1_1;

            let a = dif2_1 / 2;
            let b = dif1_1 - (3 * a);
            let c = sequence[0] - b - a;

            return a * Math.pow(n, 2) + b * n + c;
        }
    };

    // Expose the library globally
    global.MyLibrary = MyLibrary;
})(window);
