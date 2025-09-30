// 1. Personalized Greeting
const studentName = prompt("Welcome to USIU! What's your first name?");
alert("Karibu, " + studentName + "!");
console.log("Student entered name:", studentName);

// Insert greeting into the greeting section
const greetingSection = document.getElementById("greeting-section");
greetingSection.textContent = "Hello, " + studentName + " 👋";

// 2. Estimator (basic arithmetic & types) - put results in table

function runEstimator() {
  const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
  const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
  const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
  const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

  const transportWeekly = days * costPerTrip * 2; // to & from
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;
  const save10 = totalWeekly * 0.10;
  const totalWithSavings = totalWeekly - save10;

  console.log({
    days,
    costPerTrip,
    snacksPerDay,
    snackPrice,
    transportWeekly,
    snacksWeekly,
    totalWeekly,
    totalWithSavings
  });

  const summaryHTML = `
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="text-align:left; padding: 8px; border-bottom: 1px solid #ccc;">Item</th>
        <th style="text-align:right; padding: 8px; border-bottom: 1px solid #ccc;">Amount (KSh)</th>
      </tr>
      <tr>
        <td style="padding: 8px;">Weekly Transport</td>
        <td style="padding: 8px; text-align:right;">${transportWeekly}</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Weekly Snacks</td>
        <td style="padding: 8px; text-align:right;">${snacksWeekly}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight:bold;">Total Weekly</td>
        <td style="padding: 8px; text-align:right; font-weight:bold;">${totalWeekly}</td>
      </tr>
      <tr>
        <td style="padding: 8px;">If you cut 10%</td>
        <td style="padding: 8px; text-align:right;">${Math.round(totalWithSavings)}</td>
      </tr>
    </table>
  `;

  document.getElementById("summary").innerHTML = summaryHTML;
  alert("Check your summary on the page. All details logged to console for debugging.");
}


// Attach event listener to the button
document.getElementById("runEstimator").addEventListener("click", runEstimator);

// 3. Theme Toggle (via class-based style change)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  console.log("Theme toggled. Dark mode:", document.body.classList.contains("dark-mode"));
}

// Attach event listener to the toggle button
document.getElementById("toggleTheme").addEventListener("click", toggleTheme);