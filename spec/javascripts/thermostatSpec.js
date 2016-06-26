'use strict';


describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.powerSavingMode).toBeTruthy();
  });

  it('turns power saving mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(this.powerSavingMode).toBeFalsy();
  });

  it('has a max temp of 25C when power saving mode is on', function() {
    expect(thermostat.maxTemp()).toEqual(25);
  });

  it('has a min temp of 10C at all times', function() {
    expect(thermostat.minTemp()).toEqual(10);
  });

  it('has a max temp of 32C when power saving mode is off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.maxTemp()).toEqual(32);
  });

  it('increases temperature by 3C with increaseTemp', function() {
    thermostat.resetTemp();
    thermostat.increaseTemp(3);
    expect(thermostat.temp).toEqual(23);
  });

  it('decreases temperature by 5C with decreaseTemp', function() {
    thermostat.decreaseTemp(5);
    expect(thermostat.temp).toEqual(15);
  });

  it('resets the temperature to 20C on reset', function() {
    thermostat.resetTemp();
    expect(thermostat.temp).toEqual(20);
  });

  it('does not increase temperature past max temp - power saving on', function(){
    expect(function(){thermostat.increaseTemp(10);}).toThrowError("Target temp exceeds maximum.");
  });

  it('does not increase temperature past max temp - power saving mode off', function() {
    spyOn(thermostat, 'maxTemp').and.returnValue(32);
    expect(function(){thermostat.increaseTemp(14);}).toThrowError("Target temp exceeds maximum.");

  });

  it('does not decrease temperature below min temp', function(){
    expect(function(){thermostat.decreaseTemp(40);}).toThrowError("Target temp is below minimum.");
  });

  it('displays yellow if temperature is between 18C and 25C', function(){
    expect(thermostat.colorDisplay()).toEqual('Yellow');
  });

  it('displays red if temperature exceeds 25C', function(){
    spyOn(thermostat, 'maxTemp').and.returnValue(32);
    thermostat.increaseTemp(7);
    expect(thermostat.colorDisplay()).toEqual('Red');
  });

  it('displays green if temperature is under 18C', function(){
    thermostat.decreaseTemp(9);
    expect(thermostat.colorDisplay()).toEqual('Green');
  });

});
