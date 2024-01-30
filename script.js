let userInput = document.getElementById("date");
let result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];
userInput.addEventListener("input", calculateAge);

function calculateAge() {
    let userDate = userInput.value;
    if (!isValidDate(userDate)) {
        result.innerHTML = "Please enter a valid date.";
        return;
    }

    let birthDate = new Date(userDate);
    let today = new Date();

    let age = calculateDateDifference(birthDate, today);

    result.innerHTML = `You are <span>${age.years}</span> Years, <span>${age.months}</span> Months, and <span>${age.days}</span> days old.`;
}

function calculateDateDifference(date1, date2) {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    if (days < 0) {
        months--;
        days += getDaysInMonth(date1.getFullYear(), date1.getMonth() + 1);
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function isValidDate(dateString) {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
