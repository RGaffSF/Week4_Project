let bananapic = document.getElementById("bpic");

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
    document.getElementById('Released').innerText = "Released: " + movieData.Released
    document.getElementById('BoxOffice').innerText = "Box Office: " + movieData.BoxOffice
    document.getElementById('Plot').innerText = "Plot: " + movieData.Plot
    if (movieData.Metascore > 90) {
        bananapic.innerHTML = ('<img src=' + '"assets/P1_Banana.jpg">'+ "5 out of 5 Bananas")
    } else if
        (movieData.Metascore > 80 && movieData.Metascore < 89) {
        bananapic.innerHTML = ('<img src=' + '"assets/P2_Banana.jpg">'+ "4 out of 5 Bananas")
    } else if
        (movieData.Metascore > 70 && movieData.Metascore < 79) {
        bananapic.innerHTML = ('<img src=' + '"assets/P3_Banana.jpg">'+ "3 out of 5 Bananas")
    } else if
        (movieData.Metascore > 60 && movieData.Metascore < 69) {
        bananapic.innerHTML = ('<img src=' + '"assets/P4_Banana.jpg">'+ "2 out of 5 Bananas")
    } else
        bananapic.innerHTML = ('<img src=' + '"assets/P4_Banana.jpg">'+ "1 out of 5 Bananas")
}


let ImageArray = ['Img1.jfif', 'Img2.png', 'Img3.jpg'];

function getRandomImage() {
    const num = Math.floor(Math.random() * 3);
    const img = ImageArray[num];
    document.getElementById("randImage").innerHTML = ('<img src="' + 'assets/random_pics/' + img + '" width="250px">')
}