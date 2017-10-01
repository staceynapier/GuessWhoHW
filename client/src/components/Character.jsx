import React from 'react'

class Character extends React.Component {

  render() {
    return(
      <button className="character-button">
        <ul>
          <li>Name: {this.props.value.name}</li>
          <li>Hair Colour: {this.props.value.hair}</li>
          <li>Glasses: {this.props.value.glasses}</li>
          <li>Gender: {this.props.value.gender}</li>
        </ul>
      </button>
  )}
}
export default Character;
