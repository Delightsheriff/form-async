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
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const darkModeIcon = document.getElementById("dark-mode-icon");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

/////
darkModeToggle.addEventListener("click", () => {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode");

  // Change the image src depending on the dark mode state
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.src = "dark.svg";
  } else {
    darkModeIcon.src = "light.svg";
  }
});
