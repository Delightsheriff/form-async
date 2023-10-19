/// api requests
let posts;

const fetchTodos = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((postArray) => (posts = postArray));

  const todos = document.querySelector(".todos");
  posts.forEach((post) => {
    todos.innerHTML += `
        <div class="post">
        <p>${post.title}</p>
        <p>${post.body}</p>
        </div>
        `;
  });
};
fetchTodos();

//form validation
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitButton = document.getElementById("submitBtn");

const handleForm = (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email) {
    emailError.textContent = "Please enter an email";
  } else {
    emailError.textContent = ""; // Clear the error message
  }

  if (!password) {
    passwordError.textContent = "Please enter a password!";
  } else {
    passwordError.textContent = ""; // Clear the error message
  }

  if (email && password) {
    // Both fields are filled, you can submit the form or perform other actions
    console.log({ email, password });

    emailInput.value = "";
    passwordInput.value = "";
  }
};

form.addEventListener("submit", handleForm);

///Darkmode
// check for saved 'darkMode' in localStorage
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

let isDarkMode = false; // Track the current state of dark mode

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  isDarkMode = true;
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  isDarkMode = false;
};

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // Toggle dark mode
  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }

  // Toggle the dark mode icon
  if (isDarkMode) {
    darkModeIcon.src = "light.svg";
  } else {
    darkModeIcon.src = "dark.svg";
  }
});

// Set the initial dark mode state
if (isDarkMode) {
  enableDarkMode();
} else {
  disableDarkMode();
}
