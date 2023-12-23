
import './App.css';
import { useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Axios from "axios";
import List from "./components/List.js"
import Click from "./components/Click.js"
import Input from "./components/Input.js"
import FetchCatFact from "./components/FetchCatFact.js"
import{Home} from "./pages/Home";
import{Menu} from "./pages/Menu";
import{Contact} from "./pages/Contact";
import{Navbar} from "./Navbar";
function App() {
  const [fruit, setFruit]=useState('banana');
  const [todos, setTodos]=useState([{text:'Learn Hooks'}]);
  const [predictedAge, setPredictedAge] = useState(null);




  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>page no found</h1>} />
        </Routes>
      </Router>
        <Click/>
        <Input/>
        <button >Predict Age</button>
        <FetchCatFact/>
        <List />

    </div>
  );
}

export default App;
