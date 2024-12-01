const userInputElement = document.getElementById("user-input");
const resultsDivElement = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

// We will compare the user input to this regex for validation

const numberValidationRegex =
  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

// This function will check if the user input is valid (it's not empty and contains the format expected in the regex)

const checkUserInput = () => {
  const userInput = userInputElement.value.trim();

  // We check if user input is empty

  if (!userInput) {
    resultsDivElement.innerHTML = alert("Please provide a phone number");
    return;
  }

  // Here, we change the resultsDivElement visibility from "hidden" to "visible" to show the user the result

  resultsDivElement.style.visibility = "visible";

  // We test the user input against our regex and show a green message if phone number is valid, red message if it's not

  if (numberValidationRegex.test(userInput)) {
    resultsDivElement.innerHTML = `<p style='color: #4cd865; font-family: "Roboto", sans-serif;'>Valid US number: ${userInput}</p>`;
  } else {
    resultsDivElement.innerHTML = `<p style='color: #dd3545; font-family: "Roboto", sans-serif;'>Invalid US number: ${userInput}</p>`;
  }
};

// We add a click event listener to the check button and pass the checkUserInput function as callback

checkBtn.addEventListener("click", checkUserInput);

// This function will clear the results div and the user input elements

const clearResultsDivAndUserInput = () => {
  resultsDivElement.innerHTML = "";
  userInputElement.value = "";
};

// Finally, we add a click event listener to the clear button and pass the clearResultsDivAndUserInput function as callback

clearBtn.addEventListener("click", clearResultsDivAndUserInput);
