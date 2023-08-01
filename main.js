function setup(){
    canvas=createCanvas(500, 500);
  canvas.center;
  video=createCapture( VIDEO );
  video.size(550, 500);
  PoseNet=ml5.poseNet(video, modelLoaded);
  PoseNet.on("pose", gotResult)
function draw(){
    image(video, 0, 0, 350, 350 );

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function preload(){
    song = loadSound("AIIYL.mp3");
    song = loadSound("Antifragile.mp3");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log('Left Wrist X & Y = ' + leftWristX + ',' + leftWristY);
        console.log(' Right Wrist X & Y = ' + rightWristX + ',' + rightWristY);
    }
}

var song1="AIIYL.mp3"
var song2="Antifragile.mp3"