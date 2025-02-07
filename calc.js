function addition(){
  let first = Number(document.getElementById("first-number").value);
  let second = Number(document.getElementById("second-number").value);

  let result = first + second;
  checkNegative(result);
  document.getElementById("calculator-output").innerHTML=String(result);
}

function subtraction(){
  let first = Number(document.getElementById("first-number").value);
  let second = Number(document.getElementById("second-number").value);

  let result = first - second;
  checkNegative(result);

  document.getElementById("calculator-output").innerHTML=String(result);
}

function multiplication(){
  let first = Number(document.getElementById("first-number").value);
  let second = Number(document.getElementById("second-number").value);

  let result = first * second;
  checkNegative(result);

  document.getElementById("calculator-output").innerHTML=String(result);
}

function division(){
  let first = Number(document.getElementById("first-number").value);
  let second = Number(document.getElementById("second-number").value);

  let result = first / second;
  checkNegative(result);

  document.getElementById("calculator-output").innerHTML=String(result);
}

function power(){
  let first = Number(document.getElementById("first-number").value);
  let second = Number(document.getElementById("second-number").value);

  let current =  1;
  if (second === 0) {
    current = 1;
  } 
  else if (second > 0) {
    for (let i = 0; i < second; i++) {
      current *= first;
    }
  } 
  else {
    for (let i = 0; i < Math.abs(second); i++) {
      current /= first;
    }
  }
  checkNegative(current);

  document.getElementById("calculator-output").innerHTML=String(current);
}

function clearCalc(){
  document.getElementById("first-number").value="";
  document.getElementById("second-number").value="";
  document.getElementById("calculator-output").innerHTML="";
}

function checkNegative(x){
  let output = document.getElementById("calculator-output");
  x < 0 ? output.classList.add("negative") : output.classList.remove("negative")
}