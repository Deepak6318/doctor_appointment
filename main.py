class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

class Appointment:
    def __init__(self, date, time, patient):
        self.date = date
        self.time = time
        self.patient = patient

class AppointmentSystem:
    def __init__(self):
        self.users = [
            {"username": "patient1", "password": "password1"},
            {"username": "patient2", "password": "password2"}
        ]
        self.appointments = []

    def book_appointment(self, date, time, patient):
        new_appointment = Appointment(date, time, patient)
        self.appointments.append(new_appointment)
        return new_appointment

    def view_appointments(self, username):
        return [appt for appt in self.appointments if appt.patient == username]

    def cancel_appointment(self, date, time, username):
        self.appointments = [appt for appt in self.appointments if not (appt.date == date and appt.time == time and appt.patient == username)]

# Example usage
system = AppointmentSystem()
system.book_appointment('2025-01-04', '10:00', 'patient1')
appointments = system.view_appointments('patient1')
print(appointments)
