angular.module('bakeryMenuApp')
  .controller('mainCtrl', function($scope, dataService) {  
    dataService.getMenus(function(response) { 
        $scope.fullMenu = response.data.menus;
        $scope.categoryFilters = {}   
    });
  })