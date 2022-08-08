import { Route, Routes } from "react-router-dom";

import LogIn from "./components/Login/Login";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/Login/ForgotPassword";
import CreatePassword from "./components/Login/CreatePassword";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-password" element={<CreatePassword />} />
    </Routes>
  );
}

export default App;
