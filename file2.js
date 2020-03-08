function change () {
  var image = document.getElementById('helloworld');
  image.src = "./images/World.jpg";}
function coloring() {
  var str = "Hello, World! in tomato";
  var result = str.fontcolor("tomato");
  document.getElementById("color").innerHTML = result;}
function news(){
  var my = "added text";
  document.getElementById("thing").innerHTML = my;}