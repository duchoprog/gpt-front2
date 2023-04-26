import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reader from "./pages/Reader";
import Library from "./pages/Library";
import Create from "./pages/Create";
import { useState } from "react";
import { StoryProvider } from "./context/StoryContext";
import Save from "./pages/Save";

function App() {
  const [story, setStory] = useState("");
  return (
    <BrowserRouter className="App">
      <StoryProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/library" element={<Library />} />
          <Route path="/save" element={<Save />} />
        </Routes>
      </StoryProvider>
    </BrowserRouter>
  );
}

export default App;
