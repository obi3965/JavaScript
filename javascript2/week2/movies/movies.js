const movies = [{
    "title": "'71",
    "year": 2014,
    "rating": 7.2,
    "votes": 41702,
    "running_times": 5940
}, {
    "title": "'A' gai wak",
    "year": 1983,
    "rating": 7.4,
    "votes": 11942,
    "running_times": 6300
}, {
    "title": "'Breaker' Morant",
    "year": 1980,
    "rating": 7.9,
    "votes": 10702,
    "running_times": 6420
}, {
    "title": "'Crocodile' Dundee II",
    "year": 1988,
    "rating": 5.5,
    "votes": 47180,
    "running_times": 6480
}, {
    "title": "(500) Days of Summer",
    "year": 2009,
    "rating": 7.7,
    "votes": 412368,
    "running_times": 5700
}, {
    "title": "*batteries not included",
    "year": 1987,
    "rating": 6.6,
    "votes": 25636,
    "running_times": 6360
}, {
    "title": "...E tu vivrai nel terrore! L'aldilà",
    "year": 1981,
    "rating": 6.9,
    "votes": 16484,
    "running_times": 5220
}, {
    "title": "...and justice for all.",
    "year": 1979,
    "rating": 7.4,
    "votes": 25408,
    "running_times": 7140
}, {
    "title": "10",
    "year": 1979,
    "rating": 6,
    "votes": 13152,
    "running_times": 7320
}, {
    "title": "10 Cloverfield Lane",
    "year": 2016,
    "rating": 7.2,
    "votes": 216151,
    "running_times": 6240
}, {
    "title": "10 Items or Less",
    "year": 2006,
    "rating": 6.7,
    "votes": 13342,
    "running_times": 4920
}
]

//TO GET THE MOVIES RATING WHICH IS OVER 6 OR EQUAL TO 6
let rating_output =[];
for(let i = 0; i < movies.length; i++){
    if(movies[i].rating >= 6){
        rating_output.push(movies[i])
    }
}
console.log(rating_output)


//Count the number of movies made between 1980-1989 (including both the years)let
// let yearsOfMovies = [];
let yearsOfMovies = movies.filter(movie => (movie.year >= 1980 && movie.year < 1989))
console.log(yearsOfMovies)