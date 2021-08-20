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

document.querySelector('.fetchMovie').addEventListener('click', function (event) {
  event.preventDefault();
  //console.log(event.target.parentElement)
  fetchMovieData(event.target.parentElement.id)
})


topMoviesObject = {
  "The Shawshank Redemption": 1,
  "The Godfather": 2,
  "The Godfather: Part II": 3,
  "The Dark Knight": 4,
  "12 Angry Men": 5,
}

const displayResults = (movieData) => {
  dynamicId = topMoviesObject[movieData.Title]
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