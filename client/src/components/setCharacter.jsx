function setCharacter(props) {

  var randChar = props[Math.floor(Math.random() * props.length)];
  return randChar;

}

export default setCharacter;
