import React from 'react'

class Character extends React.Component {

  render() {
    return(
      <button className="character-button">
        {this.props.value.name}
      </button>
  )}
}
export default Character;
