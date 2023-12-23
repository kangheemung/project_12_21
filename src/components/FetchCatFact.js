import React from 'react'
import { useState,useEffect} from "react";
import Axios from "axios";
function FetchCatFact() {
    const [catFact, setCatFact] = useState([]);
    const fetchCatFact =() => {
        Axios.get("https://catfact.ninja/fact").then((res)=>{
          setCatFact(res.data.fact);
        });
      }
      // Fetch a cat fact when the component mounts
      useEffect(() => {
        fetchCatFact();
    }, []);

  return (
    <div>
     <p><button onClick={fetchCatFact}> Generate Cat Fact </button></p>
         <p>{catFact}</p>
    </div>
  )
}

export default FetchCatFact
