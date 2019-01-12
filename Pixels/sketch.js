let fadeFrames = 20;

function setup() {
  createCanvas(800, 600);
  
  pixelDensity(1);
}

function draw() {
  
  drawPicture();
  loadPixels();
 
  var fade = 1.0;
  if (frameCount < fadeFrames){
    fade = frameCount / fadeFrames;
  }

  //darken(fade);
  //inverse();
  adjust(1, 0.5, 0.5);
  vignette(50);

  updatePixels();
}

function drawPicture() {
  background('skyblue');

  fill('green');
  rect(0, height - 100, width, 100);

  fill('yellow')
  ellipse(100, 100, 50, 50);
}

function darken(amount){
  for (var i = 0; i < width; i++){
    for (var j = 0; j < height; j++){
      var c = getPixel(i, j);
      var cnew = [c[0] * amount, 
                  c[1] * amount, 
                  c[2] * amount];
      setPixel(i, j, cnew);
    }
  }
}

function adjust(r, g, b){
  for (var i = 0; i < width; i++){
    for (var j = 0; j < height; j++){
      var c = getPixel(i, j);
      var cnew = [c[0] * r, 
                  c[1] * g, 
                  c[2] * b];
      setPixel(i, j, cnew);
    }
  }
}

function inverse() {
  for (var i = 0; i < width; i++){
    for (var j = 0; j < height; j++){
      var c = getPixel(i, j);
     
      var cnew = [128 - (c[0] - 127), 
                  128 - (c[1] - 127), 
                  128 - (c[2] - 127)];
      setPixel(i, j, cnew);
    }
  }
}

function vignette(size) {
  for (var i = 0; i < width; i++){
    for (var j = 0; j < height; j++){
      var minToEdge = Math.min(i, width - i, 
                               j, height - j);
      var fade = 1;
      if (minToEdge < size){
        fade = minToEdge / size;
      }
      
      var c = getPixel(i, j);
     
      var cnew = [c[0] * fade, 
                  c[1] * fade, 
                  c[2] * fade];
      setPixel(i, j, cnew);
    }
  }  
}

function getPixel(x, y) {
  var loc = 4 * (x + (y * width));
  var r = pixels[loc + 0];
  var g = pixels[loc + 1];
  var b = pixels[loc + 2];

  return [r, g, b];
}

function setPixel(x, y, c) {
  var loc = 4 * (x + (y * width));
  pixels[loc + 0] = c[0];
  pixels[loc + 1] = c[1];
  pixels[loc + 2] = c[2];
}
