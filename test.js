// function add(foo: number, bar: number, foobar? :number):number {
//     return (foo + bar + (foobar === undefined ? 1:foobar));
// }
function add() {
    var foo = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        foo[_a] = arguments[_a];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
console.log(add(2, 2));
var Counter = /** @class */ (function () {
    function Counter() {
        this._i = 0;
    }
    Counter.prototype.get = function () {
        return this._i;
    };
    Counter.prototype.set = function (val) {
        this._i = val;
    };
    Counter.prototype.increment = function () {
        this._i++;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increment();
