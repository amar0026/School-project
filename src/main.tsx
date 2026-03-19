import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProgramTiming from "./Pages/ProgramTiming";
import Gallery from "./Pages/Gallery";
import Registration from "./Pages/Registration";
import AboutUsStrip from "./Pages/About";
import ContactSection from "./components/ContactUs/Contact";
// import NoticePage from "./Pages/Notice";
import AchievementsSection from "./Pages/Achivement";
import Academic2 from "./Pages/Academics";
import Fromsection from "./Pages/form";
import Facilities from "./Pages/facilities";
import Admission from "./Pages/Admission";
import Submit from "./Pages/submit";
import ScrollToTop from "./Pages/ScrollToTop";
// Layout component with conditional Navbar
const Layout = () => {
  // const location = useLocation();
  // const showNavbar = location.pathname !== "/";

  return (
    <div className="App">
      {/* {showNavbar && <Navbar />} */}
      {/* <SmoothScroll children={undefined} /> */}
      {/* <ScrollToTopButton /> */}
      {/* <ScrollToTop /> */}
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUsStrip />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "smarty-program",
        element: <ProgramTiming />,
      },
      {
        path: "academics",
        element: <Academic2 />,
      },
      {
        path: "Registration",
        element: <Registration />,
      },
      {
        path: "Achievement",
        element: <AchievementsSection />,
      },
      // {
      //   path: "Notice",
      //   element: <NoticePage />,
      // },
      {
        path: "form",
        element: <Fromsection />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "submit",
        element: <Submit />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <ContactSection />,
      },
    ],
  },
  // {
  //   path: "/banner",
  //   element: <Banner />,
  // },
]);

createRoot(document.getElementById("root")!).render(<App />);
