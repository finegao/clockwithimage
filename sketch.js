var myImage;
var state = true;

function preload(){
    myImage = loadImage("images/flamingo.jpg");
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    
    
}

function draw() {
    translate(0, -1 * (height / 15));
    backgroundImage(myImage);
    fill("#2B9EB3");
    textSize(height / 3);
    textAlign(CENTER);
    textFont("Reenie Beanie");
    text(hour(), width / 2, height / 3);

    text(minute(), width / 2, height / 3 * 2);

    text(second(), width / 2, height);
    

    // image
    
    // if (state == true) {
    //     var poxX = random(0, width);
    //     var poxY = random(0, height);

    //     var myColor = get(poxX, poxY);

    //     fill(myColor);
    //     noStroke();
    //     ellipse(poxX, poxY, 5, 5);
    // }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    if (state == true) {
        state == false;
    } else {
        state == true;
    }
}

function backgroundImage(myImage) {
    
    var x = 0;
    var y = 0;
    var w = windowWidth;
    var h = windowHeight;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = myImage.width,
        ih = myImage.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(myImage, cx, cy, cw, ch,  x, y, w, h+50);
    myImage.filter("gray");
}
