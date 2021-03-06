var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
  $scope.category = '';

  $scope.categoryList = function(value) {
    $scope.category = value;
  }
  $scope.menus = [{
  "A":[{"strMeal":"Apple & Blackberry Crumble","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xvsurr1511719182.jpg","idMeal":"52893"},
    {"strMeal":"Apple Frangipan Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxywrq1468235067.jpg","idMeal":"52768"}]
  }, {

  "B":[{"strMeal":"Baingan Bharta","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/urtpqw1487341253.jpg","idMeal":"52807"},
    {"strMeal":"Baked Salmon with fennel & tomatoes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg","idMeal":"52959"},
    {"strMeal":"Bakewell Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wyrqqq1468233628.jpg","idMeal":"52767"},
    {"strMeal":"Banana Pancakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sywswr1511383814.jpg","idMeal":"52855"},
    {"strMeal":"Battenberg Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ywwrsp1511720277.jpg","idMeal":"52894"},
    {"strMeal":"Bean & Sausage Hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vxuyrx1511302687.jpg","idMeal":"52848"},
    {"strMeal":"BeaverTails","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ryppsv1511815505.jpg","idMeal":"52928"},
    {"strMeal":"Beef and Mustard Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sytuqu1511553755.jpg","idMeal":"52874"},
    {"strMeal":"Beef and Oyster Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrssvt1511556563.jpg","idMeal":"52878"},
    {"strMeal":"Beef Bourguignon","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vtqxtu1511784197.jpg","idMeal":"52904"},
    {"strMeal":"Beef Brisket Pot Roast","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ursuup1487348423.jpg","idMeal":"52812"},
    {"strMeal":"Beef Dumpling Stew","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uyqrrv1511553350.jpg","idMeal":"52873"},
    {"strMeal":"Beef Lo Mein","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529444830.jpg","idMeal":"52952"},
    {"strMeal":"Beef Stroganoff","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/svprys1511176755.jpg","idMeal":"52834"},
    {"strMeal":"Beef Sunday Roast","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ssrrrs1503664277.jpg","idMeal":"52824"},
    {"strMeal":"Beef Wellington","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvpprx1487325699.jpg","idMeal":"52803"},
    {"strMeal":"Blackberry Fool","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rpvptu1511641092.jpg","idMeal":"52891"},
    {"strMeal":"Boulang\u00e8re Potatoes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qywups1511796761.jpg","idMeal":"52914"},
    {"strMeal":"Braised Beef Chilli","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuqvwu1504629254.jpg","idMeal":"52826"},
    {"strMeal":"Bread and Butter Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqwwpy1483908697.jpg","idMeal":"52792"},
    {"strMeal":"Brie wrapped in prosciutto & brioche","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qqpwsy1511796276.jpg","idMeal":"52913"},
    {"strMeal":"Broccoli & Stilton Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tvvxpv1511191952.jpg","idMeal":"52842"},
    {"strMeal":"Brown Stew Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg","idMeal":"52940"},
    {"strMeal":"Bubble & Squeak","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xusqvw1511638311.jpg","idMeal":"52885"},
    {"strMeal":"Budino Di Ricotta","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1549542877.jpg","idMeal":"52961"}]
  }, {

  "C":[{"strMeal":"Cajun Spiced Fish Tacos","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg","idMeal":"52819"},
    {"strMeal":"Callaloo Jamaican Style","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ussyxw1515364536.jpg","idMeal":"52939"},
    {"strMeal":"Canadian Butter Tarts","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wpputp1511812960.jpg","idMeal":"52923"},
    {"strMeal":"Carrot Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vrspxv1511722107.jpg","idMeal":"52897"},
    {"strMeal":"Chelsea Buns","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vqpwrv1511723001.jpg","idMeal":"52898"},
    {"strMeal":"Chicken & Mushroom Hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1511297945.jpg","idMeal":"52846"},
    {"strMeal":"Chicken Alfredo Primavera","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/syqypv1486981727.jpg","idMeal":"52796"},
    {"strMeal":"Chicken Basquaise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wruvqv1511880994.jpg","idMeal":"52934"},
    {"strMeal":"Chicken Congee","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529446352.jpg","idMeal":"52956"},
    {"strMeal":"Chicken Couscous","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qxytrx1511304021.jpg","idMeal":"52850"},
    {"strMeal":"Chicken Enchilada Casserole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtuwxu1468233098.jpg","idMeal":"52765"},
    {"strMeal":"Chicken Fajita Mac and Cheese","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qrqywr1503066605.jpg","idMeal":"52818"},
    {"strMeal":"Chicken Ham and Leek Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrrtss1511555269.jpg","idMeal":"52875"},
    {"strMeal":"Chicken Handi","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wyxwsp1486979827.jpg","idMeal":"52795"},
    {"strMeal":"Chicken Karaage","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tyywsw1505930373.jpg","idMeal":"52831"},
    {"strMeal":"Chicken Marengo","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qpxvuq1511798906.jpg","idMeal":"52920"},
    {"strMeal":"Chicken Parmentier","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uwvxpv1511557015.jpg","idMeal":"52879"},
    {"strMeal":"Chickpea Fajitas","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tvtxpq1511464705.jpg","idMeal":"52870"},
    {"strMeal":"Chilli Prawn Linguine","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/usywpp1511189717.jpg","idMeal":"52839"},
    {"strMeal":"Chinon Apple Tarts","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtqwwu1511792650.jpg","idMeal":"52910"},
    {"strMeal":"Choc Chip Pecan Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rqvwxt1511384809.jpg","idMeal":"52856"},
    {"strMeal":"Chocolate Avocado Mousse","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uttuxy1511382180.jpg","idMeal":"52853"},
    {"strMeal":"Chocolate Caramel Crispy","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1550442508.jpg","idMeal":"52966"},
    {"strMeal":"Chocolate Gateau","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tqtywx1468317395.jpg","idMeal":"52776"},
    {"strMeal":"Chocolate Raspberry Brownies","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yypvst1511386427.jpg","idMeal":"52860"},
    {"strMeal":"Chocolate Souffle","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/twspvx1511784937.jpg","idMeal":"52905"},
    {"strMeal":"Christmas Pudding Flapjack","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvusxs1483907034.jpg","idMeal":"52788"},
    {"strMeal":"Clam Chowder","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rvtvuw1511190488.jpg","idMeal":"52840"},
    {"strMeal":"Coq Au Vin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qstyvs1505931190.jpg","idMeal":"52832"},
    {"strMeal":"Cream Cheese Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wurrux1468416624.jpg","idMeal":"52779"},
    {"strMeal":"Creamy Tomato Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/stpuws1511191310.jpg","idMeal":"52841"},
    {"strMeal":"Crock Pot Chicken Baked Tacos","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ypxvwv1505333929.jpg","idMeal":"52830"}]
  }, {

  "D":[{"strMeal":"Dal Fry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wuxrtu1483564410.jpg","idMeal":"52785"},
    {"strMeal":"Duck Confit","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvpvsu1511786158.jpg","idMeal":"52907"},
    {"strMeal":"Dundee Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxyvqq1511723401.jpg","idMeal":"52899"}]
  }, {

  "E":[{"strMeal":"Eccles Cakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wtqrqw1511639627.jpg","idMeal":"52888"},
    {"strMeal":"Egg Drop Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529446137.jpg","idMeal":"52955"},
    {"strMeal":"Escovitch Fish","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg","idMeal":"52944"},
    {"strMeal":"Eton Mess","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuxwvq1483907861.jpg","idMeal":"52791"}]
  }, {

  "F":[{"strMeal":"Fennel Dauphinoise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ytttsv1511798734.jpg","idMeal":"52919"},
    {"strMeal":"Fettucine Alfredo","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uquqtu1511178042.jpg","idMeal":"52835"},
    {"strMeal":"Fish Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg","idMeal":"52802"},
    {"strMeal":"Fish Stew with Rouille","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg","idMeal":"52918"},
    {"strMeal":"Flamiche","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wssvvs1511785879.jpg","idMeal":"52906"},
    {"strMeal":"French Lentils With Garlic and Thyme","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vwwspt1487394060.jpg","idMeal":"52815"},
    {"strMeal":"French Omelette","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yvpuuy1511797244.jpg","idMeal":"52915"},
    {"strMeal":"French Onion Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xvrrux1511783685.jpg","idMeal":"52903"}]
  }, {

  "G":[{"strMeal":"Garides Saganaki","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wuvryu1468232995.jpg","idMeal":"52764"},
    {"strMeal":"General Tso's Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529444113.jpg","idMeal":"52951"},
    {"strMeal":"Grilled Mac and Cheese Sandwich","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xutquv1505330523.jpg","idMeal":"52829"}]
  }, {

  "H":[{"strMeal":"Honey Teriyaki Salmon","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg","idMeal":"52773"},
    {"strMeal":"Hot and Sour Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529445893.jpg","idMeal":"52954"},
    {"strMeal":"Hot Chocolate Fudge","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrysxr1483568462.jpg","idMeal":"52787"}]
  }, {

  "I":[{"strMeal":"Irish Stew","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxxpst1468569714.jpg","idMeal":"52781"}]
  }, {

  "J":[{"strMeal":"Jam Roly-Poly","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ysqupp1511640538.jpg","idMeal":"52890"},
    {"strMeal":"Jamaican Beef Patties","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wsqqsw1515364068.jpg","idMeal":"52938"},
    {"strMeal":"Jerk Chicken with Rice & Peas","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tytyxu1515363282.jpg","idMeal":"52937"}]
  }, {

  "K":[{"strMeal":"Kapsalon","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxysrt1468240488.jpg","idMeal":"52769"},
    {"strMeal":"Katsu Chicken Curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vwrpps1503068729.jpg","idMeal":"52820"},
    {"strMeal":"Kedgeree","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg","idMeal":"52887"},
    {"strMeal":"Kentucky Fried Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqusqy1487348868.jpg","idMeal":"52813"},
    {"strMeal":"Key Lime Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qpqtuu1511386216.jpg","idMeal":"52859"},
    {"strMeal":"Kidney Bean Curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sywrsu1511463066.jpg","idMeal":"52868"},
    {"strMeal":"Kung Pao Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1525872624.jpg","idMeal":"52945"},
    {"strMeal":"Kung Po Prawns","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1525873040.jpg","idMeal":"52946"}]
  }, {

  "L":[{"strMeal":"Laksa King Prawn Noodles","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rvypwy1503069308.jpg","idMeal":"52821"},
    {"strMeal":"Lamb and Potato Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxrpws1511555907.jpg","idMeal":"52877"},
    {"strMeal":"Lamb Biryani","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrttsx1487339558.jpg","idMeal":"52805"},
    {"strMeal":"Lamb Rogan Josh","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvstvq1487342592.jpg","idMeal":"52808"},
    {"strMeal":"Lamb Tagine","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yuwtuu1511295751.jpg","idMeal":"52843"},
    {"strMeal":"Lamb Tomato and Sweet Spices","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtwtss1468572261.jpg","idMeal":"52782"},
    {"strMeal":"Lancashire Hotpot","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uttrxw1511637813.jpg","idMeal":"52884"},
    {"strMeal":"Lasagne","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wtsvxx1511296896.jpg","idMeal":"52844"}]
  }, {

  "M":[{"strMeal":"Ma Po Tofu","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1525874812.jpg","idMeal":"52947"},
    {"strMeal":"Madeira Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/urtqut1511723591.jpg","idMeal":"52900"},
    {"strMeal":"Massaman Beef Curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tvttqv1504640475.jpg","idMeal":"52827"},
    {"strMeal":"Matar Paneer","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxpqsy1511452222.jpg","idMeal":"52865"},
    {"strMeal":"McSinghs Scotch Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vssrtx1511557680.jpg","idMeal":"52880"},
    {"strMeal":"Mediterranean Pasta Salad","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg","idMeal":"52777"},
    {"strMeal":"Minced Beef Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xwutvy1511555540.jpg","idMeal":"52876"},
    {"strMeal":"Montreal Smoked Meat","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uttupv1511815050.jpg","idMeal":"52927"},
    {"strMeal":"Mushroom & Chestnut Rotolo","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ssyqwr1511451678.jpg","idMeal":"52864"}]
  }, {

  "N":[{"strMeal":"Nanaimo Bars","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vwuprt1511813703.jpg","idMeal":"52924"},
    {"strMeal":"New York cheesecake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/swttys1511385853.jpg","idMeal":"52858"},
    {"strMeal":"Nutty Chicken Curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yxsurp1511304301.jpg","idMeal":"52851"}]
  }, {

  "O":[{"strMeal":"Osso Buco Alla Milanese","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wwuqvt1487345467.jpg","idMeal":"52810"},
    {"strMeal":"Oxtail with Broad Beans","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1520083578.jpg","idMeal":"52943"}]
  }, {
  
  "P":[{"strMeal":"Pad See Ew","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1468263334.jpg","idMeal":"52774"},
    {"strMeal":"Pancakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rwuyqx1511383174.jpg","idMeal":"52854"},
    {"strMeal":"Parkin Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qxuqtt1511724269.jpg","idMeal":"52902"},
    {"strMeal":"Pate Chinois","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yyrrxr1511816289.jpg","idMeal":"52930"},
    {"strMeal":"Peach & Blueberry Grunt","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ssxvup1511387476.jpg","idMeal":"52862"},
    {"strMeal":"Peanut Butter Cheesecake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtuuys1511387068.jpg","idMeal":"52861"},
    {"strMeal":"Peanut Butter Cookies","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1544384070.jpg","idMeal":"52958"},
    {"strMeal":"Pear Tarte Tatin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rxvxrr1511797671.jpg","idMeal":"52916"},
    {"strMeal":"Pilchard Puttanesca","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vvtvtr1511180578.jpg","idMeal":"52837"},
    {"strMeal":"Pork Cassoulet","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxuvuv1511299147.jpg","idMeal":"52847"},
    {"strMeal":"Potato Gratin with Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qwrtut1468418027.jpg","idMeal":"52780"},
    {"strMeal":"Pouding chomeur","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yqqqwu1511816912.jpg","idMeal":"52932"},
    {"strMeal":"Poutine","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uuyrrx1487327597.jpg","idMeal":"52804"},
    {"strMeal":"Prawn & Fennel Bisque","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rtwwvv1511799504.jpg","idMeal":"52922"},
    {"strMeal":"Proven\u00e7al Omelette Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qwtrtp1511799242.jpg","idMeal":"52921"},
    {"strMeal":"Pumpkin Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/usuqtp1511385394.jpg","idMeal":"52857"}]
  }, {

  "Q":[{"strMeal":"NONE"}]
  }, {

  "R":[{"strMeal":"Rappie Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ruwpww1511817242.jpg","idMeal":"52933"},
    {"strMeal":"Ratatouille","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg","idMeal":"52908"},
    {"strMeal":"Recheado Masala Fish","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uwxusv1487344500.jpg","idMeal":"52809"},
    {"strMeal":"Red Peas Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sqpqtp1515365614.jpg","idMeal":"52941"},
    {"strMeal":"Ribollita","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrrwpx1487347049.jpg","idMeal":"52811"},
    {"strMeal":"Rigatoni with Fennel Sausage Sauce","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtqvys1468573168.jpg","idMeal":"52783"},
    {"strMeal":"Roast Fennel and Aubergine Paella","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1520081754.jpg","idMeal":"52942"},
    {"strMeal":"Roasted Eggplant With Tahini, Pine Nuts, and Lentils","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ysqrus1487425681.jpg","idMeal":"52816"},
    {"strMeal":"Rock Cakes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tqrrsq1511723764.jpg","idMeal":"52901"},
    {"strMeal":"Rocky Road Fudge","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vtxyxv1483567157.jpg","idMeal":"52786"}]
  }, {
  
  "S":[{"strMeal":"Salmon Avocado Salad","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1549542994.jpg","idMeal":"52960"},
    {"strMeal":"Salmon Prawn Risotto","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg","idMeal":"52823"},
    {"strMeal":"Salted Caramel Cheescake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqrwyr1511133646.jpg","idMeal":"52833"},
    {"strMeal":"Saltfish and Ackee","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vytypy1511883765.jpg","idMeal":"52936"},
    {"strMeal":"Seafood Fideu\u00e0","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg","idMeal":"52836"},
    {"strMeal":"Shakshuka","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/g373701551450225.jpg","idMeal":"52963"},
    {"strMeal":"Shrimp Chow Fun","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529445434.jpg","idMeal":"52953"},
    {"strMeal":"Smoky Lentil Chili with Squash","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uwxqwy1483389553.jpg","idMeal":"52784"},
    {"strMeal":"Spaghetti Bolognese","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sutysw1468247559.jpg","idMeal":"52770"},
    {"strMeal":"Spanish Tortilla","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/quuxsx1511476154.jpg","idMeal":"52872"},
    {"strMeal":"Spicy Arrabiata Penne","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg","idMeal":"52771"},
    {"strMeal":"Spicy North African Potato Salad","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/urtwux1486983078.jpg","idMeal":"52797"},
    {"strMeal":"Spinach & Ricotta Cannelloni","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wspuvp1511303478.jpg","idMeal":"52849"},
    {"strMeal":"Split Pea Soup","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxtsvx1511814083.jpg","idMeal":"52925"},
    {"strMeal":"Spotted Dick","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqvyqr1511638875.jpg","idMeal":"52886"},
    {"strMeal":"Squash Linguine","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxswxy1511452625.jpg","idMeal":"52866"},
    {"strMeal":"Steak and Kidney Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qysyss1511558054.jpg","idMeal":"52881"},
    {"strMeal":"Steak Diane","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vussxq1511882648.jpg","idMeal":"52935"},
    {"strMeal":"Sticky Toffee Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xqqqtu1511637379.jpg","idMeal":"52883"},
    {"strMeal":"Sticky Toffee Pudding Ultimate","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrptpq1483909204.jpg","idMeal":"52793"},
    {"strMeal":"Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yqwtvu1487426027.jpg","idMeal":"52817"},
    {"strMeal":"Sugar Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yrstur1511816601.jpg","idMeal":"52931"},
    {"strMeal":"Summer Pistou","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rqtxvr1511792990.jpg","idMeal":"52911"},
    {"strMeal":"Summer Pudding","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rsqwus1511640214.jpg","idMeal":"52889"},
    {"strMeal":"Sweet and Sour Pork","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529442316.jpg","idMeal":"52949"},
    {"strMeal":"Szechuan Beef","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529443236.jpg","idMeal":"52950"}]
  }, {

  "T":[{"strMeal":"Tahini Lentils","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vpxyqt1511464175.jpg","idMeal":"52869"},
    {"strMeal":"Tandoori Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qptpvt1487339892.jpg","idMeal":"52806"},
    {"strMeal":"Tarte Tatin","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ryspuw1511786688.jpg","idMeal":"52909"},
    {"strMeal":"Teriyaki Chicken Casserole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg","idMeal":"52772"},
    {"strMeal":"Thai Green Curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sstssx1487349585.jpg","idMeal":"52814"},
    {"strMeal":"Three Fish Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg","idMeal":"52882"},
    {"strMeal":"Three-Cheese Souffles","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sxwquu1511793428.jpg","idMeal":"52912"},
    {"strMeal":"Timbits","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/txsupu1511815755.jpg","idMeal":"52929"},
    {"strMeal":"Toad In The Hole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ytuvwr1503070420.jpg","idMeal":"52822"},
    {"strMeal":"Tourtiere","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ytpstt1511814614.jpg","idMeal":"52926"},
    {"strMeal":"Treacle Tart","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wprvrw1511641295.jpg","idMeal":"52892"},
    {"strMeal":"Tuna Nicoise","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/yypwwq1511304979.jpg","idMeal":"52852"},
    {"strMeal":"Turkey Meatloaf","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ypuxtw1511297463.jpg","idMeal":"52845"}]
  }, {

  "U":[{"strMeal":"NONE"}]
  }, {

  "V":[{"strMeal":"Vegan Chocolate Cake","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qxutws1486978099.jpg","idMeal":"52794"},
    {"strMeal":"Vegan Lasagna","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rvxxuy1468312893.jpg","idMeal":"52775"},
    {"strMeal":"Vegetarian Casserole","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vptwyt1511450962.jpg","idMeal":"52863"},
    {"strMeal":"Vegetarian Chilli","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wqurxy1511453156.jpg","idMeal":"52867"},
    {"strMeal":"Venetian Duck Ragu","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qvrwpt1511181864.jpg","idMeal":"52838"},
    {"strMeal":"Vietnamese Grilled Pork (bun-thit-nuong)","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qqwypw1504642429.jpg","idMeal":"52828"}]
  }, {

  "W":[{"strMeal":"White Chocolate Creme Brulee","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/uryqru1511798039.jpg","idMeal":"52917"},
    {"strMeal":"Wontons","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1525876468.jpg","idMeal":"52948"}]
  }, {

  "X":[{"strMeal":"NONE"}]
  }, {

  "Y":[{"strMeal":"Yaki Udon","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrustq1511475474.jpg","idMeal":"52871"}]
  }, {

  "Z":[{"strMeal":"NONE"}]
  }]
});