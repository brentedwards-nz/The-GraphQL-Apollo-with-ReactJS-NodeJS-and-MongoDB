import React from 'react'

const AddMovie = () => {
  return (
    <div className="addMovie">
        <form onSubmit={() => alert('Movie Added')}>
            <label>Name</label>
            <input type="text" required></input>
            <label>Genre</label>
            <input type="text" required></input>
            <label>Year</label>
            <input type="text" placeholder="(optional)"></input>
            <button type="submit">Add Movie</button>
        </form>
    </div>
  )
}

export default AddMovie;
