
import './App.css';
import { useState} from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const [characterData, setCharacterData] = useState({});


  const fetchData = () => {
      Axios.get(`https://swapi.dev/api/people/?search=${name}`)
      .then((res) => {
        const data = res.data.results;
        if (data) {
          setCharacterData({
            name: data.name,
            birthYear: data.birth_year
          });
        } else {
          // Handle the situation where the search returns no results
          alert('No character found!');
          setCharacterData({});
        }
      })
      .catch((error) => {
        // You can handle any errors here
      console.error("Error fetching data:", error);
      });
    };


  return (
    <div className="App">
        <input
          placeholder= "EX.Kang..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick = {fetchData}>prodict Age</button>
        <div>{fetchData}</div>
          <button>Generate Cat Fact!</button>
          <h1>Name:{predictedAge?.name}</h1>
          <h1>Age:{predictedAge?.age}</h1>
          <h1>color:{predictedAge?.color}</h1>
          {characterData.name && <h1>Name: {characterData.name}</h1>}
          {characterData.birthYear && <h1>Birth Year: {characterData.birthYear}</h1>}
    </div>
  );
}

export default App;
