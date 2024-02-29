
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Discover from "./Pages/Discover";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <h1 className=" ">Welcome to impactify</h1>
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
        <NavigationBar />
      </Router>
    </div>
  );

}

export default App;
