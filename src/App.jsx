import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

// components
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
