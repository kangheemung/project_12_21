import React from 'react'
import { useState} from "react";
function Input() {
const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
  return (
    <div>
      <input
          placeholder= "EX.Kang..."
          onChange={handleNameChange}
        />
    </div>
  )
}

export default Input
