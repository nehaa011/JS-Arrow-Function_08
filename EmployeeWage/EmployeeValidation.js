// Employee Validation using Regex and Try-Catch

class Employee {
    constructor(id, salary, gender, date) {
        try {
            this.validateId(id);
            this.validateSalary(salary);
            this.validateGender(gender);
            this.validateDate(date);

            this.id = id;
            this.salary = salary;
            this.gender = gender;
            this.date = new Date(date);

            console.log("Employee record created successfully:", this);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    // Validate Employee ID (Non-zero Positive Number)
    validateId(id) {
        const idPattern = /^[1-9][0-9]*$/; // Positive number, not zero
        if (!idPattern.test(id)) {
            throw new Error("Invalid Employee ID. It must be a non-zero positive number.");
        }
    }

    // Validate Salary (Non-zero Positive Number)
    validateSalary(salary) {
        if (isNaN(salary) || salary <= 0) {
            throw new Error("Invalid Salary. It must be a positive number.");
        }
    }

    // Validate Gender (Only M or F)
    validateGender(gender) {
        const genderPattern = /^[MF]$/; // Only 'M' or 'F'
        if (!genderPattern.test(gender)) {
            throw new Error("Invalid Gender. It must be 'M' or 'F'.");
        }
    }

    // Validate Date (Should not be in the future)
    validateDate(date) {
        let inputDate = new Date(date);
        let today = new Date();
        if (isNaN(inputDate.getTime()) || inputDate > today) {
            throw new Error("Invalid Date. Date should not be in the future.");
        }
    }
}

// Test Cases
new Employee(101, 50000, 'M', '2024-02-15'); 
new Employee(0, 30000, 'F', '2023-06-10'); 
new Employee(102, -1000, 'M', '2024-02-15'); 
new Employee(103, 40000, 'X', '2024-02-15'); 
new Employee(104, 50000, 'F', '2030-12-01'); 
