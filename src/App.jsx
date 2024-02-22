import "./App.scss";
import { WindowSizeProvider } from "./components/HelperFunctions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="app">
      <Router>
        <WindowSizeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="about"
              element={<About handleImageClick={handleImageClick} />}
            />
            <Route
              path="portfolio"
              element={
                <Portfolio
                  openModal={openModal}
                  closeModal={closeModal}
                  isModalOpen={isModalOpen}
                  handleImageClick={handleImageClick}
                />
              }
            />
            {/* <Route path="error" element={<Error />} /> */}
          </Routes>
        </WindowSizeProvider>
      </Router>
    </div>
  );
}

export default App;
