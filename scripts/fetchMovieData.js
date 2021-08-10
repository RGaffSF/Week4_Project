const fetchMovieData = (movieTitle) => {
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
                return displayResults(movieData)
            } else {
                window.alert('Movie not found!')
            }
        })
        .catch((error) => {
            console.log(error)
            window.alert('Network Error! Check Your Internet')
        })
}