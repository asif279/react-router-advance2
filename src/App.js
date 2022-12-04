import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes,
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import NotMatch from './components/NotMatch/NotMatch';
import Postdetail from "./components/Postdetail/Postdetail";


function App() {
  return (
    <div className="App">
      <Router>
     <div className="navigateBar">
     <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
     </div>
        <Routes>
       
       
     
        <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
       <Route path="/dashboard" element={<Dashboard/>}  />
       <Route path="/" element={<Home />} />
       <Route path="*" element={<NotMatch/>}/>
       <Route path="/post/:id" element={<Postdetail/>}/>

        </Routes>
      </Router>
       
        
    </div>
  );
}

export default App;
