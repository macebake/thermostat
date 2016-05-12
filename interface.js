$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');

$('#select-city').submit(function(event){
  event.preventDefault();
  var city = $('#city').val();
  displayWeather(city);
});


$('#increase-temp').click(function(){
  thermostat.increaseTemp(1);
  updateTemperature();
});

$('#decrease-temp').click(function(){
  thermostat.decreaseTemp(1);
  updateTemperature();
});

$('#reset-temp').click(function(){
  thermostat.resetTemp();
  updateTemperature();
});

$('#power-saving-mode-off').click(function(){
  thermostat.switchPowerSavingModeOff();
  $('#power-saving-mode').text("off");
  updateTemperature();
});

$('#power-saving-mode-on').click(function(){
  thermostat.switchPowerSavingModeOn();
  $('#power-saving-mode').text("on");
  updateTemperature();
});

function updateTemperature(){
  $('#temperature').text(thermostat.temp);
  $('#temperature').attr('class', thermostat.colorDisplay());
}

function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=076e31b7cc47309a8ebdfcc5170dccde';
  var units = '&units=metric';
  $.get(url + token + units, function(data){
    $('#city-temperature').text(data.main.temp);
  });
}

});
