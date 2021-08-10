document.getElementById('movieLookup').addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.getElementById('movieTitle').value


   fetchMovieData(movieTitle)
})


const displayResults = (movieData) => {
    document.getElementById('title').innerText = "Title: " + movieData.Title
    document.getElementById('genre').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore').innerText = "Metascore: " + movieData.Metascore
}


