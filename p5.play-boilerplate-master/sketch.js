let osc, playing, freq, amp,dot;
var hi;


function setup() {
  let cnv = createCanvas(800,800);
  cnv.mousePressed(playOscillator);
 osc = new p5.Oscillator("triangle")
 

}

function draw() {
  background(232,54,54)
  pointGen(mouseX,mouseY);
  freq = constrain((map(mouseX, 0, 800, 100, 500)),100, 500);
  amp = constrain(map(mouseY*1.5, 800, 0, 0, 1), 0, 1);

  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);
  rect(0,200,1200,300)


  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
  stroke('white');
  strokeWeight(20);
  text("Safe Listening Zone",300,245)
  drawSprites();
}
function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}

function pointGen(XX,YY){
  if (frameCount%2 === 0 && playing === true){
    var yeet = createSprite(XX,YY,((freq/4)^amp)/1.7,((freq/4)^amp)/1.7);
    yeet.shapeColor = "black"
    if (freq <262 && freq > 246){
      yeet.shapeColor = "red";
    }
    if (freq <311 && freq > 277){
      yeet.shapeColor = "orange";
    }
    if (freq <349 && freq > 311){
      yeet.shapeColor = "yellow";
    }
    if (freq <369 && freq > 329){
      yeet.shapeColor = "green";
    }
    if (freq <415 && freq > 369){
      yeet.shapeColor = "blue";
    }
    if (freq <466 && freq > 440){
      yeet.shapeColor = "purple";
    }
    if (freq <523 && freq > 466){
      yeet.shapeColor = rgb(94,0,135);
    }
    if (freq === 523){
      yeet.shapeColor = "red";
    }
    yeet.velocityX = -5

  }
}