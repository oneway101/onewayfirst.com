function Starfield() {
  this.fps = 30;
  this.canvas = null;
  this.width = 0;
  this.height = 0;
  this.minVelocity = -30;
  this.maxVelocity = -60;
  this.stars = 100;
  this.intervalId = 0;
}

Starfield.prototype.initialize = function(div){
  var self = this;

  this.starfieldDiv = div
  self.width = window.innerWidth;
  self.height = window.innerHeight;

  window.addEventListener('resize',function resize(event){
    self.width = window.innerWidth;
    self.height = window.innerHeight;
    self.canvas.width = self.width;
    self.canvas.height = self.height;
    self.draw();
  });

  //create canvas
  var canvas = document.createElement('canvas');
  div.appendChild(canvas);
  this.canvas = canvas;
  this.canvas.width = this.width;
  this.canvas.height = this.height;

};

Starfield.prototype.start = function() {

  //  Create the stars.
  var stars = [];
  for (var i = 0; i < this.stars; i++){
    stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
     (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
  }
  this.stars = stars;
  var self = this;
  //  Start the timer.
  this.intervalId = setInterval(function() {
    self.update();
    self.draw();  
  }, 1000 / this.fps);
};

Starfield.prototype.stop = function() {
  clearInterval(this.intervalId);
};

Starfield.prototype.update = function() {
    var dt = 1 / this.fps;
    for(var i = 0; i < this.stars.length; i++) {
        var star = this.stars[i];
        star.y += dt * star.velocity;
        //console.log("star.y: "+star.y);
        //  If the star has moved from the bottom of the screen, spawn it at the top.
        if(star.y < 0) {
          this.stars[i] = new Star(Math.random()*this.width, this.height, Math.random()*3+1, 
          (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
        }
    }
};

Starfield.prototype.draw = function() {
    
    //  Get the drawing context.
    var ctx = this.canvas.getContext("2d");
 
    // Draw the background.
    var gradient = ctx.createLinearGradient(-this.width,0,this.width,0);
    gradient.addColorStop(1,"#ffffff");
    gradient.addColorStop(0,"#ECE9E6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);
    /*var background = new Image();
    background.src = '../assets/img/galaxy-1.jpg'
    ctx.drawImage(background, 0, 0, this.width, this.height);*/
 
    //  Draw stars.
    var starColors = ['rgba(0, 201, 246, 0.75)','rgba(0,242,246,0.75)'];
    for(var i=0; i<this.stars.length;i++) {
        var star = this.stars[i];
        //ctx.fillStyle = starColors[Math.floor(Math.random() * 2)];
        ctx.fillStyle = 'rgba(254, 64, 31, 0.8)';
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
};

function Star(x, y, size, velocity) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.velocity = velocity;
}

var starfieldDiv = document.getElementById('starfield');
var starfield = new Starfield();
starfield.initialize(starfieldDiv);
starfield.start();


