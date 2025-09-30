
// On page load
const studentName = prompt("Welcome to USIU! What's your first name?");
alert("Karibu, " + studentName + "!");
console.log("Student entered name:", studentName);
document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";

// Triggered on button click or load
function runEstimator() {
    const days = Number(prompt("How many days per week do you come to campus ? (e.g., 3)"));
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh ? (e.g., 120)"));
    const snacksPerDay = Number(prompt("Snacks per day? (e.g.,2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh ? (e.g., 80)"));
    const transportWeekly = days * costPerTrip * 2; // to & from
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10;
    const totalWithSavings = totalWeekly - save10;
    console.log({ days, costPerTrip, snacksPerDay, snackPrice, transportWeekly, snacksWeekly, totalWeekly, totalWithSavings });
    const summary = `
        Weekly Transport: KSh ${transportWeekly}
        Weekly Snacks: KSh ${snacksWeekly}
        -------------------------------
        Weekly Total: KSh ${totalWeekly}
        If you cut 10%: KSh ${Math.round(totalWithSavings)}
        `;
    document.getElementById("summary").innerText = summary;
    alert("Check your summary on the page. All details logged to console for debugging.");
}

function toggleTheme() {
    const current = document.body.style.backgroundColor;
    document.body.style.backgroundColor = (current === "white" || current === "") ? "#111" : "white";
    document.body.style.color = (document.body.style.backgroundColor === "#111") ? "white" : "black";
    console.log("Theme toggled. Background now:", document.body.style.backgroundColor);
}