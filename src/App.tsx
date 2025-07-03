import { createBrowserRouter, RouterProvider } from "react-router";

import SolarPage from "./pages/SolarPage";
import BatteryPage from "./pages/BatteryPage";
import SolarAndBatteryPage from "./pages/SolarAndBatteryPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    index: true,
    Component: SolarPage,
  },
  {
    path: "/battery",
    Component: BatteryPage,
  },
  {
    path: "/solar_and_battery",
    Component: SolarAndBatteryPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
