noseX=0;
noseY=0;

function preload(){
    Moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
video.hide();
poseNet_var=ml5.poseNet(video,modelLoaded);
poseNet_var.on('pose',gotPoses);
}
function gotPoses(results)
{
if(results.length > 0){
    console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y;
console.log(noseX,noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
 stroke(255,0,0);
image(Moustache,noseX,noseY,30,30);
   }
   function modelLoaded(){
    console.log("poseNet has been successfully loaded");
}
   function saveimage(){
    save('filterapp.png');
}