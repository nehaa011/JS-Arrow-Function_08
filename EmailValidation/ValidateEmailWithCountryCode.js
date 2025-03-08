function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Example Usage (Valid Cases)
console.log(isValidEmail("abc@bridgelabz.co"));        // Valid
console.log(isValidEmail("abc.xyz@bridgelabz.com"));   // Valid
console.log(isValidEmail("abc-xyz@bridgelabz.co.in")); // Valid
console.log(isValidEmail("abc+xyz@bridgelabz.net"));   // Valid
console.log(isValidEmail("abc_xyz@bridgelabz.org"));   // Valid
console.log(isValidEmail("abc@bridgelabz.io.in"));     // Valid

// Example Usage (Invalid Cases)
console.log(isValidEmail("abc!xyz@bridgelabz.co.in")); // Invalid (contains `!`)
console.log(isValidEmail("abc@bridgelabz"));          // Invalid (missing TLD)
console.log(isValidEmail("abc..xyz@bridgelabz.com")); // Invalid (double `.` not allowed)
console.log(isValidEmail("abcxyz@bridgelabz..in"));   // Invalid (double dot in TLD)
console.log(isValidEmail("@bridgelabz.co.in"));       // Invalid (missing local part)
