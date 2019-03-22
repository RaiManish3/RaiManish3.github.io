let canvas = document.getElementById('starCanvas');
let context = canvas.getContext('2d');
let homeLink = document.getElementById('homeLink');
let dSpeed = 0;
let navigate = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FRAME_RATE = 1000 / 30;

function Sun() {
    this.loc = {
        X: canvas.width / 2,
        Y: canvas.height / 2
    }
    this.radius = 40
    this.color = 'yellow'
    this.image = null;
}

Sun.prototype = {
    move : function () {
        // in this model, we are keeping sun stationary
    },

    draw : function (context) {
        context.beginPath();
        context.arc(this.loc.X, this.loc.Y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        this.move();
    }
}

function Planet(sunLoc) {
    this.loc = {
        X: null,
        Y: null
    }
    this.center = sunLoc;
    this.planetRadius;
    // assuming circular orbits for simplicity
    this.orbitalRadius;
    this.theta = Math.random() * 2 * Math.PI;
    this.dTheta; // this is orbital theta
    this.rotationSpeed;
    this.color;
    this.image;
}

Planet.prototype = {
    move : function () {
        this.loc.X = this.center.X + this.orbitalRadius * Math.cos(this.theta)
        this.loc.Y = this.center.Y + this.orbitalRadius * Math.sin(this.theta)
        if (this.theta + this.dTheta > 2*Math.PI)
            this.theta += this.dTheta - 2 * Math.PI
        else
            this.theta += this.dTheta
    },

    draw : function (context) {
        this.move();
        context.beginPath();
        context.arc(this.loc.X, this.loc.Y, this.planetRadius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

function SolarSystem () {
    this.sun = new Sun()

    /* MERCURY */
    this.mercury = new Planet(this.sun.loc)
    this.mercury.orbitalRadius = 80
    this.mercury.dTheta = 0.1;
    this.mercury.planetRadius = 4;
    this.mercury.color = 'brown';

    /* VENUS */
    this.venus = new Planet(this.sun.loc)
    this.venus.orbitalRadius = 150
    this.venus.dTheta = 0.06;
    this.venus.planetRadius = 6;
    this.venus.color = 'pink';

    /* EARTH */
    this.earth = new Planet(this.sun.loc)
    this.earth.orbitalRadius = 200
    this.earth.dTheta = 0.04;
    this.earth.planetRadius = 6;
    this.earth.color = 'blue';

    /* ALL BODIES */
    this.system = [
        this.sun,
        this.mercury,
        this.venus,
        this.earth
    ]
}

SolarSystem.prototype = {
    draw : function (context) {
        this.system.forEach(function (body) {
            body.draw(context);
        })
    }
}

let solarSystem = new SolarSystem();

function drawCanvas() {
    if (canvas.width != window.innerWidth) canvas.width = window.innerWidth;
    if (canvas.height != window.innerHeight) canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    solarSystem.draw(context);
}


// onclick event handlers
homeLink.onclick = function () {
    // capture intent
    navigate = true;
    dSpeed = 1;
    return true;
}

setInterval(drawCanvas, FRAME_RATE);