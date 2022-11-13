leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;
input = ""; 
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,100);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}



function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}
function p(){
    input = document.getElementById("input_id").value;
}
function draw(){
    background("lightseagreen ");
    document.getElementById("blank").innerHTML="the Font size of the text will be  = "+difference+"px";
fill("red");
stroke("black");
textSize(difference);
text(input,50,400);

}