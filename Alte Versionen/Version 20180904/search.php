<!doctype html>
<html lang="de">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
		<meta name="keywords" content="Zahnarzt, Zahnärzte, Zahnatztpraxis, Praxis, Berlin, Hellerdsdorf, Marzahn, Helle-Mitte, Gemeinschaftspraxis, Katrin, Kunath, Dornberger, Schmidt, Al-Hasaki, Herrmann, Implantat, Implantologie, Brücken, Prothese, Zahnschmerzen, Notfall, Notdienst, Narkosebehandlung, Narkose, Bleeching, Zahn, Zähne, Biss, Kiefer, weiße Zähne, Angstbehandlung, Schmerzpatienten, Interdisziplinäre Sprechstunden, Ästehetik, Prophylaxe, Operation, Weisheitszähne, Paradontose, Zähne Putzen, sauber, gesund, Zahnärzte in Berlin, Home">
		<meta name="descritpion" content="Herzlich Willkommen auf der Website der Zahndocs-Berlin.de. Hier werden Sie freundlich und sorgfältig vom Team betreut und behandelt." />
	  
		<title>Suchergebnis - Zahndocs-Berlin</title>
	  
		<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
		<link rel="pingback" href="http://zahndocs-berlin.de/xmlrpc.php" />
		<link rel="canonical" href="http://zahndocs-berlin.de/">
		
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
		<link rel="stylesheet" href="style/normalize.css" type="text/css" />
		<link rel="stylesheet" href="style/general-style.css" type="text/css" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		
		<script type="text/javascript">
			var gaProperty = 'UA-112741886-1';
			var disableStr = 'ga-disable-' + gaProperty;
			if (document.cookie.indexOf(disableStr + '=true') > -1) {
			window[disableStr] = true;
			}
			function gaOptout() {
			document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/';
			window[disableStr] = true;
			}
		</script>
		
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112741886-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-112741886-1', { 'anonymize_ip': true });
		</script>
		
		<script src="script/script.js" type="application/javascript" defer></script>
		<!--[if lt IE 9]>
			<script src="script/html5shiv.js"></script>
		<![endif]-->
		
		<script src="https://dr-flex.de/embed.js?medicalPracticeId=11731" defer></script>
		
		<!--
		
			Webdesign by Markus Städler, weberlin-design.de, markus.staedler@weberlin-design.de
		
		-->

	</head>
	<body>
		
		<div id="wrapper">
		
			<header id="header" >
				
				<div id="above-nav">
				
					<a class="toggle-menu" >
						<div class="bars">
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
						</div>
					</a>
				
					<div id="logo-container">
						<a href="./index.php"><img src="./images/logo.gif" alt="Logo von Zahndocs-Berlin" /></a>
					</div>
					<div id="brandarea">
						<h1>Wir sorgen für Ihr strahlendstes Lächeln!</h1>
					</div> 
					
					<a class="search">
						<i class="material-icons">search</i>
					</a>
					
					<form id="search" method="get" action="search.php">
						
						<label for="s" class="heading">Suche</label>
						<input id="s" placeholder="Zur Zeit leider nicht möglich" name="s" type="text" disabled />
						
					</form>
					
				</div>
				
				<nav id="main-nav" >
					<ul>
						<li class="li">
							<a href="index.php"><i class="material-icons">home</i>Home</a>
						</li>
						<li class="li">
							<a href="team.php" title="sub-menu-1">Das Team</a>
							<ul id="sub-menu-1" >
								<li>
									<a href="team/zahnaerzte.php">Zahnärzte</a>
								</li>
								<li>
									<a href="team/assistenz.php">Assistenz</a>
								</li>
								<li>
									<a href="team/rezeption.php">Rezeption</a>
								</li>
								<li>
									<a href="team/management.php">Management</a>
								</li>
								<li>
									<a href="team/azubis.php">Azubis</a>
								</li>
								<li>
									<a href="team/prophylaxe-assistenz.php">Prophylaxe-Assistenz</a>
								</li>
								</ul>
						</li>
						<li class="li">
							<a href="praxis.php" >Praxis</a>
						</li>
						<li class="li">
							<a href="leistungen.php" title="sub-menu-2">Leistungen</a>
							<ul id="sub-menu-2" >
								<li>
									<a href="leistungen/prophylaxe.php">Prophylaxe</a>
								</li>
								<li>
									<a href="leistungen/zahnerhaltung.php">Zahn&shy;erhaltung</a>
								</li>
								<li>
									<a href="leistungen/implantate.php">Implantate</a>
								</li>
								<li>
									<a href="leistungen/narkose.php">Narkose</a>
								</li>
							</ul>
						</li>
						<li class="li">
							<a href="notdienste.php">Notdienste</a>
						</li>
						<li class="li">
							<a href="stellenangebote.php">Stellen&shy;angebote</a>
						</li>
						<li class="li">
							<a href="kontakt.php">Kontakt</a>
						</li>
					</ul>
					
				</nav>
				
				<div id="modal"></div>
				
			</header>
			
			<main>
			
				<section>
			
				<?php

					$search_string = $_GET["s"];
					
					$counter = 0;
					
					recursive_search(getcwd());
					
					function recursive_search($dir) {
						$dir_handle = opendir($dir);
						while($file = readdir($dir_handle)) {
							if($file != "." && $file != "..") {
								if(is_dir($file)) {
									recursiveSearch($dir);
								} else if (is_file($file)) {
									
									echo "<p></p>";
									
									//$file_content = file_get_contents($file);
									
									if (stristr($file_content, $search_string) != false) {
										echo "<p><a href='" + realpath($file) + "'>" + $file + "</a></p>";
										$counter++;
									}
									
								}
							}
						}
						
						closedir($dir_handle);
					
					}
					
					if ($counter == 0) {
						echo "<p>Leider konnten wir zu Ihrer Suche keine passenden Ergebnisse finden. Bitte versuchen Sie ein anderes Wort.</p>";
					}
					
					
				?>
			
				</section>
			
				<?php include("/var/www/vhosts/zahndocs-berlin.de/httpdocs/aside.html"); ?>
				
				<a id="back-to-top">
					<i class="material-icons">arrow_upward</i>
				</a>
			
			</main>
			
			<?php include("/var/www/vhosts/zahndocs-berlin.de/httpdocs/footer.php"); ?>
		
		</div>
		
		<?php include("/var/www/vhosts/zahndocs-berlin.de/httpdocs/extensions.html"); ?>
		
	</body>
</html>