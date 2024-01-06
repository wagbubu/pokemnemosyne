const shuffle = (array) => {
  let newArr = [];
  let clicked = 0;
  while (newArr.length <= 5) {
    const index = Math.floor(Math.random * 10);
    const character = array[index];
    if (!newArr.includes(character) && (!character.clicked || clicked < 5)) {
      newArr.push(character);
      clicked += +character.clicked;
    }
  }
  return newArr;
};

export default shuffle;
