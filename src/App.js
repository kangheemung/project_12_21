
import './App.css';
import { useState,useEffect} from "react";
import Axios from "axios";
import List from "./components/List.js"

function App() {
  const [name, setName] = useState("");
  const [count, setCount]=useState(0);
  const [fruit, setFruit]=useState('banana');
  const [todos, setTodos]=useState([{text:'Learn Hooks'}]);
  const [catFact, setCatFact] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [predictedAge, setPredictedAge] = useState(null);


useEffect(()=>{
  Axios.get("https://swapi.dev/api/people")
  .then((res) => {
    // Assuming you want to store the results array in characterData
    console.log(res.data)
    setCharacterData(res.data.results);

  })
  .catch(error => console.error("Failed to fetch characters:", error));
},[]);

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      const fetchData = () => {
        Axios.get("https://swapi.dev/api/people")
          .then((res) => {
            setCharacterData(res.data.results);
          })
          .catch(error => console.error("Error fetching character data:", error));
      };


  return (
    <div className="App">
      <p>you clicked{count}times</p>
      <button onClick={()=>setCount(count + 1)}>Click me</button>
        <input
          placeholder= "EX.Kang..."
          onChange={handleNameChange}
        />
        <div>
         <p><button onClick={fetchData}> Generate Cat Fact </button></p>
         <p>{catFact}</p>
        </div>
        <button >Predict Age</button>
        <List characterData={characterData} />

    </div>
  );
}

export default App;
