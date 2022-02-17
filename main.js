nosex=0;
nosey=0;
rightWrist=0;
leftWrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO)
    
    canvas=createCanvas(500,500)
    canvas.position(650,250)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotresults)
}
function modelLoaded(){
    console.log("model is loaded!");
}
function gotresults(result){
    if(result.length>0){
     console.log(result);
     nosex=result[0].pose.nose.x
     nosey=result[0].pose.nose.y
     console.log("nosex= "+nosex+"nosey= "+nosey);

     rightWrist=result[0].pose.rightWrist.x;
     leftwrist=result[0].pose.leftWrist.x;
     difference=floor(leftWrist-rightWrist)
     console.log("RW= "+rightWrist+"LF= "+leftWrist+"difference= "+difference);
   
    }
}
function draw(){
    color=document.getElementById("color").value;
    text=document.getElementById("text").value
        background("lightgrey");
        textSize(difference);
        fill("red")
        stroke("red")
        text('jhbh',50,50)

}