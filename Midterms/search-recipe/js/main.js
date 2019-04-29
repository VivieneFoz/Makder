$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getRecipes(searchText);
        e.preventDefault();
    })
});

function getRecipes(searchText){
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchText)
    .then((response) => {
        console.log(response);
        let recipes = response.data.meals;
        let output = '';
        $.each(recipes, (index, recipe) => {
            output += `
            <div class="col-md-3">
                <div class="well text-center">
                <img src="${recipe.strMealThumb}">
                <h5>${recipe.strMeal}</h5>
                <a onclick="recipeSelected('${recipe.idMeal}')" class="btn btn-primary" href="#">Recipe Details</a>
                </div>
            </div>
            `;
           
        });
        $('#recipes').html(output);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function recipeSelected(id){
    sessionStorage.setItem('recipeId' , id);
    window.location = 'recipe.html';
    return false;
}

function getRecipe(){
    let recipeId = sessionStorage.getItem('recipeId');

    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId)
    .then((response) => {
        console.log(response);
        let recipe = response.data.meals[0];

        let output =`
        <div class="row">
            <div class="col-md-4">
                <img src="${recipe.strMealThumb}" class="thumbnail">
                <br><br>
                
            </div>
            <div class="col-md-8">
                <h2>${recipe.strMeal}</h2>
                <b>Ingredients:</b>
                <table>
					<tr>
						<td>${recipe.strMeasure1}</td>
                        <td><b>${recipe.strIngredient1}</b></td>
                        <td>${recipe.strMeasure11}</td>
                        <td><b>${recipe.strIngredient11}</b></td>
                    </tr>
                    <tr>
						<td>${recipe.strMeasure2}</td>
                        <td><b>${recipe.strIngredient2}</b></td>
                        <td>${recipe.strMeasure12}</td>
                        <td><b>${recipe.strIngredient12}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure3}</td>
                        <td><b>${recipe.strIngredient3}</b></td>
                        <td>${recipe.strMeasure13}</td>
                        <td><b>${recipe.strIngredient13}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure4}</td>
                        <td><b>${recipe.strIngredient4}</b></td>
                        <td>${recipe.strMeasure14}</td>
                        <td><b>${recipe.strIngredient14}</b></td>
                    </tr>
                     <tr>
                        <td>${recipe.strMeasure5}</td>
                        <td><b>${recipe.strIngredient5}</b></td>
                        <td>${recipe.strMeasure15}</td>
                        <td><b>${recipe.strIngredient15}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure6}</td>
                        <td><b>${recipe.strIngredient6}</b></td>
                        <td>${recipe.strMeasure16}</td>
                        <td><b>${recipe.strIngredient16}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure7}</td>
                        <td><b>${recipe.strIngredient7}</b></td>
                        <td>${recipe.strMeasure17}</td>
                        <td><b>${recipe.strIngredient17}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure8}</td>
                        <td><b>${recipe.strIngredient8}</b></td>
                        <td>${recipe.strMeasure18}</td>
                        <td><b>${recipe.strIngredient18}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure9}</td>
                        <td><b>${recipe.strIngredient9}</b></td>
                        <td>${recipe.strMeasure19}</td>
                        <td><b>${recipe.strIngredient19}</b></td>
                    </tr>
                    <tr>
                        <td>${recipe.strMeasure10}</td>
                        <td><b>${recipe.strIngredient10}</b></td>
                        <td>${recipe.strMeasure20}</td>
                        <td><b>${recipe.strIngredient20}</b></td>
                    </tr>
                </table
            </div>
        </div>

        <div id="instructions">
             <p>${recipe.strInstructions}</p>
        </div>
        `;

        $('#recipe').html(output);
        
    })
    .catch((err) => {
        console.log(err);
    });

}