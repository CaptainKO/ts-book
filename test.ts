// function add(foo: number, bar: number, foobar? :number):number {
//     return (foo + bar + (foobar === undefined ? 1:foobar));
// }
function add(...foo: Array<number>): number {
    var result: number = 0;
    for (var i: number = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
console.log(add(2, 2));
class Counter {
    private _i : number;
    constructor() {
        this._i = 0;
    }
    get() : number {
        return this._i;
    }
    set(val : number) : void {
        this._i = val;
    }
    increment() : void {
        this._i++;
    }
}
var counter : Counter = new Counter();
console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increment();

