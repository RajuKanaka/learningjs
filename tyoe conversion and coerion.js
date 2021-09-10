console.log("type conversion");
// Type conversion.
// To String
let a = String(123);
console.log(a, typeof a);
let b = [1, 3, 4, 5];
console.log(b.toString(), typeof b);
console.log(b.toString().length, typeof b);

// to number
a = Number("121");
console.log(a, typeof a);
b = Number("a21");
console.log(b, typeof b); // NaN specifies that the given data is not a number but it is number type.
// parse int and parse float
c = parseInt("121.434");
console.log(c, typeof c);
d = Number("121.434");
console.log(d, typeof d);
console.log(d.toFixed(2), typeof d);
