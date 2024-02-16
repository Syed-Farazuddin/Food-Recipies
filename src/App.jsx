import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Favorite from "./pages/Favorite.jsx";
import Details from "./pages/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/recipies/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
