import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Sidebar from "./components/Sidebar.jsx";
import RightSidebar from "./components/RightSidebar.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <RightSidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;