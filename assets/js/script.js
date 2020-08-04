const Add4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert("Your first number is:"  + " " + first_number);
  alert("Your second number is:" + " " + second_number);
  alert("Your third number is:"  + " " + third_number);
  alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) + parseInt(second_number) + parseInt(third_number) + parseInt(fourth_number));
  alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
}

const Substract4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert("Your first number is:"  + " " + first_number);
  alert("Your second number is:" + " " + second_number);
  alert("Your third number is:"  + " " + third_number);
  alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) - parseInt(second_number) - parseInt(third_number) - parseInt(fourth_number));
  alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
}

const Multiply4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert("Your first number is:"  + " " + first_number);
  alert("Your second number is:" + " " + second_number);
  alert("Your third number is:"  + " " + third_number);
  alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) * parseInt(second_number) * parseInt(third_number) * parseInt(fourth_number));
  alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
}

const Devide4Numbers = () => {
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  alert("Your first number is:"  + " " + first_number);
  alert("Your second number is:" + " " + second_number);
  alert("Your third number is:"  + " " + third_number);
  alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number)/parseInt(second_number)/parseInt(third_number)/parseInt(fourth_number));
  alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
}