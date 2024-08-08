// Imports go first
const { makePottery } = require('./PotteryWheel.js')


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 5)
let lamp = makePottery("Lamp", 10, 8)
let urn = makePottery("Urn", 11, 8)
let vase = makePottery("Vase", 12, 10)
let plate = makePottery("Plate", 4, 4)

console.log(mug, lamp, urn, vase, plate)
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

