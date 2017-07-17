
moviesApp.component('moviesComponent', {
    templateUrl: 'movies-component/movies-component.html',
    controller: function moviesComponentController($scope) {
        $scope.movies = [
            {
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
        ];

        $scope.visible = true;

        $scope.showhide = function showhide() {
            if ($scope.visible == true) {
                $scope.visible = false;
            }
            else {
                $scope.visible = true;
            }
        };

        $scope.newMovie = {};

        $scope.addListItem = function addListItem() {
            $scope.movies.push({ title: $scope.newMovie.title, description: $scope.newMovie.description });
            $scope.newMovie = {};
        };

    }
});