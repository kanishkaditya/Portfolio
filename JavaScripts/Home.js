
var layerClass = ".right-layer";
var layer = document.querySelector(layerClass);
layer.classList.toggle("active");

const button1 = document.querySelector(".projects");
const button2 = document.querySelector(".about");

function pageRedirect(ind) {
  if(ind==1)
    window.location="https://kanishkaditya.github.io/Portfolio/Projects.html";
  else if(ind ==2 )
  window.location="https://kanishkaditya.github.io/Portfolio/About.html";
}

button1.addEventListener("click", () => {
  setTimeout("pageRedirect(1)", 1000);

  var layerClass = ".left-layer";
  var layer = document.querySelector(layerClass);
  layer.classList.toggle("active");
  
});

button2.addEventListener("click", () => {
  setTimeout("pageRedirect(2)", 1000);

  var layerClass = ".left-layer";
  var layer = document.querySelector(layerClass);
  layer.classList.toggle("active");
  
});
