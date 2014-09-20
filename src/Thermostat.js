function Thermostat() {
  this.temperature = 20
  this.powerSavingMode = true
}

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < this.maximumTemperature()) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.temperature > 10) this.temperature -= 1;
};

Thermostat.prototype.maximumTemperature = function() {
  if(this.powerSavingMode) return 25;
  return 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) return ('efficient')
};