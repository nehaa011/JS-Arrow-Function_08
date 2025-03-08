const pinRegex = /^[1-9][0-9]{5}$/;

// Test cases
console.log(pinRegex.test("400088"));  
console.log(pinRegex.test("A400088"));
console.log(pinRegex.test("@400088"));
console.log(pinRegex.test("040088")); 
console.log(pinRegex.test("40008A")); 
console.log(pinRegex.test("40008@"));  
console.log(pinRegex.test("400088"));  