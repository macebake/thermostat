'use strict';

function Thermostat() {
  this.temp = 20;
  this.powerSavingMode = true;
  this.MINTEMP = 10;
  this.PSM_MAXIMUM_TEMP = 25;
  this.NO_PSM_MAXIMUM_TEMP = 32;
}

Thermostat.prototype.colorDisplay = function(){
  if (this.temp > 25) {
    return 'Red';
  } else if (this.temp < 18) {
    return 'Green';
  } else {
    return 'Yellow';
  }
};

Thermostat.prototype.minTemp = function(){
  return this.MINTEMP;
};

Thermostat.prototype.maxTemp = function(){
  if (this.powerSavingMode === true){
    return this.PSM_MAXIMUM_TEMP;
  } else {
    return this.NO_PSM_MAXIMUM_TEMP;
  }
};

Thermostat.prototype.increaseTemp = function(num){
  if((this.temp + num) > this.maxTemp()) {
    throw new Error("Target temp exceeds maximum.");
  } else {
    this.temp += num;
  }
};

Thermostat.prototype.decreaseTemp = function(num){
  if((this.temp - num) < this.minTemp()) {
    throw new Error("Target temp is below minimum.");
  } else {
  this.temp -= num;
  }
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
};
