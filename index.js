//delcaring and initizalizing to bold
const boldBtn = document.getElementById("boldbutton");
boldBtn.addEventListener("click", () => {
    if(document.body.style.fontWeight == "bold") {
        document.body.style.fontWeight = "";
    }
    else {
        //console.log("Click");
        document.body.style.fontWeight = "bold";
    }

});

//delcaring and initizalizing to change colors
//colors array to randomly choose colors for the intro background
const backgroundColors = ["#bfecf7", "#f500836b", "#868F96", "#596164", "#09203F", "#537895", "#FFECD2",
                            "#FCB69F", "#764BA2", "#667EEA", "#D4145A", "#FBB03B"];

const introContainer = document.getElementById("intro-container")
const changeColorsBtn = document.getElementById("changeintrocolors");
changeColorsBtn.addEventListener("click", () => {
    //Choosing 2 random numbers to choose the new background color
    let randomColorNumber1 = Math.floor(Math.random() * backgroundColors.length);
    //console.log(randomColorNumber1);
    let randomColorNumber2 = Math.floor(Math.random() * backgroundColors.length);
    //console.log(randomColorNumber2);
    let newBackground = `linear-gradient( to bottom right, ${backgroundColors[randomColorNumber1]} 50%,  ${backgroundColors[randomColorNumber2]} 100%)`;
    //Assigning new background color
    //console.log(newBackground);
    //console.log(document.getElementById("intro-container").style.backgroundColor);
    document.body.style.background = newBackground;
    //console.log(document.getElementById("intro-container").style.backgroundColor);
   //console.log("clicked");


});

//JS code for the SVG Canvass
var circleId = document.getElementById("circle");
var circleDraw = circleId.getContext("2d");
circleDraw.beginPath();
circleDraw.arc(95,50,40,0,2*Math.PI);
circleDraw.stroke();

circleDraw.fillStyle = "#f500836b";
circleDraw.fill();

//declaring and initializing the button for roating the SVG star
const star = document.getElementById("star");
const trans = document.getElementById("transBtn");

trans.addEventListener("click", () => {
    count = 1;

    if(circleId.style.transform == "") {
        circleId.style.transform = "scale(5, 10)";
        count++;
    }
    else {
    circleId.style.transform = `scale(${5 * count}, ${10 * count})`;
    }
    
});
