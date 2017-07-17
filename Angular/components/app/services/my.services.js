moviesApp.factory('moviesAppService', function () {
    var service = {};
    var allMovies = [
        /* {
                title: 'Jumanji: Welcome to the Jungle',
                description: 'In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the games jungle setting, literally becoming the adult avatars they chose.'
            },
            {
                title: 'War for the Planet of the Apes',
                description: 'After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.'
            },
            {
                title: 'The Mummy',
                description: 'An ancient princess is awakened from her crypt beneath the desert, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.'
            },
            {
                title: 'Despicable Me 3',
                description: 'Gru meets his long-lost charming, cheerful, and more successful twin brother Dru who wants to team up with him for one last criminal heist.'
            }
     */
    ];
    var sequence = allMovies.length;

    service.getAllMovies = function () {
        return allMovies;
    }

    service.createMovie = function (movie) {
        sequence++;
        movie.id = sequence;
        allMovies.push(movie);
    }

    service.deleteMovieService = function (movieId) {
        var movieIndex = 0;
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movieId) {
                movieIndex = i;
                break;
            }
        }
        allMovies.splice(movieIndex, 1);
    }

    service.modifyMovieService = function (movie) {
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movie.id) {
                allMovies[i] = movie;
                break;
            }
        }

    }

    return service;
});