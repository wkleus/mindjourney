import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import SelectedCourses from "./pages/SelectedCourses";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/courses" element={<SelectedCourses />} />
        <Route path="/info" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
