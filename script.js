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