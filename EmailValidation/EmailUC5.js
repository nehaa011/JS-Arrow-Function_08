function isValidDomain(domain) {
    const regex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return regex.test(domain);
}

// Example Usage
console.log(isValidDomain("example.com"));       // true
console.log(isValidDomain("example.co.uk"));     // true
console.log(isValidDomain("sub.domain.org"));    // true
console.log(isValidDomain("invalid_domain"));    // false
console.log(isValidDomain("example.123"));       // false
console.log(isValidDomain("example..com"));      // false
console.log(isValidDomain("example.c"));         // false
