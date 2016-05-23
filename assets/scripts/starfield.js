function Starfield() {
  this.fps = 30;
  this.canvas = null;
  this.width = 0;
  this.height = 0;
  this.minVelocity = 15;
  this.maxVelocity = 30;
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