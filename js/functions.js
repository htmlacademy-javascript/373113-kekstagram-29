const checkFunction = function (checkString, specifiedLength) {

  if (checkString.length <= specifiedLength) {
      console.log(true);
  }

  else {console.log(false);}

};

checkFunction('Проверяемая строка', 20);
checkFunction('Проверяемая строка', 18);
checkFunction('Проверяемая строка', 10);


const checkPolindrom = function(string) {
  const noWhiteSpace = string.replaceAll(' ', '');
  const lengthString = noWhiteSpace.length;
  const sameLetter = 3;

  for (let i = 0; i < lengthString; i = i + 1) {

    if (noWhiteSpace[i] === noWhiteSpace[lengthString - i]) {
      sameLetter = 3;
      consol.log(noWhiteSpace);
}

else {
  sameLetter = 1;
}
}

if (sameLetter = 0) {
console.log('polygon');
}

else {
console.log('noPoligon')
}

  console.log(noWhiteSpace);
  console.log(lengthString);
}

checkPolindrom ('tot');
