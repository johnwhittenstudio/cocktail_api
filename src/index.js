import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DrinkService from './js/drink-service.js';


function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
  $('.showName').text("");
}

$('#drinkSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = DrinkService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let drinkImage = body.drinks[0].strDrinkThumb;
    $('#imageToShow').attr("src", drinkImage);
    let drinkName = body.drinks[0].strDrink;
    $('.showName').text(drinkName);
    // Ingredients
    let drinkIngredient1 = body.drinks[0].strIngredient1;
    $('.showIngredient1').text(drinkIngredient1);
    let drinkIngredient2 = body.drinks[0].strIngredient2;
    $('.showIngredient2').text(drinkIngredient2);
    let drinkIngredient3 = body.drinks[0].strIngredient3;
    $('.showIngredient3').text(drinkIngredient3);
    let drinkIngredient4 = body.drinks[0].strIngredient4;
    $('.showIngredient4').text(drinkIngredient4);
    let drinkIngredient5 = body.drinks[0].strIngredient5;
    $('.showIngredient5').text(drinkIngredient5);
    let drinkIngredient6 = body.drinks[0].strIngredient6;
    $('.showIngredient6').text(drinkIngredient6);
    // Measurements strMeasure1
    let drinkMeasurement1 = body.drinks[0].strMeasure1;
    $('.showMeasurement1').text(drinkMeasurement1);
    let drinkMeasurement2 = body.drinks[0].strMeasure2;
    $('.showMeasurement2').text(drinkMeasurement2);
    let drinkMeasurement3 = body.drinks[0].strMeasure3;
    $('.showMeasurement3').text(drinkMeasurement3);
    let drinkMeasurement4 = body.drinks[0].strMeasure4;
    $('.showMeasurement4').text(drinkMeasurement4);
    let drinkMeasurement5 = body.drinks[0].strMeasure5;
    $('.showMeasurement5').text(drinkMeasurement5);
    let drinkMeasurement6 = body.drinks[0].strMeasure6;
    $('.showMeasurement6').text(drinkMeasurement6);
    // Instructions
    let drinkInstructions = body.drinks[0].strInstructions;
    $('.showInstructions').text(drinkInstructions);
    $('.footer').show();
  });
});