const generalPinRegex = /^[1-9][0-9]{5}$/;

console.log(generalPinRegex.test("400088")); 
console.log(generalPinRegex.test("000123")); 
console.log(generalPinRegex.test("98765")); 
console.log(generalPinRegex.test("1234567"));
