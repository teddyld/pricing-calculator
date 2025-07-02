import { createBrowserRouter, RouterProvider } from "react-router";

import PricingPage from "./pages/PricingPage";
import BatteryPage from "./pages/BatteryPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    index: true,
    Component: PricingPage,
  },
  {
    path: "/battery",
    Component: BatteryPage,
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
