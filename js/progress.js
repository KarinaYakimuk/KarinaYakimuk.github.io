
function move1() {
  var elem1 = document.getElementById("myBar1");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++; 
      elem1.style.width = width + '%'; 
      elem1.innerHTML = width * 1  + '%';
    }
  }
}

function move2() {
  var elem2 = document.getElementById("myBar2");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem2.style.width = width + '%'; 
      elem2.innerHTML = width * 1  + '%';
    }
  }
}

function move3() {
  var elem3 = document.getElementById("myBar3");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem3.style.width = width + '%'; 
      elem3.innerHTML = width * 1  + '%';
    }
  }
}

function move4() {
  var elem4 = document.getElementById("myBar4");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem4.style.width = width + '%'; 
      elem4.innerHTML = width * 1  + '%';
    }
  }
}

function move5() {
  var elem5 = document.getElementById("myBar5");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem5.style.width = width + '%'; 
      elem5.innerHTML = width * 1  + '%';
    }
  }
}

function move6() {
  var elem6 = document.getElementById("myBar6");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 45) {
      clearInterval(id);
    } else {
      width++; 
      elem6.style.width = width + '%'; 
      elem6.innerHTML = width * 1  + '%';
    }
  }
}

// move1(); 
// move2(); 
// move3(); 
// move4(); 
// move5(); 
// move6(); 