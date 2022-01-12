import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DrinkService from './js/drink-service.js';


function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
  $('.showTitle').text("");
}

$('#drinkSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = DrinkService.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let imageOfTheDay = body.drinks[0].strDrinkThumb;
    $('#imageToShow').attr("src", imageOfTheDay);
    let imageTitle = body.drinks[0].strDrink;
    $('.showTitle').text(imageTitle);
  });
});