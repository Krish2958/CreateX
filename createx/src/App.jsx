import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProblemStatements, RegistrationForm, Rules, Contact, Sponsors, SubmissionPortal, Schedule } from "./components";
import "./App.css";
import OrganisingTeam from "./components/OrganisingTeam/OrganisingTeam";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/rules-guidelines" element={<Rules />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/submission-portal" element={<SubmissionPortal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/organising-team" element={<OrganisingTeam/>} />
      </Routes>
    </Router>
  );
}

export default App;
