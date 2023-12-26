
import './App.css';
import { useState,createContext} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Axios from "axios";
import List from "./components/List.js"
import Click from "./components/Click.js"
import Input from "./components/Input.js"
import FetchCatFact from "./components/FetchCatFact.js"
import{Home} from "./pages/Home";
import{Menu} from "./pages/Menu";
import{Contact} from "./pages/Contact";
import{Profile} from "./pages/Profile";
import{Navbar} from "./Navbar";

export const AppContext= createContext();
function App() {
  const [fruit, setFruit]=useState('banana');
  const [todos, setTodos]=useState([{text:'Learn Hooks'}]);
  const [predictedAge, setPredictedAge] = useState(null);
  const [username, setUsername] = useState("kang");
  //const [state,setState] = useState();


 //const TopComponent = () => {
   // const[state,setState] = useState();
  //return (
    //<div>
     // <MidleDomponent state={state} />
    //</div>
  //);
//};
//const MiddleComponent = (state) => {
 // return(
  //  <div>
   //   <ButtomComponet state={state}/>
    //</div>
 // );
//};
//const BottomComponent =(state)=>{
  //return <div>
    //        {state}
    //   </div>;
//};
  return (
    <div className="App">
    <AppContext.Provider value={{username,setUsername}}>
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>page no found</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
        <Click/>
        <Input/>
        <button >Predict Age</button>
        <FetchCatFact/>
        <List />

    </div>
  );
}

export default App;
