import React from 'react'

class Character extends React.Component {

  render() {
    return(
    <button className="character-button">
      {this.props}
    </button>
  )}
}
export default Character;
