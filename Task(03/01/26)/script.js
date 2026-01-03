//MAP TOGGLE
function toggleMap() {
  document.querySelectorAll("iframe").forEach((m) => {
    m.style.display = m.style.display === "none" ? "block" : "none";
  });
}

function toggleMap() {
  document.querySelectorAll("img").forEach((m) => {
    m.style.display = m.style.display === "none" ? "block" : "none";
  });
}

function openMap() {
  // Address in JS format
  const address =
    "RTC X Rd, Chikkadpally, Himayatnagar, Hyderabad, Telangana 500020";

  // Convert address to Google Maps URL
  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  // Redirect to Google Maps
  window.open(mapURL, "_blank"); // opens in new tab
}

//TO-DO LIST

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.style.marginLeft = "10px";
    btn.onclick = () => removeTask(index);

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  if (taskInput.value.trim() === "") return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskInput.value.trim());
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function clearTasks() {
  localStorage.removeItem("tasks");
  loadTasks();
}

loadTasks();

// TIMER

let seconds = 0;
let paused = false;

setInterval(() => {
  if (!paused) {
    seconds++;

    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");

    document.querySelectorAll("#timer").forEach((timer) => {
      timer.innerText = `Time elapsed: ${h}:${m}:${s}`;
    });
  }
}, 1000);

function pauseTimer() {
  paused = !paused;
}

function resetTimer() {
  seconds = 0;
}

//CONTACT FORM VALIDATION

function saveForm(event) {
  event.preventDefault();

  // Get inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  // Error fields
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const passErr = document.getElementById("passErr");
  const formMsg = document.getElementById("formMsg");

  // Reset errors
  nameErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";
  formMsg.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameErr.textContent = "Please enter your name.";
    nameErr.style.color = "red";
    nameErr.display = "block";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailErr.textContent = "Please enter a valid email address.";
    emailErr.style.color = "red";
    emailErr.display = "block";
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    passErr.textContent = "Password must be at least 6 characters long.";
    passErr.style.color = "red";
    passErrErr.display = "block";
    isValid = false;
  }

  // If valid → save to localStorage
  if (isValid) {
    const formData = {
      name: name.value,
      email: email.value,
      password: password.value,
      message: message.value,
    };

    localStorage.setItem("contactFormData", JSON.stringify(formData));

    formMsg.textContent = "Your information is saved in this browser!";
    formMsg.style.color = "green";

    //  clear inputs after submit
    name.value = "";
    email.value = "";
    password.value = "";
    message.value = "";
  }
}

// Clear form + storage
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").value = "";

  document.getElementById("nameErr").textContent = "";
  document.getElementById("emailErr").textContent = "";
  document.getElementById("passErr").textContent = "";
  document.getElementById("formMsg").textContent = "";

  localStorage.removeItem("contactFormData");
}
