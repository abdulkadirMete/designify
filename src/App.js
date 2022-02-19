import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
  
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
