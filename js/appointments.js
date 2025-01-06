// Sample data for appointments and appointment history
const appointments = [
    { title: 'Checkup', date: '2025-01-10', time: '10:00 AM', doctor: 'Dr. Smith' },
    { title: 'Dental Cleaning', date: '2025-01-15', time: '02:00 PM', doctor: 'Dr. Johnson' }
];

const appointmentHistory = [
    { title: 'Eye Exam', date: '2024-12-01', time: '11:00 AM', doctor: 'Dr. Brown', status: 'Completed' },
    { title: 'General Checkup', date: '2024-11-20', time: '09:00 AM', doctor: 'Dr. White', status: 'Completed' }
];

// Function to get all appointments
function getAppointments() {
    return appointments;
}

// Function to get appointment history
function getAppointmentHistory() {
    return appointmentHistory;
}

// Function to display appointments on the View Appointments page
function displayAppointments() {
    const appointmentList = document.getElementById('appointmentList');
    const appointments = getAppointments();

    appointmentList.innerHTML = ''; // Clear existing content

    appointments.forEach(appointment => {
        const appointmentItem = document.createElement('div');
        appointmentItem.className = 'appointment-item';
        appointmentItem.innerHTML = `
            <h3>${appointment.title}</h3>
            <p>Date: ${appointment.date}</p>
            <p>Time: ${appointment.time}</p>
            <p>Doctor: ${appointment.doctor}</p>
        `;
        appointmentList.appendChild(appointmentItem);
    });
}

// Function to display appointment history on the Appointment History page
function displayAppointmentHistory() {
    const historyList = document.getElementById('historyList');
    const appointmentHistory = getAppointmentHistory();

    historyList.innerHTML = ''; // Clear existing content

    appointmentHistory.forEach(history => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <h3>${history.title}</h3>
            <p>Date: ${history.date}</p>
            <p>Time: ${history.time}</p>
            <p>Doctor: ${history.doctor}</p>
            <p>Status: ${history.status}</p>
        `;
        historyList.appendChild(historyItem);
    });
}

// Event listeners to load data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('appointmentList')) {
        displayAppointments();
    }

    if (document.getElementById('historyList')) {
        displayAppointmentHistory();
    }
});