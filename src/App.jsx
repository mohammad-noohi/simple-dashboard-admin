import "./App.css";
import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// components
import TopBar from "./components/topbar/TopBar";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <TopBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
