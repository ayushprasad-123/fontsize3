rx=ry=0;
function setup(){
    vid=createCapture(VIDEO);
    vid.size(500,500)
    vid.position(100,100);
    can=createCanvas(600,600);
    can.position(800,150);
    modl=ml5.poseNet(vid, onLoad);
    modl.on('pose', onRes);
}
function draw(){
    background("#d8d8d8");
   // fill("red");
   fill(50);
   text("Shubada Ma'am",rx,ry);
 //   text("Hello World", 10, 10, 70, 80);
}
function onLoad(){console.log("Model Loaded");}
function onRes(results){
    console.log(results);
    rx=results[0].pose.rightWrist.x;
    ry=results[0].pose.rightWrist.y;
}