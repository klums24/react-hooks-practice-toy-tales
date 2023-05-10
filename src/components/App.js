import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=> {
    const getToys = async () => {
      const data = await fetch("http://localhost:3001/toys")
      const response = await data.json()
      setToys(response)
    }
    getToys()
  }, [])

  //form
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  //adding new toy to "toys"
  function updateToys(newToy){
    setToys([...toys, newToy])
  }

  //delete toy from DOM
  function deleteToy(id) {
    setToys(toys.filter((toy) => !(toy.id === id)))
    
  }

  //patch toy
  function patchToy(updatedToy) {
    setToys(toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy))
    
  }

  
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToys={updateToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}  deleteToy={deleteToy} patchToy={patchToy}/>
    </>
  );
}

export default App;
