const predefinedUsers = [
    { username: 'deepak', password: '1234' },
    { username: 'user2', password: 'pass2' }
];

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = predefinedUsers.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = "../html/dashboard.html";
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "../html/index.html";
}

function bookAppointment(doctor) {
    localStorage.setItem('selectedDoctor', doctor);
    window.location.href = "../html/book_appointment.html";
}

function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const list = document.getElementById('appointmentsList');
    const history = document.getElementById('historyList');
    const noAppointmentsMessage = document.getElementById('noAppointmentsMessage');
    const noHistoryMessage = document.getElementById('noHistoryMessage');
    
    if (list) {
        list.innerHTML = '';
    }
    if (history) {
        history.innerHTML = '';
    }

    if (appointments.length === 0) {
        if (noAppointmentsMessage) noAppointmentsMessage.style.display = 'block';
        if (noHistoryMessage) noHistoryMessage.style.display = 'block';
    } else {
        if (noAppointmentsMessage) noAppointmentsMessage.style.display = 'none';
        if (noHistoryMessage) noHistoryMessage.style.display = 'none';
    }

    appointments.forEach(appt => {
        const item = document.createElement('div');
        item.textContent = `Date: ${appt.date}, Time: ${appt.time}, Doctor: ${appt.doctor}, Patient: ${appt.patient}`;
        if (appt.patient === currentUser.username && list) {
            list.appendChild(item);
        }
        if (new Date(appt.date) < new Date() && appt.patient === currentUser.username && history) {
            history.appendChild(item);
        }
    });

    if (list && list.childElementCount === 0 && noAppointmentsMessage) {
        noAppointmentsMessage.style.display = 'block';
    } else if (noAppointmentsMessage) {
        noAppointmentsMessage.style.display = 'none';
    }

    if (history && history.childElementCount === 0 && noHistoryMessage) {
        noHistoryMessage.style.display = 'block';
    } else if (noHistoryMessage) {
        noHistoryMessage.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('currentUser')) {
        displayAvailableDoctors();
        displayAppointments();
    }
});

function submitAppointment(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const contact = document.getElementById('patientContact').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    const doctor = localStorage.getItem('selectedDoctor');
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.push({ name, contact, date, time, doctor });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert('Appointment booked successfully!');
    document.getElementById('bookAppointmentForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const doctor = localStorage.getItem('selectedDoctor');
    if (doctor) {
        document.getElementById('doctorInfo').textContent = `Booking appointment with ${doctor}`;
    }
});