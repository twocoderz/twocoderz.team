import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import WorkPage from "./pages/work/WorkPage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ContactPage from "./pages/contact/ContactPage";
import ProcessPage from "./pages/process/ProcessPage";
import SubscribePage from "./pages/subscribe/SubscribePage";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.WORK} element={<WorkPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROCESS} element={<ProcessPage />} />
        <Route path={ROUTES.SUBSCRIBE} element={<SubscribePage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
