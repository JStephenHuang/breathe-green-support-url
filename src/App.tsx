import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AccountPage from "./pages/account-page";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/authentication",
    element: <AccountPage />,
  },
]);

const App = () => {
  return (
    <body className="h-screen">
      <RouterProvider router={router} />;
    </body>
  );
};

export default App;
