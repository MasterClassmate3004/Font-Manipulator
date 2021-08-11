difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 550);
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    textSize(difference);
    text('Nitya', 20, 20);
    
    background('#969A97');

    document.getElementById("square_side").innerHTML = "The size of the text = " + difference + "px";
    fill('#ff0000');
    stroke('#ff0000');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses (results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference );

    }
}

