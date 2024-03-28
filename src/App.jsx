import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import DoctorHome from "./pages/DoctorHome";
import Schedules from "./components/Schedules";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./components/Dashboard";
import GlobalProvider from "./context/GlobalContext";
import ReceptionistHome from "./pages/ReceptionistHome";
import Billing from "./pages/Billing";
import AppointmentForm from "./components/AppointmentForm";
import PatientsHistory from "./components/PatientsHistory";
// import Patient_Detail from "./components/Patient_Detail";
import ProfileForm from "./pages/ProfileForm";
import Reciept from "./pages/Reciept";

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
        element: <PatientsHistory />,
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
        path: "patient/reciept/:id",
        element: <Reciept />,
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
