var moviesApp = angular.module('moviesApp', []);


moviesApp.controller('moviesController', 
function moviesController($scope) {
    
    $scope.movies = [
        {
            title: 'Guardians of the galaxy vol.2',
            description: 'The team have some struggles as they meet some new people and interact with old adversaries.'
        },
        {
            title: 'Wonder Woman',
            description: 'Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.'
        },
         {
            title: 'A hét mesterlövész',
            description: 'Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.'
        },
         {
            title: 'Batman 8',
            description: 'Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.'
        }
    ];
$scope.hidden =true;
$scope.showHide = function(){

    if($scope.hidden){
        $scope.hidden = false;
       
    }else{
        $scope.hidden = true;
       
    }
};

$scope.add = function add() {
    $scope.movies.push({title: "new title", description: "new description"});
};

});