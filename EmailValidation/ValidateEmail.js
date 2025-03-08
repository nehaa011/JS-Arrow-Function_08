// Validate Email using Regex
const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?\.in$/;

/**
 * Function to validate a given email.
 * @param {string} email - The email to validate.
 * @returns {boolean} - Returns true if valid, otherwise false.
 */
const validateEmail = (email) => {
    return emailRegex.test(email)}
// Test Cases
const testCases = [
    "abc@bridgelabz.co.in",         
    "abc.xyz@bridgelabz.co.in",     
    "abc.xyz@bridgelabz.co.com.in", 
    "abc@bridgelabz.co.com.in",     
    "xyz@bridgelabz.co.in",         
    "abc@xyz.co.in",                
    "abc@bridgelabz.in",            
    "abc@bridgelabz.co",            
    "abc.@bridgelabz.co.in",        
    "abc@bridgelabz.com.in",        
];

testCases.forEach(email => {
    console.log(`Email: '${email}' -> Valid: ${validateEmail(email)}`);
});

   