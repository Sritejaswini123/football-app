"use client"

const PlayerList = ({ players, onDelete, onEdit, onAdd }) => {
  return (
    <div>
      <h2>Player List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(player.id)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(player.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button  className="add-btn" onClick={onAdd}>Add New Player</button>
    </div>
  )
}

export default PlayerList

