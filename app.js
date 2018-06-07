function cartaoValido(){
  //Perguntar qual é o número do cartão;
  var numCard = parseInt(prompt('Por favor, insira o número do seu cartão'));
  //Passar os números do cartão por um array em ordem inversa;
  function convertInArray(numCard){
    var numCardLength = numCard.length;
    var numCardInverse = [];
    for(var i = numCardLength - 1; i >= 0; i--) {
      numCardInverse.push(numCard[i]);
    }
    // var numCardArray = [];
    // for(var i = 0; i < numberLength; i++){
    //   numCardArray.push(numCard[i]);
    // }
    // return numCardArray;
    // console.log(numCardArray);
  }
  console.log(numCardInverse);
  // var numCardArray = numCard.split("|");
  // for(var i = 0; i < numCard.length; i++){
  //   numCard[i] = +parseInt(numCard[i]);
  // }
  // console.log(numberArray);
  //Aplicar a operação aos números das posições pares;
  //Somar os dígitos e novos dígitos;
  //Comprovar se o cartão é válido;
}
cartaoValido();

//Número de teste: 4000123456789010
