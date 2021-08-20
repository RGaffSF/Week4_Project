document.getElementById('genreLookup').addEventListener('click', function (event) {
  event.preventDefault();

  let movieGenre = document.getElementById('PickedGenre').value

  if (movieGenre === "") {
    window.alert('Please select a genre!')
  } else {
    window.open('https://www.imdb.com/search/title/?genres=' + movieGenre + '&sort=user_rating&title_type=feature&num_votes=25000,');
  }

})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("reveal");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

topMoviesObeject = {
  "The Shawshank Redemption": 1,
  "The Godfather": 2,
  "The Godfather2": 3,
  "The Dark Knight": 4,
  "12 Angry Men": 5,
}

document.getElementById('The Shawshank Redemption').addEventListener('click', function (event) {
  event.preventDefault();
  fetchMovieData('The Shawshank Redemption')

})

document.getElementById('The Godfather').addEventListener('click', function (event) {
  event.preventDefault();
  fetchMovieData('The Godfather')
})

document.getElementById('The Godfather2').addEventListener('click', function (event) {
  event.preventDefault();
  fetchMovieData('The Godfather: Part II')
})

document.getElementById('The Dark Knight').addEventListener('click', function (event) {
  event.preventDefault();
  fetchMovieData('The Dark Knight')
})

document.getElementById('12 Angry Men').addEventListener('click', function (event) {
  event.preventDefault();
  fetchMovieData('12 Angry Men')
})


/*
const displayResults = (movieData) => {
  if (movieData.Title === 'The Shawshank Redemption') {
    document.getElementById('title1').innerText = "Title: " + movieData.Title
    document.getElementById('genre1').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated1').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime1').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore1').innerText = "Metascore: " + movieData.Metascore
    document.getElementById('boxOffice1').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('awards1').innerText = "Awards: " + movieData.Awards
    document.getElementById('director1').innerText = "Director(s): " + movieData.Director
    document.getElementById('released1').innerText = "Released: " + movieData.Released
  } else if
    (movieData.Title === 'The Godfather') {
    document.getElementById('title2').innerText = "Title: " + movieData.Title
    document.getElementById('genre2').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated2').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime2').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore2').innerText = "Metascore: " + movieData.Metascore
    document.getElementById('boxOffice2').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('awards2').innerText = "Awards: " + movieData.Awards
    document.getElementById('director2').innerText = "Director(s): " + movieData.Director
    document.getElementById('released2').innerText = "Released: " + movieData.Released
  } else if
    (movieData.Title === 'The Godfather: Part II') {
    document.getElementById('title3').innerText = "Title: " + movieData.Title
    document.getElementById('genre3').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated3').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime3').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore3').innerText = "Metascore: " + movieData.Metascore
    document.getElementById('boxOffice3').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('awards3').innerText = "Awards: " + movieData.Awards
    document.getElementById('director3').innerText = "Director(s): " + movieData.Director
    document.getElementById('released3').innerText = "Released: " + movieData.Released
  } else if
    (movieData.Title === 'The Dark Knight') {
    document.getElementById('title4').innerText = "Title: " + movieData.Title
    document.getElementById('genre4').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated4').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime4').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore4').innerText = "Metascore: " + movieData.Metascore
    document.getElementById('boxOffice4').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('awards4').innerText = "Awards: " + movieData.Awards
    document.getElementById('director4').innerText = "Director(s): " + movieData.Director
    document.getElementById('released4').innerText = "Released: " + movieData.Released
  } else if
    (movieData.Title === '12 Angry Men') {
    document.getElementById('title5').innerText = "Title: " + movieData.Title
    document.getElementById('genre5').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated5').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime5').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore5').innerText = "Metascore: " + movieData.Metascore
    document.getElementById('boxOffice5').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('awards5').innerText = "Awards: " + movieData.Awards
    document.getElementById('director5').innerText = "Director(s): " + movieData.Director
    document.getElementById('released5').innerText = "Released: " + movieData.Released
  }
}
*/

const displayResults = (movieData) => {
  if (movieData.Title === 'The Shawshank Redemption') {
    dynamicId = 1
  } else if (movieData.Title === 'The Godfather') {
    dynamicId = 2
  } else if (movieData.Title === 'The Godfather: Part II') {
    dynamicId = 3
  } else if (movieData.Title === 'The Dark Knight') {
    dynamicId = 4
  } else if (movieData.Title === '12 Angry Men') {
    dynamicId = 5
  } else {
    dynamicId = 9
  }

document.getElementById(`title${dynamicId}`).innerText = "Title: " + movieData.Title
document.getElementById(`genre${dynamicId}`).innerText = "Genre: " + movieData.Genre
document.getElementById(`rated${dynamicId}`).innerText = "Rated: " + movieData.Rated
document.getElementById(`runtime${dynamicId}`).innerText = "Runtime: " + movieData.Runtime
document.getElementById(`metascore${dynamicId}`).innerText = "Metascore: " + movieData.Metascore
document.getElementById(`boxOffice${dynamicId}`).innerText = "Box Office: " + movieData.BoxOffice
document.getElementById(`awards${dynamicId}`).innerText = "Awards: " + movieData.Awards
document.getElementById(`director${dynamicId}`).innerText = "Director(s): " + movieData.Director
document.getElementById(`released${dynamicId}`).innerText = "Released: " + movieData.Released
}