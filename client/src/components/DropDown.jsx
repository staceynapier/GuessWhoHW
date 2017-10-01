import React from 'react'

class DropDown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      questions: [
      "Is the person female?",
      "Is the person male?",
      "Do they have grey hair?",
      "Do they have blond hair?",
      "Do they have brown hair?",
      "Are they wearing glasses?"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.askQuestion(this.state.value);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="female">{this.state.questions[0]}</option>
          <option value="male">{this.state.questions[1]}</option>
          <option value="grey">{this.state.questions[2]}</option>
          <option value="blond">{this.state.questions[3]}</option>
          <option value="brown">{this.state.questions[4]}</option>
          <option value="glasses">{this.state.questions[5]}</option>
        </select>
        <input type="submit" value="Ask"/>
      </form>
    )
  }

}

export default DropDown;
