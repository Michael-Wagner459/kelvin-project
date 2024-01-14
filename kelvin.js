// This is the temperature in Kelvin
const kelvin = 0

// Celsius temperature is kelvin - 273 degrees
const celsius = kelvin - 273

// Fahrenheit is found by taking Celsius times (9/5) and then adding 32
var fahrenheit = celsius * (9/5) + 32

// This is rounding the Fahrenheit variable down to the next whole number
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

var newton = celsius * (33/100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton.`)
