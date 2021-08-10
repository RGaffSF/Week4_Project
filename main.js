// document.getElementById('movieLookup').addEventListener('click', function (event) {
//     event.preventDefault();

//     let movieTitle = document.getElementById('movieTitle').value
//     let responseObj = {};

//     fetch('http://www.omdbapi.com/?apikey=a6df6408&t=' + movieTitle)
//         .then((response) => {
//             if (response.ok) {
//                 responseObj = response.json();
//                 return responseObj;
//             } else {
//                 window.alert('Network Error!')
//             }
//         })
//         .then(movieData => {
//             if (movieData.Response === "True") {
//                 // console.log(movieData)
//                 return displayResults(movieData)
//             } else {
//                 window.alert('Movie not found!')
//             }
//         })
//         .catch(() => {
//             window.alert('Network Error! Check Your Internet')
//         })
// })


// const displayResults = (movieData) => {
//     document.getElementById('title').innerText = "Title: " + movieData.Title
//     document.getElementById('genre').innerText = "Genre: " + movieData.Genre
//     document.getElementById('rated').innerText = "Rated: " + movieData.Rated
//     document.getElementById('runtime').innerText = "Runtime: " + movieData.Runtime
//     document.getElementById('metascore').innerText = "Metascore: " + movieData.Metascore
// }


document.getElementById('Top10Lookup').addEventListener('click', function (event) {
    event.preventDefault();

    let movieGenre = document.getElementById('PickedGenre').value

    //fetch('http://www.omdbapi.com/?apikey=a6df6408&g=' + movieGenre)

   fetch ('https://www.imdb.com/search/title/?genres=' + movieGenre + '&sort=user_rating')
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
                //return displayResults(movieData)
            } else {
                window.alert('Movie not found!')
            }
        })
        .catch(() => {
            window.alert('Network Error! Check Your Internet')
        })
})

