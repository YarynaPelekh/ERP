import { Route, Routes } from "react-router-dom";

import LogIn from "./components/Login/Login";
import UserBlocked from "./components/Login/UserBlocked";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/block-user" element={<UserBlocked />} />
    </Routes>
  );
}

export default App;
