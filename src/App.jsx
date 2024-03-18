import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import DoctorHome from "./pages/DoctorHome";
import PatientsHistory from "./components/PatientsHistory";
import Schedules from "./components/Schedules";
import Dashboard from "./components/Dashboard";
import GlobalProvider from "./context/GlobalContext";
import ReceptionistHome from "./pages/ReceptionistHome";
import Billing from "./components/Billing";
import Appointment from "./components/Appointment";

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
        element: <Appointment />,
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
