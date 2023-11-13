import './App.css';
import UserList from './components/ProductList';
import Intro from './intro';
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
    <UserList users={usersData}/>
    </>
  );
}

export default App;
