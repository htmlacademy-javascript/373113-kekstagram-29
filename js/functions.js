const checkFunction = function (checkString, specifiedLength) {

  if (checkString.length <= specifiedLength) {
      console.log(true);
  }

  else {console.log(false);}

};

checkFunction('Проверяемая строка', 20);
checkFunction('Проверяемая строка', 18);
checkFunction('Проверяемая строка', 10);


let checkPolindrom = function(string) {
  let noWhiteSpace = string.replaceAll(' ', '').toLowerCase();
  let lengthString = noWhiteSpace.length;
  let i = 0;
  let counterSame = 0;

  while (i < lengthString) {
    if (noWhiteSpace[i] === noWhiteSpace[lengthString - 1 - i]) {
      counterSame = counterSame + 1;
    }
    else {
      break;
    }
    i = i + 1;
  }

  if (counterSame === lengthString) {
      console.log('слово является полиндромом')
  }
  else {
      console.log('слово не полиндром')
  }
}

checkPolindrom('Кекс')
