import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import { Reports } from "./pages/Reports";
import { Participation } from "./pages/Participation";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "calendar", Component: Calendar },
      { path: "reports", Component: Reports },
      { path: "participation", Component: Participation },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
