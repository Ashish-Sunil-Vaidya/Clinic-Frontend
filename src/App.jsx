import {
  doctorRoutes,
  receptionistRoutes,
} from "./components/header/routes/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
