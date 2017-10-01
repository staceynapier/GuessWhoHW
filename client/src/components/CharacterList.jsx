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
      gender: "",
      characters: [
        {
          name: "Kate",
          hair: "brown",
          glasses: "no",
          gender: "female"
        },
        {
          name: "Martin",
          hair: "blond",
          glasses: "yes",
          gender: "male"
        },
        {
          name: "Maggie",
          hair: "brown",
          glasses: "no",
          gender: "female"
        },
        {
          name: "Angus",
          hair: "grey",
          glasses: "yes",
          gender: "male"
        }
      ]
    // this.renderCharacter = this.renderCharacter.bind(this);
  }
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
        <Character value={this.state.characters[0]}/>
        <Character value={this.state.characters[1]}/>
        <Character value={this.state.characters[2]}/>
        <Character value={this.state.characters[3]}/>
      </section>
    )
  }

}
export default CharacterList;
