import React from 'react';
import { useState,useEffect} from "react";
import Axios from "axios";
function List() {
    const [characterData, setCharacterData] = useState([]);
    const fetchData = () => {
        Axios.get("https://swapi.dev/api/people")
        .then((res) => {
          console.log(res.data.results);
            setCharacterData(res.data.results);
          })
            .catch((error) => {
            console.error('There was an error!', error);
            });
        };
            // Fetch character data when the component mounts
            useEffect(() => {
              fetchData();
          }, []);
    return (
    <div>
      {characterData.map((character) => (
        <div key={character.url}>
          <h1>Name: {character.name}</h1>
          <h2>Birth Year: {character.birth_year}</h2>
          <p>hair_color: {character.hair_color}</p>
          <p>skin_color: {character.skin_color}</p>
          <p>eye_color: {character.eye_color}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
