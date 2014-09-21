[![Code Climate](https://codeclimate.com/github/nikeshashar/Thermostat/badges/gpa.svg)](https://codeclimate.com/github/nikeshashar/Thermostat)

##What is it?
+ A simple Javascript thermostat that is fully tested using Jasmine and Javascript.

##Specifications:

1. Thermostat starts at 20 degrees
2. You can increase the temp with the up arrow
3. You can decrease the temp with the down arrow
4. The minimum temperature is 10 degrees
5. There is a Power Saving Mode (PSM) option
6. If PSM is on, the maximum temperature is 25 degrees
7. If PSM is off, the maximum temperature is 32 degrees
8. You can reset the temperature by pressing the reset button
9. The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
10. After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

## Technologies Used:

  + Javascript
  + Jasmine
  + HTML
  + CSS
  

### How to see it in action


```sh
git clone git@github.com:nikeshashar/Thermostat.git
cd Thermostat
open index.html
```

### How to test it


```sh
open SpecRunner.html
```

