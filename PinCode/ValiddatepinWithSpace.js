function isValidPinCode(pin) {
    const regex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return regex.test(pin);
}

// Example Usage
console.log(isValidPinCode("400088"));  // true
console.log(isValidPinCode("400 088")); // true
console.log(isValidPinCode("110001"));  // true
console.log(isValidPinCode("110 001"));// true
console.log(isValidPinCode("000088"));  // false (cannot start with 0)
console.log(isValidPinCode("4000 88")); // false (incorrect spacing)
console.log(isValidPinCode("4000888")); // false (7 digits)
console.log(isValidPinCode("40A088"));  // false (contains letter)
