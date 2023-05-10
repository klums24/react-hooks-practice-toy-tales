import React, {useState} from "react";

function ToyForm({updateToys}) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleSubmit(e) {
    e.preventDefault()
    toyPost()
  }
  async function toyPost() {
    const postData = await fetch ("http://localhost:3001/toys", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    const response = await postData.json()
    updateToys(response)
  }

  function handleChange({target: {id, value}}) {
    setForm({...form, [id]: value})
  }
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          id="image"
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
