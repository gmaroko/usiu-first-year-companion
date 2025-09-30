# USIU First-Year Companion (v1)
## Project Summary
This is a lightweight, static microsite built for new USIU students during Orientation Week. It provides a personalized greeting, a simple campus cost and commute estimator, and a theme toggle feature. The goal is to help students feel welcomed and informed using basic web technologies.

- **What**: A static microsite with interactive JavaScript features.
- **Why**: To support first-year students with useful tools and a friendly interface.
- **Who**: Developed for USIU Student Affairs by students using HTML5, CSS3, and vanilla JavaScript.##

## How to Run Locally (No Docker)
- Download the project as zip from [Github](https://github.com/gmaroko/usiu-first-year-companion)
- Unzip the project
- Double-click index.html in your file explorer.
- Alternatively open your terminal and run the file as below:
    ```bash
    open public/index.html
    ```

## How to Build/Run with Docker

1. Build the docker image
    ```bash
        docker build -t usiu-first-year-companion:v1 .
    ```
1. Run the container:
    ```bash
        docker run -p 8080:80 usiu-first-year-companion:v1
    ```
1.  To access the site: Open your browser and go to: [http://localhost:8080](http://localhost:8080)

## Known Limitations

- The use of prompt() for input, which is not ideal for accessibility or user experience.
- No persistent data or backend integration.

## Future Improvements
- Replace prompts with HTML forms.
- Add user authentication and profile saving.
- Improve mobile responsiveness and accessibility.

## Wireframes
## 1. Home/Greeting Screen (`wireframe_home_greeting.png`)
**Purpose:**  
Welcome the student with a personalized greeting.

**Interaction:**  
On page load, JavaScript prompts the user to enter their name.

**JavaScript Functionality:**  
- Captures the name using `prompt()`
- Displays a greeting using `innerText`
- Logs the name to the browser console

---

## 2. Estimator Screen (`wireframe_estimator.png`)
**Purpose:**  
Collect input for transport and snack budget estimation.

**Interaction:**  
JavaScript prompts the user for:
- Number of days on campus
- Cost per trip
- Snacks per day
- Price per snack

**JavaScript Functionality:**  
- Performs arithmetic calculations
- Prepares a summary of weekly transport and snack costs

---

## 3. Summary Screen (`wireframe_summary.png`)
**Purpose:**  
Display the calculated budget and optional savings tip.

**Interaction:**  
User sees a summary of their estimated weekly expenses.

**JavaScript Functionality:**  
- Displays transport and snack budget using `textContent`
- Optionally shows a 10% savings tip using percentage math