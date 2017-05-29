moviesApp
    .component('moviesComponent', {
        templateUrl: 'movies-component/movies-component.html',
        controller: function moviesComponentController($scope) {

            $scope.movies = [
            ];


            $scope.hidden = true;
            $scope.newMovie = {};

            $scope.add = function add() {
                $scope.movies.push({
                    title: $scope.newMovie.title,
                    description: $scope.newMovie.description
                });
                $scope.newMovie = {};
            }

            $scope.showHide = function () {

                if ($scope.hidden) {
                    $scope.hidden = false;

                } else {
                    $scope.hidden = true;

                }
            }

        }
    });