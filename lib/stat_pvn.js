function mean(arr) {
    if (arr.length === 0) return NaN;
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

function max_arr(arr) {
    if (arr.length === 0) return NaN;
    return Math.max(...arr);
}

function min_arr(arr) {
    if (arr.length === 0) return NaN;
    return Math.min(...arr);
}
