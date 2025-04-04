"use client"

import { useState } from "react"

const AddPlayer = ({ addPlayer, onCancel }) => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [age, setAge] = useState("")

  const handleNameChange = (e) => setName(e.target.value)
  const handlePositionChange = (e) => setPosition(e.target.value)
  const handleAgeChange = (e) => setAge(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !position || !age) {
      alert("Please fill in all fields")
      return
    }

    addPlayer({
      name,
      position,
      age: Number(age),
    })

    // Reset form
    setName("")
    setPosition("")
    setAge("")
  }

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" value={position} onChange={handlePositionChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <button  className="add-btn"  type="submit">Add</button>
        <button  className="edit-btn"  type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddPlayer

