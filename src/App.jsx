import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Agence from "./pages/Agence";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
