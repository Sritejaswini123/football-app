"use client"

const DeletePlayer = ({ player, deletePlayer, onCancel }) => {
  const handleDelete = () => {
    deletePlayer(player.id)
  }

  return (
    <div>
      <h2>Delete Player</h2>
      <p>Are you sure you want to delete {player.name}?</p>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
      <button  className="edit-btn" onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default DeletePlayer

