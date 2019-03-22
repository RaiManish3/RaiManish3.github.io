let canvas = document.getElementById('starCanvas');
let context = canvas.getContext('2d');
let aboutMe = document.getElementById('aboutLink');
let dSpeed = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FRAME_RATE = 1000 / 30;

function randomColor() {
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    let a = Math.random();
    return "rgba(" + String(r) + ", " + String(g) + ", " + String(b) + ", " + String(a) + ")";
}

function Star () {
    this.loc = {
        X: Math.random()*canvas.width,
        Y: Math.random()*canvas.height
    }
    this.prevLoc = {
        X: this.X,
        Y: this.Y
    }
    this.theta = Math.atan2(this.loc.Y - canvas.height/2, this.loc.X - canvas.width/2);
    this.speed = 10
    this.color = randomColor() // can also make color more bright as it comes close
    this.radius = Math.random() * 5
    this.dr = 0.2 // increment in radius on each update
}

Star.prototype.move = function () {
    this.prevLoc.X = this.loc.X;
    this.prevLoc.Y = this.loc.Y;
    this.loc.X += this.speed * Math.cos(this.theta);
    this.loc.Y += this.speed * Math.sin(this.theta);
    this.radius += this.dr;
    this.speed += dSpeed;
}

Star.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.loc.X, this.loc.Y, this.radius, 0, 2*Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();

    /*
    // speed tail
    context.beginPath();
    context.moveTo(this.prevLoc.X, this.prevLoc.Y);
    context.lineTo(this.loc.X, this.loc.Y);
    context.strokeStyle = this.color; // blur this
    // context.lineWidth = 1;
    context.stroke();
    context.closePath();
    */
    this.move();
}

function WormHole  () {
    this.loc = {
        X: canvas.width / 2,
        Y: canvas.height / 2
    }
    this.radius = Math.random() * 5;
    this.dr = 2
    this.color = 'white'
}

WormHole.prototype = {

    move : function () {
        this.radius += this.dr
    },

    draw : function () {
        context.beginPath();
        context.arc(this.loc.X, this.loc.Y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        this.move();
    }
}

function StarField () {
    this.stars = [];
    this.nStars = 100;
    this.init();
}

StarField.prototype.init = function () {
    for (let i =0; i< this.nStars; i++) {
        this.stars.push(new Star());
    }
}

StarField.prototype.update = function () {
    this.stars.forEach(function (star, index, arr) {
        let X = star.loc.X;
        let Y = star.loc.Y;
        if (X < 0 || Y<0 || X > canvas.width || Y > canvas.height) {
            // initialize new star
            star = null;
            arr[index] = new Star();
        }
    })
}

StarField.prototype.draw = function () {
    this.stars.forEach(function (star) {
        star.draw(context);
    })
    this.update();
}

function View () {
    // class that simulates the sight sensation
    this.eyes = [0, 10, 0, 30, 0, canvas.height/2]  // 0 to 10; 10 to 0; 0 to 30 and so on
    this.topLeft = {
        X: 0,
        Y: canvas.height / 2 - this.eyes[0]
    }
    this.bottomRight = {
        X: canvas.width,
        Y: canvas.height / 2 + this.eyes[0]
    }
    this.index = 0 // index into eye array
}

View.prototype = {
}

let starField = new StarField();
let wormHole = new WormHole();
let navigate = false;

function drawCanvas() {
    if (canvas.width != window.innerWidth) canvas.width = window.innerWidth;
    if (canvas.height != window.innerHeight) canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    starField.draw();
    if (navigate) wormHole.draw();
    if (wormHole.radius >= 0.75 * canvas.width) {
        // navigate to about me page
        window.location = aboutMe.href;
    }
}


// onclick event handlers
aboutMe.onclick = function () {
    // capture intent
    navigate = true;
    dSpeed = 1;
    return false;
}

setInterval(drawCanvas, FRAME_RATE);