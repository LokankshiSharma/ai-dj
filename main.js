var song1 = "";
var song2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var leftWscore = 0;
var rightWscore = 0;

function setup(){
        canvas = createCanvas(600, 500);
	  canvas.center();
	  video = createCapture(VIDEO);
	  video.hide();
	  poseNet = ml5.poseNet(video, modelLoaded);
	  poseNet.on('pose', gotPoses);
    
}
function preload(){
      song1 = loadSound("AIIYL.mp3");
      song2 = loadSound("Antifragile.mp3");
}

function play(){
      song1.play();
      song1.setVolume(1);

}

function draw(){
      image (video, 0, 0, 600, 500);
      fill('red');
      stroke('white');
      if (leftWscore > 0.2){
      circle (leftWristX, leftWristY, 20)
      song1.play();   
      }
}
    

function modelLoaded(){
    console.log('PoseNet is initialized')
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
        leftWscore = results[0].pose.keypoints[9].score;
        rightWscore = results[0].pose.keypoints[10].score;
        console.log('Right Wrist Score: ' + rightWscore + ' Left Wrist Score: ' + leftWscore);
    }
}

