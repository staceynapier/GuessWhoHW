function setCharacter() {
  const characters =  [
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

  var randChar = characters[Math.floor(Math.random() * characters.length)];
  return randChar;

}

export default setCharacter;
