/*
var firstName = "Jordan";

console.log(firstName);

firstName = "Fredrick";

console.log(firstName);
*/

// Variable declared in global scope
var globalVariable = 'I am global';
const globalConstVariable = 'I am also global';// Try to access the value of globalVariable
globalVariable;
// 'I am global'globalConstVariable
// 'I am also global'
// Variable declared in local scope (function scope) example 1:
function myFunc() {
  var myLocalVariable = 'I am local';
  let myLocalLetVariable = 'I am also local';  // Try to access the value of myLocalVariable
  // from the inside of the myFunc function
  myLocalVariable;
  // 'I am local'  myLocalLetVariable
  // 'I am also local'
};// Try to access the value of myLocalVariable
// from the outside of the myFunc function
myLocalVariable;
// ReferenceError: myLocalVariable is not definedmyLocalLetVariable
// ReferenceError: myLocalVariable is not defined