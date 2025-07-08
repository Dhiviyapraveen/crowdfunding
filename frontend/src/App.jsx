import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/functionalcomponent/Home';
import Projects from './components/functionalcomponent/Projects';
import FundPage from './components/functionalcomponent/FundPage';
import Login from './components/functionalcomponent/Login'; 
import Contact from './components/functionalcomponent/Contact';
import FundGuide from "./components/functionalcomponent/FundGuide";
import Register from "./components/functionalcomponent/Register";
import { AuthProvider } from "./components/functionalcomponent/AuthContext";
import AmbassadorPage from "./components/functionalcomponent/AmbassadorPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/fund/:id" element={<FundPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/fund" element={<FundGuide />} />
          <Route path="/ambassador" element={<AmbassadorPage />} />
        </Routes>
        <ToastContainer position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;
