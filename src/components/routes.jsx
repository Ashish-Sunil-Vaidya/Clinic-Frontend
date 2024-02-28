import Dashboard from "src/components/dashboard/Dashboard";
// import { Appointments } from "src/components/dashboard/sections";
import { AppointmentForm,BillingForm, PatientForm } from "src/components/forms";
export const doctorRoutes = [
    {
        path: '/doctor/dashboard',
        component: <Dashboard />,
        name: 'Dashboard'
    },
]

export const receptionistRoutes = [
    {
        path: '/receptionist/appointments',
        // component: <Appointments />,
        // component: <Schedules />,
        name: 'appointments'
    },
    {
        path: '/receptionist/add-appointments',
        component: <AppointmentForm />,
        name: 'Patient Details'
    },
    {
        path: '/receptionist/dashboard',
        component: <BillingForm />,
        name: 'Billing',
    },
    {
        path: '/receptionist/add-patient',
        component: <PatientForm />,
        name: 'Add Patient'
    }
]