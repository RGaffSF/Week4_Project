document.getElementById('movieLookup').addEventListener('click', function (event) {
    event.preventDefault();

    let movieTitle = document.getElementById('movieTitle').value
    let responseObj = {};

    fetch('http://www.omdbapi.com/?apikey=a6df6408&t=' + movieTitle)
        .then((response) => {
            if (response.ok) {
                responseObj = response.json();
                return responseObj;
            } else {
                window.alert('Network Error!')
            }
        })
        .then(movieData => {
            if (movieData.Response === "True") {
                console.log(movieData)
            } else {
                window.alert('Movie not found!')
            }
        })
})


const displayResults = () => {

}




