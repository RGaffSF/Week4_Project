document.getElementById('movieLookup').addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.getElementById('movieTitle').value


   fetchMovieData(movieTitle)
   getRandomImage()
})


const displayResults = (movieData) => {
    document.getElementById('title').innerText = "Title: " + movieData.Title
    document.getElementById('genre').innerText = "Genre: " + movieData.Genre
    document.getElementById('rated').innerText = "Rated: " + movieData.Rated
    document.getElementById('runtime').innerText = "Runtime: " + movieData.Runtime
    document.getElementById('metascore').innerText = "Metascore: " + movieData.Metascore
}


let ImageArray = ['Img1.jfif','Img2.png','Img3.jpg'];

function getRandomImage() {
    const num = Math.floor( Math.random() * 3);
    const img = ImageArray[num];
    document.getElementById("randImage").innerHTML = ('<img src="' + 'assets/random_pics/' + img + '" width="250px">')
}