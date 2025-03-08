function validateEmail(email) {
    const regex = /^abc([_\+\-.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
}

// Test Cases
console.log(validateEmail("abc@bridgelabz.co"));     
console.log(validateEmail("abc.xyz@bridgelabz.co"));    // ✅ true
console.log(validateEmail("abc_xyz@bridgelabz.co"));    // ✅ true,
console.log(validateEmail("abc-xyz@bridgelabz.co"));    // ✅ true
console.log(validateEmail("abc+xyz@bridgelabz.co.in")); // ✅ true

console.log(validateEmail("abc@bridgelabz.co.in"));     // ✅ true
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // ✅ true
console.log(validateEmail("abc-xyz@bridgelabz.co.in")); // ✅ true
console.log(validateEmail("abc+xyz@bridgelabz.co.in")); // ✅ true

console.log(validateEmail("abc!xyz@bridgelabz.co.in")); // ❌ false (Invalid character `!`)
console.log(validateEmail("abc@xyz.co.in"));           // ❌ false (Must be `@bridgelabz`)
console.log(validateEmail("abc@bridgelabz.com"));      // ❌ false (Must contain `.co`)
console.log(validateEmail("xyz@bridgelabz.co.in"));    // ❌ false (Must start with `abc`)
