import React from 'react'
import '../App.css'

function Poster(props) {
  return (
    <div className="Poster">
      <img id='Poster' src={props.img} alt="" />

      <div className="Film-Description-Card">
        <h3 id="Film-Title">{props.title}</h3>

        <p id="Film-Description">{props.description}</p>
        <p id="Film-Description">{props.description}</p>
      </div>
    </div>
  )
}

export default Poster