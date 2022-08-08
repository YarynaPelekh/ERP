import { Route, Routes } from "react-router-dom";

import LogIn from "./components/Login/Login";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/Login/ForgotPassword";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
