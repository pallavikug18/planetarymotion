let earthtexture;
let suntexture;
let sun;
let earth;
let xoff;
function preload(){
   earthtexture = loadImage('./images/earth.jpg');
   suntexture = loadImage('./images/sun.jpg');  
}
function setup() {
   createCanvas(640,640, WEBGL);
   sun = new Star(100, suntexture);
   earth = new Planet(40, earthtexture);
   xoff = 0;
}
function draw(){
   background(51);
   //rotateY(xoff);
   sun.show();

   // let rotX = map(sin(xoff), -1, 1, -360, 360);
   // let rotY = map(sin(xoff), -1, 1, -60, 60);
   let rotZ = map(sin(xoff), -1, 1, -160, 160);
   rotateY(xoff);
   translate(200, -100, rotZ);
   earth.show();
   
   xoff += 0.01;

}
