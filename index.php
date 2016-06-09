<? include 'assets/scripts/contact.php' ?>
<!DOCTYPE Html>

<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="">

	<title>Ha Na Gill - Web Developer & Designer</title>

	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/css/custom.css">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>


<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]--> 
</head>

<body>
	<nav class="navbar navbar-default navbar-fixed-top">
	  <div class="container">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">Ha Na Gill</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="navbar-collapse">
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="#bio">BIO</a></li>
	        <li><a href="#skills">SKILLS</a></li>
	        <li><a href="#portfolio">PORTFOLIO</a></li>
	        <li><a href="#resume">RESUME</a></li>
	        <li><a href="#contact">CONTACT</a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
<div id="starfield"></div>
<!-- BIO -->
<section id="bio">
	<div class="container bio-wrapper">
		<div class="profile-photo">
			<img src="assets/img/profile.jpg">
		</div>
		<div class="profile-text">
		<h2 class="big-text"><span>Hello, I am Ha Na.</span><br>
			I design and develop websites.
		</h2>
		<h3>I am a curiouos explorer... <br>
		who loves learning new things with obsessions.<br>
		I enjoy analyzing problems and think of its best possible practices.
		</h3>
		</div>
	</div><!-- .container -->
</section>
<!-- SKILLS -->
<section id="skills">
	<div class="containerx">
		<h2 class="text-center">My skillsets in a nutshell...</h2>
		<div class="container-fluid skills-wrapper">
			<div class="left-brain">
				<div class="bar"><span>HTML & CSS</span></div>
				<div class="bar"><span>Bootstrap & JQuery</span></div>
				<div class="bar"><span>AngularJS</span></div>
				<div class="bar"><span>NodeJS</span></div>
				<div class="bar"><span>Javascript</span></div>
			</div>
			<div class="walnut">
				<img src="assets/img/walnut-brain.png">
			</div>
			<div class="right-brain">
				<div class="bar"><span>Photoshop & Illustrator</span></div>
				<div class="bar"><span>3D Softwares</span></div>
				<div class="bar"><span>Motion Graphics</span></div>
				<div class="bar"><span>UI & UX Design</span></div>
				<div class="bar"><span>Drawing</span></div>
			</div>
		</div>
	</div>
	<div class="blur"></div>
</section>
<div class="break"></div>
<!-- PORTFOLIO -->
<div class="container portfolio-btn">
	<button class="btn btn-default active" id="webdev-tab">Front-end Projects</button>
	<button class="btn btn-default" id="design-tab">Design Projects</button>
</div>
<section id="portfolio" data-offset="100">
	<div class="container web-projects-wrapper">
		<div class="row web-project clearfix">
			<div class="col-md-5">
				<a href="http://todo-list-angularjs2.herokuapp.com/" alt="todo-list"><img src="assets/img/todo-preview.jpg"></a>
			</div>
			<div class="col-md-7 project-info">
				<h3>Self-Destructing Task List</h3>
				<p class="lead">To-do lists are notorious for collecting junk. Blocitoff solves the problem of to-do list clutter by automatically deleting tasks that have not been completed after seven days.</p>
				<p>Built with AngularJS, JQuery, Bootstrap, Firebase</p>
			</div>
		</div>
		<div class="row web-project clearfix">
			<div class="col-md-5">
				<a href="https://oneway-ghostchat.herokuapp.com/" alt="ghost-chat"><img src="assets/img/ghostchat-preview.jpg"></a>
			</div>
			<div class="col-md-7 project-info">
				<h3>Ghost Chat</h3>
				<p class="lead">Ghost Chat is a chat application that sends and receives messages in real time.</p>
				<p>Built with AngularJS, JQuery, Bootstrap, Firebase</p>
			</div>
		</div>
		<div class="row web-project clearfix">
			<div class="col-md-5">
				<a href="http://crystal-star.herokuapp.com/collection" alt="bloc-jams"><img src="assets/img/blocjams-preview.jpg"></a>
			</div>
			<div class="col-md-7 project-info">
				<h3>Bloc Jams</h3>
				<p class="lead">Bloc Jams is a clone of the single-page music-streaming app rdio. This is the first project I had to build with step by step guide as part of the Bloc Front-End Developer program.</p>
				<p>Built with AnuglarJS, JQuery, Bootstrap</p>
			</div>
		</div>
	</div>
	<div class="container design-projects-wrapper">
		<h1 class="text-center"><a href="http://cargocollective.com/onewayfirst">3D and Design Portfolio Website</a></h1>
	</div>
	<div class="blur"></div> 			
