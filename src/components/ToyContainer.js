import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, patchToy}) {
  


  return (
    <div id="toy-collection">
      {toys.map((toy) => {return<ToyCard {...toy} key={toy.id} deleteToy={deleteToy} patchToy={patchToy}/>})}

    </div>
  );
}

export default ToyContainer;
