
let topImg;
  

function preload() {


  topImg = loadImage('1.jpg');
}
function setup() {

  createCanvas(1280, 640);

  
  
 // noCursor();
  

  image(topImg, 0, 0);
  
  
}

function draw() {
 


  
}



function mouseDragged() {
 
  
let a = createA( "https://www.youtube.com/embed/videoseries?si=vKooDePSWMnayzR0&amp;list=PL_TA4dmgbQ_QNalIRp_MV6F87j_HETyIM",' ..    ㅤ .. ','_self' ); a.position(252,305)

    
  
  
  
fill(255)
circle(mouseX, mouseY, 30)
fill(0)
circle(mouseX-2., mouseY, 10)
fill(255)
circle(mouseX+23, mouseY, 30)
fill(0)
circle(mouseX+20, mouseY, 10)
  
}