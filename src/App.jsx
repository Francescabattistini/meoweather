import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Welcome from "./components/Welcome";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [theme, setTheme] = useState("light");
  const getTime = () => {
    setInterval(() => {
      const today = new Date();
      const hours = today.getHours();
      setTheme(hours > 19 || hours < 6 ? "dark" : "light");
    }, 5);
  };
  useState(() => {
    getTime();
    console.log(theme);
  }, []);

  return (
    <div className={theme}>
      <BrowserRouter>
        <Welcome />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/location/:location" element={<Location theme={theme} />} />
          <Route path="*" element={<ErrorPage theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
