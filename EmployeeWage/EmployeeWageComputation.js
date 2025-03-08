// Constants
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
const MAX_WORKING_DAYS = 10;
const MAX_WORKING_HOURS = 80;

// Helper function to get working hours
const getWorkingHours = (empType) => {
    switch (empType) {
        case 1: return FULL_TIME_HOURS; // Full-time
        case 2: return PART_TIME_HOURS; // Part-time
        default: return 0; // Absent
    }
};

// Employee Wage Calculation
let totalWage = 0;
let totalHours = 0;
let dayCounter = 0;
let dailyWageArray = [];
let dailyWageMap = new Map();

while (dayCounter < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let empType = Math.floor(Math.random() * 3);
    let workHours = getWorkingHours(empType);
    let dailyWage = workHours * WAGE_PER_HOUR;

    totalHours += workHours;
    totalWage += dailyWage;
    dayCounter++;

    dailyWageArray.push(dailyWage);
    dailyWageMap.set(dayCounter, dailyWage);
}

// (a) Calculate Total Wage
console.log("Total Wage:", totalWage);

// (b) Show the Day along with Daily Wage using Map helper function
console.log("Daily Wage Map:");
dailyWageMap.forEach((wage, day) => console.log(`Day ${day}: ${wage}`));

// (c) Show Days when Full Time wage of 160 was earned
let fullTimeDays = [...dailyWageMap].filter(([day, wage]) => wage === FULL_TIME_WAGE).map(([day]) => day);
console.log("Days when Full Time Wage was earned:", fullTimeDays);

// (d) Find the first occurrence when Full Time Wage was earned
let firstFullTimeDay = [...dailyWageMap].find(([day, wage]) => wage === FULL_TIME_WAGE)?.[0];
console.log("First Day Full Time Wage was earned:", firstFullTimeDay);

// (e) Check if Every Element of Full Time Wage is truly holding Full Time Wage
let allFullTime = dailyWageArray.every(wage => wage === FULL_TIME_WAGE);
console.log("Does every element hold Full Time Wage?:", allFullTime);

// (f) Check if there is any Part Time Wage
let hasPartTime = dailyWageArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part Time Wage?:", hasPartTime);

// (g) Find the number of days the Employee Worked
let workedDays = dailyWageArray.filter(wage => wage > 0).length;
console.log("Number of days the employee worked:", workedDays);
