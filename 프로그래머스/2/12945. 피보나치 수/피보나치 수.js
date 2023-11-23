var fibonacci = function (n) {
    var result = 0;
    var share = 1234567;
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var old = 0;
    var prev = 1;
    for (var i = 2; i <= n; i++) {
        result = ((old % share) + (prev % share)) % share;
        old = prev;
        prev = result;
    }
    return result;
};
var solution = function (n) {
    var answer = fibonacci(n);
    return answer;
};