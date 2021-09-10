console.log("variables");
// variables in js
// var let const ; we can assign vaules in to varibales
// var is a globally scoped declarion.
var name = `kanaka`;

console.log(name);
// best way to use variables is by using const and let
// let is block scoped.
{
  let name = "raju";
  console.log(name);
}
// const => by using const, we cannot reassign the variable and cannot alter the values.
const You_cant_change_me = 69;
console.log(You_cant_change_me);

// arrays functions like push and pop work.
const a = [12, 3, 4, 5];
a.push(55);
console.log(a); //ans:  [12, 3, 4, 5,55]
