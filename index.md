<!DOCTYPE html>
<html class="default">



 <head>
    <link rel="stylesheet" href="styles.css">
     <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon"/>
     <title>Movies Today</title>
 </head>
 
 <header>
    <h1 class="center">Movies Today</h1>
    <h3 class="center">Movies Today is here to help you pick your next movie to watch. Please feel free to browse our Top 10 Lists and use our search below to find details on a certain movie title.</h3>
 </header>


 <body class="body">
    <h3>Useful Links</h3>
    <nav>
      <a href="topMoviesLists.html">Top 10 Lists</a> <br/>
      <a href="About_Us.html">Info on the Creators</a>
    </nav>
    
    <form>
      <input type="text" id="movieTitle" placeholder="Search for a movie...">
      <button id="movieLookup" type="submit">Go!</button>
    </form><br>

    <section id="displayResult" class="searched_movie_result">
     <strong id="title"></strong><br>
     <span id="genre"></span><br>
     <span id="rated"></span><br>
     <span id="runtime"></span><br>
     <span id="metascore"></span><br><br>
     <span id="randImage"></span>
    </section>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

 </body>

 <footer>

 </footer>
 <script src="scripts/homepage.js"></script>
 <script src="scripts/fetchMovieData.js"></script>
</html>


