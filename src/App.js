import './App.css';
import UserList from './components/ProductList';
import Intro from './intro';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';

const usersData = [
  {
    "id": 1,
    "name": "Notre Dame Preparatory School",
    "type": "High School",
    "gpa": "4.51"
  },

  {
    "id": 2,
    "name": "University of Maryland (College Park)",
    "type": "Undergraduate",
    "gpa": "3.8"
  },
];
function App() {
  return (
    <>
    <Intro></Intro>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/portfolio' element={<Portfolio/>}/>
      </Routes>
      <UserList users={usersData}/>
    </Router>
    </>
  );
}

export default App;