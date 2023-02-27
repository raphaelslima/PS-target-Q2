function handleClick() {
  var inputValue = document.getElementById("input").value;
  var result = document.getElementById("result");
  var penultimateNumber = 0;
  var lastNumber = 1;
  var number = 0;

  if (inputValue <= 2 && inputValue >= 0) {
    result.style.color = "blue";
    number = `Valor ${inputValue} pertence à sequência`;
    return (result.innerHTML = number);
  }

  if (inputValue < 0 || inputValue % parseInt(inputValue) != 0) {
    number = `Valor ${inputValue} não pertence à sequência`;
    result.style.color = "red";
    return (result.innerHTML = number);
  }

  while (inputValue > number) {
    number = lastNumber + penultimateNumber;
    penultimateNumber = lastNumber;
    lastNumber = number;

    if (inputValue == number) {
      result.style.color = "blue";
      number = `Valor ${inputValue} pertence à sequência`;
      return (result.innerHTML = number);
    }
  }

  number = `Valor ${inputValue} não pertence à sequência`;
  result.style.color = "red";
  return (result.innerHTML = number);
}
