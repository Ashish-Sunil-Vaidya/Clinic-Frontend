import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import DoctorHome from "./pages/DoctorHome";
import Schedules from "./components/Schedules";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import GlobalProvider from "./context/GlobalContext";
import ReceptionistHome from "./pages/ReceptionistHome";
import Billing from "./components/Billing";
import AppointmentForm from "./components/AppointmentForm";
import Patients from "./components/Patients";
import Patient_Detail from "./components/Patient_Detail";
import ProfileForm from "./components/ProfileForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/edit-profile",
    element: <ProfileForm />,
  },
  {
    path: "/user/doctor",
    element: <DoctorHome />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "schedules",
        element: <Schedules />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      
    ],
  },
  {
    path: "/user/receptionist",
    element: <ReceptionistHome />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "appointment",
        element: <AppointmentForm />,
      },
      {
        path: "all-appointments",
        element: <Schedules />,
      },
      {
        path: "patient-detail",
        element: <Patient_Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  );
}

export default App;
