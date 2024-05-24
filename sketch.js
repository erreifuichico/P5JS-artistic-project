function setup() {
  createCanvas(600,600);
  background ("white");
}

function draw() {
  
  stroke("purple");
  fill("black");
  
  if(mouseIsPressed){
   circle(mouseX, mouseY, 200, 350);
    }
}
  
