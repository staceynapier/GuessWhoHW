import React from 'react'
import Character from './Character'
import DropDown from './DropDown'
import setCharacter from './setCharacter'

class CharacterList extends React.Component {

  constructor(props) {

    super(props),
    this.state = {
      name: "",
      hair: "",
      glasses: "",
      gender: "",
      value: "",
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
    }
    this.checkAttribute = this.checkAttribute.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount() {
    var randomChoice = setCharacter(this.state.characters);
    this.setState(randomChoice);
    console.log(randomChoice);
  }

  checkAttribute() {

    if(this.state.value === "female") {
      for (var i = 0; i < this.state.characters.length; i++) {
        if(this.state.characters[i].gender !== "female" && this.state.gender !== "female") {
          this.state.characters[i] = "removed"
        }
      }
    }

      if(this.state.value === "male") {
          for (var i = 0; i < this.state.characters.length; i++) {
            if(this.state.characters[i].gender !== "male" && this.state.gender !== "male") {
              this.state.characters[i] = "X"
            }
          }
        }

      if(this.state.value === "grey") {
          for (var i = 0; i < this.state.characters.length; i++) {
            if(this.state.characters[i].hair !== "grey" && this.state.hair !== "grey") {
              this.state.characters[i] = "X"
            }
          }
        }

      if(this.state.value === "blond") {
          for (var i = 0; i < this.state.characters.length; i++) {
            if(this.state.characters[i].hair !== "blond" && this.state.hair !== "blond") {
              this.state.characters[i] = "X"
            }
          }
        }

      if(this.state.value === "brown") {
          for (var i = 0; i < this.state.characters.length; i++) {
            if(this.state.characters[i].hair !== "brown" && this.state.hair !== "brown") {
            }
          }
        }

      if(this.state.value === "glasses") {
          for (var i = 0; i < this.state.characters.length; i++) {
            if(this.state.characters[i].glasses !== "yes" && this.state.glasses !== "yes") {
              this.state.characters[i] = "X"
            }

          }
        }

    }

  setValue(value) {
    this.setState({value: value})
    this.checkAttribute();
  }

  handleClick(i) {
      console.log(i);
      if (this.state.name === this.state.characters[i].name); {
        console.log("correct");
      }
    }

  render(){

    return(
      <article>
        <section>
          <Character value={this.state.characters[0]} onClick={() => this.handleClick(0)}/>
          <Character value={this.state.characters[1]} onClick={() => this.handleClick(1)}/>
          <Character value={this.state.characters[2]} onClick={() => this.handleClick(2)}/>
          <Character value={this.state.characters[3]} onClick={() => this.handleClick(3)}/>
        </section>
        <section>
          <DropDown askQuestion={this.setValue}/>
        </section>
      </article>
    )
  }

}
export default CharacterList;
