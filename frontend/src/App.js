import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";
import "./App.css";
import Register from "./pages/Register/Register";
// import Register from "./pages/Register/Register";
// import Authenticate from "./pages/Authenticate/Authenticate";
function App() {
  const isAuthenticate = true;
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/authenticate"
          element={isAuthenticate ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