</section>
<!-- RESUME -->
<section id="resume">
	<div class="resume-wrapper">
		<h2 class="text-center">A static written words of what I've done.</h2>
		<button class="btn btn-info" id="resume-button">View Resume</button>
		<div class="container design-resume">
			<h3 class="lead">Experiences</h3>
			<div class="line"></div>
				<h4>Graphic/Web Design Instructor</h4>
				<span>GENY (Global Education New York)</span><span class="float-right">October 2014 - current</span>
				<ul>
					<li>Teaching Graphic Design course using softwares including Photoshop, Illustrator, InDesign, After Effects.</li>
					<li>Teaching Web Design course with HTML, CSS, Jquery, Wordpress.</li>
				</ul>
				<h4>Front-end Developer/Web Designer</h4>
				<span>Eland Kids/Who.A.U</span><span class="float-right">December 2015 - current</span>
				<ul>
					<li>Modified ecommerce CMS pre-built themes.</li>
					<li>Create and manage website banners and email contents.</li>
				</ul>
				<h4>Freelance 3D Artist</h4>
				<span>3D Modeler/3D Generalist</h4></span><span class="float-right">March 2014 - September 2014</span>
				<ul>
					<li>Built 3D low-poly game character models, weapons, assets and created texture maps.</li>
					<li>Assisted and supplemented 3D elements to a contemporary artist (Lillian F. Schwartz).</li>
				</ul>
				<h4>3D Designer</h4>
				<span>Victoria Production, NYC</span><span class="float-right">October 2013 - March 2014</span>
				<ul>
					<li>Created 3D animation short films for children geared mobile applications.</li>
				</ul>
				<div id="internships" class="h4"><a>Internships<span class="caret"></span></a></div>
				<div class="intern-lists">
					<span>Suspect, NYC</span><span class="float-right">July 2013 - August 2013</span>
					<ul>
						<li>Worked on retouching 2D elements for Burlington commercial.</li>
						<li>Responsible for 3D elements for in-house projects.</li>
					</ul>
					<span>Look Effects, NYC</span><span class="float-right">October 2012 - January 2013</span>
					<ul>
						<li>Worked on rotoscoping for TV series, prop modelings for the feature film, and hard drive deliveries.</li>
					</ul>
					<span>Shilo TV, NYC</span><span class="float-right">July 2008 - August 2008</span>
					<ul>
						<li>Worked on the 3D modeling and nCloth simulations for Marriott commercial.</li>
					</ul>
				</div>
				<h3 class="lead">Education</h3>
				<div class="line"></div>
				<h4>School of Visual Arts (B.F.A Computer Art 2012)</h4>
				<p>209 E 23rd St New York, NY 10010</p>
		</div><!-- .container -->
	</div>
</section>
<section id="contact">
	<div class="container form-wrapper">
		<h2 class="text-center">I'd love to hear from you, feel free to get in touch.</h2>
		<br>
		<form role="form" method="post" action="#contact">
		  <div class="form-group">
		    <label for="name">Name</label>
		    <input type="name" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
		    <?php echo "<p class='text-danger'>$errName</p>";?>
		  </div>
		  <div class="form-group">
		    <label for="email">Email</label>
		    <input type="email" class="form-control" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
		    <?php echo "<p class='text-danger'>$errEmail</p>";?>
		  </div>
		  <div class="form-group">
				<label for="message">Message</label>
				<textarea class="form-control" rows="6" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
				<?php echo "<p class='text-danger'>$errMessage</p>";?>
			</div>
			<div class="form-group">
				<label for="human">3 + 4 = ?</label>
				<input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
				<?php echo "<p class='text-danger'>$errHuman</p>";?>
			</div>
		  <button type="submit" class="btn btn-info" id="submit" name="submit">Send Message</button>
		  <?php echo $result; ?>
		</form>
	</div>
	<div class="blur"></div> 
</section>

<!-- FOOTER -->
<footer>
	<div class="container-fluid">
		<p>Copyright &copy 2016 Ha Na Gill</p>
	</div><!-- container -->
</footer>

	<!-- Placed at the end of the document so the pages load faster -->
	<script src="assets/scripts/jquery-2.1.4.min.js"></script>
	<script src="assets/scripts/bootstrap.min.js"></script>
	<script src="assets/scripts/main.js"></script>
	<script src="assets/scripts/starfield.js"></script>

</body>
</html>