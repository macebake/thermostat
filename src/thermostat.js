function Thermostat() {
  this.temp = 20;
  this.powerSavingMode = true;
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
  return 10;
};

Thermostat.prototype.maxTemp = function(){
  if (this.powerSavingMode === true){
    return 25;
  } else {
    return 32;
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

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = 20;
};
