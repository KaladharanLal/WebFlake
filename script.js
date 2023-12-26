mainDiv = null
width = window.innerWidth
height = window.innerHeight
starDensity = 500 //number of stars per 1000 x 1000px
sMin = 1
sMax = 5

dt = 0
lastTime = 0
cloudDensity = 1000
cloudAmount = 6
cMin = 300
cMax = 500
cPMin = 10
cPMax = 50
clouds = []
cloudTransp = 10
cloudDur = 120

mkStars = () =>
{
    if(mainDiv != null)
    {
        document.body.removeChild(mainDiv)
        mainDiv = null
    }
    noOfStars = starDensity*height*width/1000000
    mainDiv = document.createElement('div');
    mainDiv.classList.add("stars");
    document.body.appendChild(mainDiv);
    for(var i = 0; i < noOfStars; i++)
    {
        //var className = "star s" + toString(i+1);
        //document.body.appendChild(document.createTextNode(<div class={className}></div>));
        Div = mainDiv.appendChild(document.createElement('div'));
        Div.classList.add("star");
        Div.style.left = `${Math.floor(Math.random() * width)}px`;
        Div.style.top = `${Math.floor(Math.random() * height)}px`;
        scale = `${Math.floor(Math.random() * (sMax-sMin))+sMin}px`;
        Div.style.height = scale;
        Div.style.width = scale;
        Div.style.filter = `blur(${Math.floor(Math.random() * (scale/2))}px)`;
    }
}

mkClouds = () =>
{
    noOfClouds = Math.round(cloudAmount*height*width/1000000)
    mainDiv = document.createElement('div');
    mainDiv.classList.add("clouds");
    document.body.appendChild(mainDiv);
    for(var i=0; i<noOfClouds; i++)
    {
        clouds.push([])
    }
    clouds.forEach(cloud => {
        cloud = mainDiv.appendChild(document.createElement('div'));
        cloud.classList.add("cloud");
        cloud.style.left = `${Math.floor(Math.random() * width)}px`;
        cloud.style.top = `${Math.floor(Math.random() * height)}px`;
        scale = `${Math.floor(Math.random() * (cMax-cMin))+cMin}px`;
        cloud.style.height = scale
        cloud.style.width = scale
        cloud.style.background = "#00000000"
        cloud.style.animationName = 'slide'
        cloud.style.animationDuration = `${cloudDur}s`
        cloud.style.animationIterationCount = 'infinite'
        cloud.style.animationTimingFunction = 'linear'
        for(var i=0; i<cloudDensity; i++)
        {
            Div = cloud.appendChild(document.createElement('div'));
            Div.classList.add("cloud");
            ang = Math.random()*Math.PI*2
            Div.style.left = `${Math.floor(Math.cos(ang) * 50 * Math.random())+50}%`;
            Div.style.top = `${Math.floor(Math.sin(ang) * 50 * Math.random())+50}%`;
            Div.style.height = `${Math.floor(Math.random() * (cPMax-cPMin))+cPMin}px`;
            Div.style.width = `${Math.floor(Math.random() * (cPMax-cPMin))+cPMin}px`;
            Div.style.filter = `blur(${Math.floor(Math.random() * (scale/2))}px)`;
            Div.style.opacity = Math.random()/cloudTransp
        }
    });
}

update = () =>
{
    //Calculating delta time
    dt = Date.now() - lastTime;
    lastTime = Date.now();
    dt /= 17;

    //Detecting change in window height & width
    if(width != window.innerWidth || height != window.innerHeight)
    {
      width = window.innerWidth
      height = window.innerHeight
      mkStars()
    }

    setTimeout(update, 0);
}

mkStars()
mkClouds()
update()
console.log("hi")