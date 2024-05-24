import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { MangeTeam } from "./pages/MangeTeam";
import { AddUser } from "./pages/AddUser";
import Calender from "./pages/Calender";
import FAQ from "./pages/FAQ";
import { Bar } from "./pages/Bar";
import { Pie } from "./pages/Pie";
import { Geo } from "./pages/Geo";
import { Dashboard } from "./pages/dashboard/Dashboard";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="manage-team" element={<MangeTeam />} />
      <Route path="add-user" element={<AddUser />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="geo" element={<Geo />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
