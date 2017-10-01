import React from 'react'
import Character from './Character'
import setCharacter from './setCharacter'

class CharacterList extends React.Component {

  constructor(props) {

    super(props),
    this.state = {
      name: "",
      hair: "",
      glasses: "",
      gender: ""
    }
    // this.renderCharacter = this.renderCharacter.bind(this);
  }

  // renderCharacter(char) {
  //   return (
  //     <Character
  //       value={this.state.characters[char]}
  //       // onClick={this.handleClick(char)}
  //     />
  //   )
  // }

  componentWillMount() {
    var randomChoice = setCharacter(this.state);
    this.setState(randomChoice);
  }

  render(){
    return(
      <section>
        {/* {this.renderCharacter(0)}
        {this.renderCharacter(1)}
        {this.renderCharacter(2)}
        {this.renderCharacter(3)} */}
      </section>
    )
  }

}
export default CharacterList;
