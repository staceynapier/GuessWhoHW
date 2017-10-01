import React from 'react'

class Character extends React.Component {

  render(props) {
    return(
      <button className="character-button" onClick={this.props.onClick}>
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
