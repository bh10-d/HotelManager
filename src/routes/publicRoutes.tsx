import { createBrowserRouter } from "react-router";
import App from "../App";
// import NavBar from '../components/layout/Navbar/Navbar.tsx'
import RootLayout from "./RootLayout.tsx";
import ErrorPage from "../pages/404/404.tsx";

const Test = ()=>{
  return <h1>?????????</h1>
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Test
      },
      {
        path:"/manageroom",
        Component: App
      },
      {
        path:"/404",
        Component: ErrorPage
      }
    ]
  },
]);

export default router;