var currentBrushColour = 'white';
var currentBrushSize = 20;
var colours = ['black', 'white', 'red', 'green', 'blue'];
var sizes = [20, 30, 50, 80, 120];
var toolbarSize = 50;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background("Black");
}

function draw() {
    drawToolbar();
    if (mouseIsPressed && mouseX > toolbarSize){
        fill(currentBrushColour);
        noStroke();
        ellipse(mouseX, mouseY, currentBrushSize, currentBrushSize);
    }
}

function drawToolbar(){
    let y = 0;
    
    stroke('white');
    
    for (let i = 0; i < colours.length; i++){
        fill(colours[i]);
        rect(0, y, toolbarSize, toolbarSize);
        y += toolbarSize;   
    }

    for (let i = 0; i < sizes.length; i++){
        fill('black');
        rect(0, y, toolbarSize, toolbarSize)
        let centreX = toolbarSize / 2;
        let centreY = y + toolbarSize / 2;
        let size = sizes[i] / 5;
        
        ellipse(centreX, centreY, size, size);
        y += toolbarSize;   
    }
}

function mouseClicked(){
    if (mouseX > 50){
        return;
    }
    
    let index = Math.floor(mouseY / toolbarSize);

    if (index < colours.length){
        currentBrushColour = colours[index];
        return;
    }
 
    index = index - colours.length;
    if (index < sizes.length){
        currentBrushSize = sizes[index];
        return;
    }
}