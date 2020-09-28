function Add4Numbers(){
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  // alert("Your first number is:"  + " " + first_number);
  // alert("Your second number is:" + " " + second_number);
  // alert("Your third number is:"  + " " + third_number);
  // alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) + parseInt(second_number) + parseInt(third_number) + parseInt(fourth_number));
  // alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
  if(first_number > 1000){
    window.location.href = "error.html";
  }else if(second_number > 1000 && third_number > 1000 && fourth_number > 1000){
    window.location.href = "error.html";
  }
}

function Substract4Numbers(){
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  // alert("Your first number is:"  + " " + first_number);
  // alert("Your second number is:" + " " + second_number);
  // alert("Your third number is:"  + " " + third_number);
  // alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) - parseInt(second_number) - parseInt(third_number) - parseInt(fourth_number));
  // alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
  if (first_number > 1000) {
    window.location.href = "error.html";
  } else if (second_number > 1000 && third_number > 1000 && fourth_number > 1000) {
    window.location.href = "error.html";
  }
}

function Multiply4Numbers(){
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  // alert("Your first number is:"  + " " + first_number);
  // alert("Your second number is:" + " " + second_number);
  // alert("Your third number is:"  + " " + third_number);
  // alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number) * parseInt(second_number) * parseInt(third_number) * parseInt(fourth_number));
  // alert("Your result is:" + " " + result);
   document.getElementById("result").innerHTML = result;
   if (first_number > 1000) {
    window.location.href = "error.html";
   }else if (second_number > 1000 && third_number > 1000 && fourth_number > 1000) {
    window.location.href = "error.html";
  }
}

function Devide4Numbers(){
  var first_number = document.getElementById('fn').value;
  var second_number = document.getElementById('sn').value;
  var third_number = document.getElementById('tn').value;
  var fourth_number = document.getElementById('fon').value;
  // alert("Your first number is:"  + " " + first_number);
  // alert("Your second number is:" + " " + second_number);
  // alert("Your third number is:"  + " " + third_number);
  // alert("Your fourth number is:" + " " + fourth_number);
  var result = (parseInt(first_number)/parseInt(second_number)/parseInt(third_number)/parseInt(fourth_number));
  // alert("Your result is:" + " " + result);
  document.getElementById("result").innerHTML = result;
  if (first_number > 1000) {
    window.location.href = "error.html";
  } else if (second_number > 1000 && third_number > 1000 && fourth_number > 1000) {
    window.location.href = "error.html";
  }
}