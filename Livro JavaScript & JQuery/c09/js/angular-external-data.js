function TimeTableCtrl($scope, $http) {
    $http.get('js/items.json')
    .sucess(function(data) { $scope.sessions = data.sessions; } )
    .error(function(data) { console.log('error') } );
    // O erro poderia mostrar uma mensagem amigável para os usuários...
}