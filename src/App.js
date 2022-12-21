import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import KMS from "./components/KMS/KMS";
import Solutions from "./components/Solutions/Solutions";
import Accounts from "./components/Accounts/Accounts";
import Footer from "./components/Footer/Footer";
import Team from "./components/Home/Team/Team";
import EmployeeForm from "./components/Home/EmployeeForm/EmployeeForm";
import Response from "./components/Home/EmployeeForm/Response/Response";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/response" element={<Response />} />
          {/* <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/team" element={<Team />} />
          <Route path="/kms" element={<KMS />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/accounts" element={<Accounts />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
