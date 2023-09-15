// my key 0e5e01e23e159b5dc14643bdb399da13


let input = document.getElementById("inp")
let btn = document.getElementById("btn")
let box = document.querySelector(".box")

btn.onclick = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0e5e01e23e159b5dc14643bdb399da13&language=en-US&query=${input.value}&page=1&include_adult=false`)
        .then((Response) => { return Response.json() })
        .then((res) => { console.log(res), Showresult(res) })
}

function Showresult(res) {

    for (let i = 0; i < res.results.length; i++) { 
        let div = document.createElement("div")
        div.classList.add("img-box")

        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/original${res.results[i].poster_path}`

        div.appendChild(img)
        box.appendChild(div)


    }
}












// function fetchMovieByGenres(movie_genre) {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzFlMTFkYjQzMWNhYjM1YWY1Njk4NmJjYTAwYTFiOSIsInN1YiI6IjY1MDJlOTViZWZlYTdhMDExYWI5MzA4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F-Z0vt-dN1i93snrbwxeACGaIoBw0N63yaF0QT8ptU8'
//         }
//     };

//     fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movie_genre}`, options)
//         .then(response => response.json())
//         .then(response => { myfun2(response); createMoviesDisplay(response); })
//         .catch(err => console.error(err));
// }
