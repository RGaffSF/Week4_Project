document.getElementById('movieLookup').addEventListener('click', function (event) {
    event.preventDefault();
    let movieTitle = document.getElementById('movieTitle').value
    fetch('http://www.omdbapi.com/?apikey=a6df6408&t=' + movieTitle)
        .then((response) => {
            if (response.ok) {
                console.log(response.json());
            } else {
                window.alert('Movie not found!')
            }
        })
})
