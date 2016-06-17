// Interesting fact! These are not more colorful when moving, that is an optical illusion.

// requestAnimFrame() As explained by Mr Irish: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var starfield = (function() {
  // Variables - a quantity which during a calculation is assumed to vary or be capable of varying in value
  var stars = [],
      star_density = 25,
      velocity = {x:0, y: 0},
      star_colors = ["rgba(0,0,0,.5)", "#ffe9c4", "#d4fbff"],
      stars_bg = "rgba(0,0,0,.5)",
      frame,
      star_canvas,
      star_context,
      viewport_width,
      viewport_height; 

  function initialize() {
    // Make canvas
    star_canvas = document.createElement('canvas');
    star_context = star_canvas.getContext('2d');

    // Get viewport size and resize canvas
    resize_canvas();
       
    // Draw all the stars, I decided stars come in units of 10 
    for (var i = 0; i < (star_density*10); i++) {
      var rad = Math.random() * 2;
      create_star(rad);
      // twice as many small stars as big
      var rad = Math.random();
      create_star(rad);
      create_star(rad);
    }
   
    // Put the canvas on the page
    document.body.appendChild(star_canvas);
    
    // When you press keys stuff happens 
    document.addEventListener('keydown', function(e) {
      e = e || window.event;
      // We add to the existing velocity, this dampens the speed changes and makes changing directions more gradual just like flying a real spaceship... I imagine
      if (e.keyCode == 39) {
        velocity = {
          x: velocity.x -5, 
          y: velocity.y
        };
      }
      if (e.keyCode == 37) {
        velocity = {
          x: velocity.x +5, 
          y: velocity.y
        };
      }
      if (e.keyCode == 40) {
        velocity = {
          x: velocity.x, 
          y: velocity.y -5
        };
      }
      if (e.keyCode == 38) {
        velocity = {
          x: velocity.x,
          y: velocity.y +5
        };
      }
    }, false);
    
    // Drawing our first frame starts the drawing loop
    draw_frame();

    function clear_canvas() {
      // Each frame the canvas is painted wiht semi transparent black - this gives the trail effect behind moving stars
      star_context.fillStyle=stars_bg;
      star_context.fillRect(0, 0, viewport_width, viewport_height);
      
    }

    function draw_star() {
      var s = stars.length;
      // for every star
      while(s--) {
        var star = stars[s];
        // update individual stars position
        star.update();
        // render the star to the canvas
        star.render(star_context);
      }
    }


    function create_star(rad) {
      // I don't really need a function for create_star, but reads better and easy to expand upon
      stars.push(new star(rad));
    }

    function draw_frame() {
      clear_canvas();
      // The infinate loop!
      frame = requestAnimFrame(draw_frame);
      draw_star();
    }

  }

  function resize_canvas(){
    viewport_width = window.innerWidth;
    viewport_height = window.innerHeight;
    star_canvas.width = viewport_width;
    star_canvas.height = viewport_height;
  }


  var star = function(rad) {
    
    this.alpha    = Math.round((Math.random() * 100 - 70) + 70); // Random brightness
    this.radius = rad || Math.random() * 2; // Radius
    this.color    = star_colors[Math.round(Math.random() * star_colors.length)]; // Random color from array

    this.pos = {
      // Initial random position
      x: Math.random() * viewport_width, 
      y: Math.random() * viewport_height
    };


  };

  star.prototype = {

    update: function() {

      // Depending on the radius the star will move at a differnt speed (slower where a greater perception of depth) 
      // Yes! 3 is a magic number :)
      this.pos.y += velocity.y === 0 ? velocity.y : (velocity.y / (3 - this.radius));
      this.pos.x += velocity.x === 0 ? velocity.x : (velocity.x / (3 - this.radius));
      
      // Keep the stars on the canvas
      if(this.pos.y > viewport_height){
        this.pos.y = 0;        
      } else if(this.pos.y < 0){
        this.pos.y = viewport_height;
      }
      // Keep the stars on the canvas in a different direction
      if(this.pos.x > viewport_width){
        this.pos.x = 0;        
      } else if(this.pos.x < 0){
        this.pos.x = viewport_width;        
      }
      // Dampen the velocity, ie slow down when you stop telling it to move
      velocity.x = velocity.x /1.00005;
      velocity.y = velocity.y /1.00005;
    },

    render: function(context) {
      // Draw the star at its current position
      var x = Math.round(this.pos.x),
          y = Math.round(this.pos.y);

      context.save();
      context.globalCompositeOperation = 'lighter';
      context.globalAlpha = this.alpha;      
      context.fillStyle = this.color;
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
      context.restore();
    }

  };
  
  return {
    // Always kick things off with a really cool function name!
    lets_roll: initialize
  };
  
})();

starfield.lets_roll();