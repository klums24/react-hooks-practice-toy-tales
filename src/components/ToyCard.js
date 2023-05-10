import React from "react";

function ToyCard({name, image, likes, deleteToy, id, patchToy}) {

  async function toyDelete () {
    const deleteData = await fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    
    deleteToy(id)

  }
  async function toyPatch() {
    const patchData = await fetch (`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likes + 1})
      
    })
      const response = await patchData.json()
      patchToy(response)
  } 

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={toyPatch}>Like {"<3"}</button>
      <button className="del-btn" onClick={toyDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
