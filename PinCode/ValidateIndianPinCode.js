function isValidPinCode(pin) {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}

// Example Usage
console.log(isValidPinCode("400088")); // true
console.log(isValidPinCode("110001")); // true
console.log(isValidPinCode("000000")); // false (cannot start with 0)
console.log(isValidPinCode("1234"));   // false (only 4 digits)
console.log(isValidPinCode("1234567"));// false (7 digits)
console.log(isValidPinCode("12A456")); // false (contains letter)
