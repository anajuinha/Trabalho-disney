var carouselSlide = document.querySelector('.carousel-slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
let counter = 0;

let size = carouselSlide.children[0].clientWidth;
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', (number) => {
  if(window.innerWidth > 560){var number = 4}
  if(window.innerWidth < 760){var number = 1}
  size = carouselSlide.children[0].clientWidth;
  if (counter >= carouselSlide.children.length - number) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter += number;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', (teste) => {
    if(window.innerWidth > 560){var number = 4}
  if(window.innerWidth < 760){var number = 1}
  size = carouselSlide.children[0].clientWidth;
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  
  counter -= number;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('touchstart', touchStart);
carouselSlide.addEventListener('touchmove', touchMove);

function touchStart(e) {
  startX = e.touches[0].clientX;
}

function touchMove(e, teste) {
  if (!startX) return;
  const moveX = e.touches[0].clientX;
  const difference = startX - moveX;
  if (Math.abs(difference) > 50) {
    if (difference > 0) {
      nextBtn.click();
      console.log(window.innerWidth);
    } else {
      prevBtn.click();
    }
    startX = null;
  }
}

var carouselSlide1 = document.querySelector('#carousel-slide');
var prevBtn1 = document.querySelector('.prevBtn');
var nextBtn1 = document.querySelector('.nextBtn');
let counter1 = 0;

let size1 = carouselSlide1.children[0].clientWidth;
carouselSlide1.style.transform = `translateX(${-size1 * counter1}px)`;

nextBtn1.addEventListener('click', (number1) => {
  if(window.innerWidth > 560){var number1 = 4}
  if(window.innerWidth < 760){var number1 = 1}
  size1 = carouselSlide1.children[0].clientWidth;
  if (counter1 >= carouselSlide1.children.length - number1) return;
    carouselSlide1.style.transition = "transform 0.5s ease-in-out";
  counter1 += number1;
  carouselSlide1.style.transform = `translateX(${-size1 * counter1}px)`;
  console.log(size1)
});

prevBtn1.addEventListener('click', (teste1) => {
    if(window.innerWidth > 560){var number1 = 4}
  if(window.innerWidth < 760){var number1 = 1}
  size1 = carouselSlide1.children[0].clientWidth;
  if (counter1 <= 0) return;
  carouselSlide1.style.transition = "transform 0.5s ease-in-out";
  
  counter1 -= number1;
  carouselSlide1.style.transform = `translateX(${-size1 * counter1}px)`;
});

carouselSlide1.addEventListener('touchstart', touchStart1);
carouselSlide1.addEventListener('touchmove', touchMove1);

function touchStart1(evt) {
  startX1 = evt.touches[0].clientX;
}

function touchMove1(evt, teste1) {
  if (!startX1) return;
  const moveX1 = evt.touches[0].clientX;
  const difference1 = startX1 - moveX1;
  if (Math.abs(difference1) > 50) {
    if (difference1 > 0) {
      nextBtn1.click();
      console.log(window.innerWidth);
    } else {
      prevBtn1.click();
    }
    startX1 = null;
  }
}

function myfunction(check){
  var check = document.querySelector("#check").checked;
  console.log("teste");
  console.log(check);
setTimeout(() => {
    if (check==false){
  document.querySelector(".general").style.display = "none";
    }
}, 0);
  document.querySelector("#search").style.display = "none";
  setTimeout(() => {
    if (check==true){
  document.querySelector(".general").style.display = "block";
      document.querySelector("#search").style.display = "block";
    }
}, 0);
}

function myTeste() {
  if(window.innerWidth < 760){
   var element = document.querySelector(".icon");
  var element3 = document.getElementById("cancel");
  var element2 = document.querySelector(".barsearch");
   element.classList.toggle("mybar");
  element2.classList.toggle("stylebar");
  element3.classList.toggle("cancel");}
}

function gesture(){
  event.target.classList.toggle("collapsestyle");
}
var link;
function showVideo(link){
  link = event.currentTarget.title;
  console.log("https://youtu.be/" + link);
  document.querySelector(".iframe-div").style.display="block";
  document.getElementById("ytb").src = "https://www.youtube.com/embed/" + link;
}

document.querySelector(".out").addEventListener("click", (event) =>{
  document.querySelector(".iframe-div").style.display="none";
});

function resizing(){
  var x01 = window.matchMedia("(max-width: 1425px)");
  var x00 = window.matchMedia("(max-width: 1425px)");
  var x0 = window.matchMedia("(max-width: 1325px)");
  var x1 = window.matchMedia("(max-width: 1225px)");
  var x2 = window.matchMedia("(max-width: 1050px)");
  var x3 = window.matchMedia("(max-width: 930px)");
  var x4 = window.matchMedia("(max-width: 850px)");
  if(window.innerWidth > 1460){  document.querySelector(".j").style.display="none";
  }else{document.querySelector(".j").style.display="flex";
                                 
  }

  if(x01.matches){var toappend9 = document.getElementById("headerbutton9");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend9);
}else{var toappend9 = document.getElementById("headerbutton9");
      var back = document.querySelector(".main-header");
  back.append(toappend9);}
  if(x00.matches){var toappend8 = document.getElementById("headerbutton8");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend8);
}else{var toappend8 = document.getElementById("headerbutton8");
      var back = document.querySelector(".main-header");
  back.append(toappend8)}
  if(x0.matches){var toappend7 = document.getElementById("headerbutton7");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend7);
}else{var toappend7 = document.getElementById("headerbutton7");
      var back = document.querySelector(".main-header");
  back.append(toappend7)}
if(x1.matches){var toappend6 = document.getElementById("headerbutton6");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend6);
}else{var toappend6 = document.getElementById("headerbutton6");
      var back = document.querySelector(".main-header");
  back.append(toappend6)}
  if(x2.matches){var toappend5 = document.getElementById("headerbutton5");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend5);
}else{var toappend5 = document.getElementById("headerbutton5");
      var back = document.querySelector(".main-header");
  back.append(toappend5)}
  if(x3.matches){var toappend4 = document.getElementById("headerbutton4");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend4);
}else{var toappend4 = document.getElementById("headerbutton4");
      var back = document.querySelector(".main-header");
  back.append(toappend4)}
  if(x4.matches){var toappend3 = document.getElementById("headerbutton3");
  var takeappend = document.getElementById("gotappend"); takeappend.append(toappend3);
}else{var toappend3 = document.getElementById("headerbutton3");
      var back = document.querySelector(".main-header");
  back.append(toappend3);}
}


  window.addEventListener("load", function (event) {
    resizing();
  });