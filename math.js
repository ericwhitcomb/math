module.exports = {
    add: (x,y) => {
        return Number(x) + Number(y);
    },

    subtract: (x,y) => {
        return Number(x) - Number(y);
    },

    throwError: () => {
        throw new TypeError("Type Error");
    },
}