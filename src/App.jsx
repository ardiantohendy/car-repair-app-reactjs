import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Queue from "./pages/Queue";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </Router>
  );
}

export default App;
