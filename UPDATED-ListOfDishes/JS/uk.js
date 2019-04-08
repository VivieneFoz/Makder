var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
$scope.ukcategory = '';
  $scope.ukList = function(value) {
    $scope.ukcategory = value;
  }
  $scope.menus = [{
	"Show list":[{"strMeal":" Bubble & Squeak","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xusqvw1511638311.jpg","idMeal":"52885"},{"strMeal":"Apple & Blackberry Crumble","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xvsurr1511719182.jpg","idMeal":"52893"},{"strMeal":"Apple Frangipan Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxywrq1468235067.jpg","idMeal":"52768"},{"strMeal":"Baked salmon with fennel & tomatoes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg","idMeal":"52959"},{"strMeal":"Bakewell tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wyrqqq1468233628.jpg","idMeal":"52767"},{"strMeal":"Battenberg Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ywwrsp1511720277.jpg","idMeal":"52894"},{"strMeal":"Bean & Sausage Hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vxuyrx1511302687.jpg","idMeal":"52848"},{"strMeal":"Beef and Mustard Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sytuqu1511553755.jpg","idMeal":"52874"},{"strMeal":"Beef and Oyster pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrssvt1511556563.jpg","idMeal":"52878"},{"strMeal":"Beef Dumpling Stew","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uyqrrv1511553350.jpg","idMeal":"52873"},{"strMeal":"Beef Sunday Roast","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ssrrrs1503664277.jpg","idMeal":"52824"},{"strMeal":"Beef Wellington","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvpprx1487325699.jpg","idMeal":"52803"},{"strMeal":"Blackberry Fool","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rpvptu1511641092.jpg","idMeal":"52891"},{"strMeal":"Bread and Butter Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqwwpy1483908697.jpg","idMeal":"52792"},{"strMeal":"Broccoli & Stilton soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tvvxpv1511191952.jpg","idMeal":"52842"},{"strMeal":"Carrot Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vrspxv1511722107.jpg","idMeal":"52897"},{"strMeal":"Chelsea Buns","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vqpwrv1511723001.jpg","idMeal":"52898"},{"strMeal":"Chicken & mushroom Hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1511297945.jpg","idMeal":"52846"},{"strMeal":"Chicken Ham and Leek Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrrtss1511555269.jpg","idMeal":"52875"},{"strMeal":"Chocolate Avocado Mousse","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uttuxy1511382180.jpg","idMeal":"52853"},{"strMeal":"Chocolate Caramel Crispy","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1550442508.jpg","idMeal":"52966"},{"strMeal":"Christmas Pudding Flapjack","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvusxs1483907034.jpg","idMeal":"52788"},{"strMeal":"Creamy Tomato Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/stpuws1511191310.jpg","idMeal":"52841"},{"strMeal":"Dundee cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxyvqq1511723401.jpg","idMeal":"52899"},{"strMeal":"Eccles Cakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wtqrqw1511639627.jpg","idMeal":"52888"},{"strMeal":"English Breakfast","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/utxryw1511721587.jpg","idMeal":"52895"},{"strMeal":"Eton Mess","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuxwvq1483907861.jpg","idMeal":"52791"},{"strMeal":"Fish pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg","idMeal":"52802"},{"strMeal":"Full English Breakfast","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sqrtwu1511721265.jpg","idMeal":"52896"},{"strMeal":"Jam Roly-Poly","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ysqupp1511640538.jpg","idMeal":"52890"},{"strMeal":"Kedgeree","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg","idMeal":"52887"},{"strMeal":"Lamb and Potato pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxrpws1511555907.jpg","idMeal":"52877"},{"strMeal":"Lancashire hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uttrxw1511637813.jpg","idMeal":"52884"},{"strMeal":"Madeira Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/urtqut1511723591.jpg","idMeal":"52900"},{"strMeal":"McSinghs Scotch pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vssrtx1511557680.jpg","idMeal":"52880"},{"strMeal":"Minced Beef Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xwutvy1511555540.jpg","idMeal":"52876"},{"strMeal":"Mushroom & Chestnut Rotolo","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ssyqwr1511451678.jpg","idMeal":"52864"},{"strMeal":"Parkin Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qxuqtt1511724269.jpg","idMeal":"52902"},{"strMeal":"Rock Cakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tqrrsq1511723764.jpg","idMeal":"52901"},{"strMeal":"Salmon Avocado Salad","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1549542994.jpg","idMeal":"52960"},{"strMeal":"Smoky Lentil Chili with Squash","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uwxqwy1483389553.jpg","idMeal":"52784"},{"strMeal":"Spotted Dick","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqvyqr1511638875.jpg","idMeal":"52886"},{"strMeal":"Steak and Kidney Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qysyss1511558054.jpg","idMeal":"52881"},{"strMeal":"Sticky Toffee Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqqqtu1511637379.jpg","idMeal":"52883"},{"strMeal":"Sticky Toffee Pudding Ultimate","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrptpq1483909204.jpg","idMeal":"52793"},{"strMeal":"Summer Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rsqwus1511640214.jpg","idMeal":"52889"},{"strMeal":"Three Fish Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg","idMeal":"52882"},{"strMeal":"Toad In The Hole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ytuvwr1503070420.jpg","idMeal":"52822"},{"strMeal":"Treacle Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wprvrw1511641295.jpg","idMeal":"52892"},{"strMeal":"Turkey Meatloaf","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ypuxtw1511297463.jpg","idMeal":"52845"},{"strMeal":"Vegetarian Casserole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vptwyt1511450962.jpg","idMeal":"52863"},{"strMeal":"Vegetarian Chilli","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wqurxy1511453156.jpg","idMeal":"52867"}]}]
});