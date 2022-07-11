function preload()
{

}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    var video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    var poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses())      
    }
function modelLoaded(){
    console.log('poseNet is initialized');
    
}
function draw()
{
    image(video,0,0,300,300);
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        console.log("nose X="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
       
    }

}
