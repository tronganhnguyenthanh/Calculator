const Add4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert(first_number);
  alert(second_number);
  alert(third_number);
  alert(fourth_number);
  var result = (parseInt(first_number) + parseInt(second_number) + parseInt(third_number) + parseInt(fourth_number));
  alert(result);
  document.getElementById("result").innerHTML = result;
}

const Substract4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert(first_number);
  alert(second_number);
  alert(third_number);
  alert(fourth_number);
  var result = (parseInt(first_number) - parseInt(second_number) - parseInt(third_number) - parseInt(fourth_number));
  alert(result);
  document.getElementById("result").innerHTML = result;
}

const Multiply4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert(first_number);
  alert(second_number);
  alert(third_number);
  alert(fourth_number);
  var result = (parseInt(first_number) * parseInt(second_number) * parseInt(third_number) * parseInt(fourth_number));
  alert(result);
  document.getElementById("result").innerHTML = result;
}

const Devide4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert(first_number);
  alert(second_number);
  alert(third_number);
  alert(fourth_number);
  var result = (parseInt(first_number)/parseInt(second_number)/parseInt(third_number)/parseInt(fourth_number));
  alert(result);
  document.getElementById("result").innerHTML = result;
}