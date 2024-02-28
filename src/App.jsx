import {
  doctorRoutes,
  receptionistRoutes,
} from "./components/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login role="Login" navlinks={doctorRoutes} />}
        />
        {doctorRoutes.map(({ path, component }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <Home
                  role="Doctor"
                  navlinks={doctorRoutes}
                  component={component}
                />
              }
            />
          );
        })}
        {receptionistRoutes.map(({ path, component }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <Home
                  role="Receptionist"
                  navlinks={receptionistRoutes}
                  component={component}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
