var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
$scope.fcategory = '';
  $scope.franceList = function(value) {
    $scope.fcategory = value;
  }
  $scope.menus = [{
	"Show list":[{"strMeal":"Beef Bourguignon","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vtqxtu1511784197.jpg","idMeal":"52904"},{"strMeal":"Boulang\u00e8re Potatoes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qywups1511796761.jpg","idMeal":"52914"},{"strMeal":"Brie wrapped in prosciutto & brioche","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qqpwsy1511796276.jpg","idMeal":"52913"},{"strMeal":"Chicken Basquaise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wruvqv1511880994.jpg","idMeal":"52934"},{"strMeal":"Chicken Marengo","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qpxvuq1511798906.jpg","idMeal":"52920"},{"strMeal":"Chicken Parmentier","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uwvxpv1511557015.jpg","idMeal":"52879"},{"strMeal":"Chinon Apple Tarts","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtqwwu1511792650.jpg","idMeal":"52910"},{"strMeal":"Chocolate Gateau","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tqtywx1468317395.jpg","idMeal":"52776"},{"strMeal":"Chocolate Souffle","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/twspvx1511784937.jpg","idMeal":"52905"},{"strMeal":"Coq au vin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qstyvs1505931190.jpg","idMeal":"52832"},{"strMeal":"Duck Confit","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvpvsu1511786158.jpg","idMeal":"52907"},{"strMeal":"Fennel Dauphinoise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ytttsv1511798734.jpg","idMeal":"52919"},{"strMeal":"Fish Stew with Rouille","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg","idMeal":"52918"},{"strMeal":"Flamiche","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wssvvs1511785879.jpg","idMeal":"52906"},{"strMeal":"French Lentils With Garlic and Thyme","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vwwspt1487394060.jpg","idMeal":"52815"},{"strMeal":"French Omelette","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yvpuuy1511797244.jpg","idMeal":"52915"},{"strMeal":"French Onion Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xvrrux1511783685.jpg","idMeal":"52903"},{"strMeal":"Pear Tarte Tatin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rxvxrr1511797671.jpg","idMeal":"52916"},{"strMeal":"Pork Cassoulet","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxuvuv1511299147.jpg","idMeal":"52847"},{"strMeal":"Prawn & Fennel Bisque","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rtwwvv1511799504.jpg","idMeal":"52922"},{"strMeal":"Proven\u00e7al Omelette Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qwtrtp1511799242.jpg","idMeal":"52921"},{"strMeal":"Ratatouille","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg","idMeal":"52908"},{"strMeal":"Steak Diane","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vussxq1511882648.jpg","idMeal":"52935"},{"strMeal":"Summer Pistou","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rqtxvr1511792990.jpg","idMeal":"52911"},{"strMeal":"Tarte Tatin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ryspuw1511786688.jpg","idMeal":"52909"},{"strMeal":"Three-cheese souffles","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxwquu1511793428.jpg","idMeal":"52912"},{"strMeal":"Tuna Nicoise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yypwwq1511304979.jpg","idMeal":"52852"},{"strMeal":"White chocolate creme brulee","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uryqru1511798039.jpg","idMeal":"52917"}]}]
});