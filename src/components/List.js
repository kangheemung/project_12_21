import React from 'react';

function List({ characterData }) {
  return (
    <div>
      {characterData.map((character) => (
        <div key={character.id}>
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
