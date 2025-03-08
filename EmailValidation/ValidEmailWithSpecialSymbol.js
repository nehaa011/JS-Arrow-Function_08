function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)?@[\w.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Example Usage
console.log(isValidEmail("abc@bridgelabz.co.in"));       // Valid
console.log(isValidEmail("abc.xyz@bridgelabz.co.in"));   // Valid
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));   // Valid
console.log(isValidEmail("abc+xyz@bridgelabz.co.in"));   // Valid
console.log(isValidEmail("abc_xyz@bridgelabz.co.in"));   // Valid

// Invalid Cases
console.log(isValidEmail("abc!xyz@bridgelabz.co.in"));   // Invalid (contains `!`)
console.log(isValidEmail("abc@bridgelabz"));            // Invalid (missing TLD)
console.log(isValidEmail("abc..xyz@bridgelabz.co.in")); // Invalid (double `.` not allowed)
console.log(isValidEmail("abcxyz@bridgelabz..in"));     // Invalid (double dot in TLD)
console.log(isValidEmail("@bridgelabz.co.in"));         // Invalid (missing local part)
