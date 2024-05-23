import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
