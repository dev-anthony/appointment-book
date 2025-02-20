// Booking Functionality
/*
const bookingForm = document.getElementById("bookingForm");
const appointmentsList = document.getElementById("appointmentsList");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById('details').value;

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = { username: user.username, service, message, date };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
  }
});

function displayAppointments() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const userAppointments = appointments.filter((appt) => appt.username === user.username);
  
    appointmentsList.innerHTML = "";
    userAppointments.forEach((appt, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <h5>Date: ${appt.date}</h5>
      <p>Service: ${appt.service}</p>
       <p>Message:${appt.message}</p> 
        <button class="delete-btn" data-index="${index}">Delete</button>`;
      appointmentsList.appendChild(div);
      div.classList.add('appointments');
      bookingForm.reset();                    

    });
  
    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        deleteAppointment(event.target.dataset.index);
      });
    });
  }
  function deleteAppointment(index) {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
    // Filter out the appointment for the logged-in user at the given index
    const userAppointments = appointments.filter((appt) => appt.username === user.username);
    userAppointments.splice(index, 1);
  
    // Update the global appointments list, keeping other users' appointments
    appointments = appointments.filter((appt) => appt.username !== user.username).concat(userAppointments);
  
    // Save back to localStorage
    localStorage.setItem("appointments", JSON.stringify(appointments));
  
    // Refresh the list
    displayAppointments();
  }
  */
  const menu = document.querySelector ('.mobile-menu');
  const sidebar = document.querySelector ('.sidebar');
  const closeMenu = document.querySelector(".close-sidebar");
  closeMenu.addEventListener('click', ()=>{
    sidebar.classList.remove('active')
  })
  
  menu.addEventListener('click', function() {
    sidebar.style.display = 'flex';
      sidebar.classList.add('active');
  });

 // Booking Functionality
const bookingForm = document.getElementById("bookingForm");
const appointmentsList = document.getElementById("appointmentsList");

// Load appointments when the page loads
document.addEventListener("DOMContentLoaded", displayAppointments);

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("details").value;

  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = { username: user.username, service, message, date };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    displayAppointments();
  }
});

function displayAppointments() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return; // Prevents errors if no user is logged in

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const userAppointments = appointments.filter((appt) => appt.username === user.username);

  appointmentsList.innerHTML = "";
  userAppointments.forEach((appt, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <label>Date:</label>
      <h5> ${appt.date}</h5>
      <label>Service:</label>
      <p> ${appt.service}</p>
      <label>Details:</label>
      <p> ${appt.message}</p> 
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    appointmentsList.appendChild(div);
    div.classList.add("appointments");
    bookingForm.reset();

    // Attach event listener to delete button
    div.querySelector(".delete-btn").addEventListener("click", () => {
      deleteAppointment(index);
    });
  });
}

function deleteAppointment(index) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Filter out the appointment for the logged-in user at the given index
  const userAppointments = appointments.filter((appt) => appt.username === user.username);
  userAppointments.splice(index, 1);

  // Update the global appointments list, keeping other users' appointments
  appointments = appointments.filter((appt) => appt.username !== user.username).concat(userAppointments);

  // Save back to localStorage
  localStorage.setItem("appointments", JSON.stringify(appointments));

  // Refresh the list
  displayAppointments();
}
