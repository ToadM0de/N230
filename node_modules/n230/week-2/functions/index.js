 function calcTriArea({base, height} = {}) {
const baseValue = base || 1;
const heightValue = height || 1;

return 0.5 * baseValue * heightValue;
}

calcTriArea.props = { base: 1, height: 1};

function calcSquareArea(length, width) {
    return length * width;
}

MediaSourceHandle.exports = {
    calcTriArea,
    calcSquareArea,
};
