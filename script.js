mainDiv = null
width = window.innerWidth
height = window.innerHeight
starDensity = 500 //number of stars per 1000 x 1000px
sMin = 1
sMax = 5

dt = 0;
lastTime = 0;

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
update()
console.log("hi")