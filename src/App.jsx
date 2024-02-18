import "./App.scss";
import { WindowSizeProvider } from "./components/HelperFunctions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div className="app">
      <Router>
        <WindowSizeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        </WindowSizeProvider>
      </Router>
    </div>
  );
}

export default App;
