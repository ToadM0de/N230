// this also works 

// // function calcTriArea({base, height} = {}) {
// const baseValue = base || 1;
// const heightValue = height || 1;

// return 0.5 * baseValue * heightValue;
// }

function calcTriArea(options = {}) {
    const { base = 1, height = 1} = options;
    return 0.5 * base * height;
}

function calcSquareArea(length, width) {
    return length * width;
}

MediaSourceHandle.exports = {
    calcTriArea,
    calcSquareArea,
};
