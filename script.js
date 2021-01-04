function forclear() {
    document.getElementById("output").innerHTML = "0"
}

const removeZero = () => {
  var value = document.getElementById('output').innerHTML;
  if (value == '0'){
      value = ''
      document.getElementById('output').innerHTML = value;
  }
}

const perc = () => {
  var value = document.getElementById("output").innerHTML
  value = value / 100
  document.getElementById("output").innerHTML = value
}

const forDisplay = (value) => {
  removeZero()
  document.getElementById("output").innerHTML += value
}

const solve = () => {
  removeZero()
  var equation = document.getElementById("output").innerHTML
  var solved = eval(equation)
  document.getElementById('output').innerHTML = solved
}