# Needs Brief
## Project: USIU-A First-Year Companion

### Audience & Context

    This microsite is designed for new USIU students attending Orientation Week. 
    It serves as a welcoming digital companion, offering personalized interaction and practical tools to help students navigate their first days on campus.

### Core Jobs to Be Done


1. Personalized Greeting

    On page load, the site prompts the student to enter their name. This name is used to display a warm, personalized greeting on the page and is also logged to the browser console for verification.

1. Campus Cost/Commute Estimator

    The site includes a simple calculator that uses prompt inputs to estimate weekly expenses:
    - Transport Cost: Based on the number of days on campus and cost per trip.
    - Snack Budget: Based on snacks per day, price per snack, and days per week.
    - Savings Tip: Optionally shows how students could save 10% on their snack budget using basic percentage math. A clean summary of these estimates is displayed using innerText or textContent.

1. Theme Toggle (Day/Night)

    Users can switch between day and night themes (or apply a USIU color accent) using a button. This is implemented using document.body.style to change background colors dynamically—no external CSS frameworks are used.


### Constraints

- Only vanilla JavaScript taught in Lesson 1 is allowed.
- No external JS libraries or frameworks.
- No network calls or dynamic data fetching.
- Must run as a static site inside a Docker container.

### Success Criteria

- The site loads instantly and prompts the user once.
- All calculations are accurate and clearly displayed.
- The theme toggle works smoothly.
- The entire site is containerized and runs with simple Docker instructions.
- Code is clean, readable, and well-commented for future expansion.