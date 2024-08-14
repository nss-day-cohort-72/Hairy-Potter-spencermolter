// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 5)
let lamp = makePottery("Lamp", 10, 8)
let urn = makePottery("Urn", 11, 8)
let vase = makePottery("Vase", 12, 10)
let plate = makePottery("Plate", 4, 4)

console.log(mug, lamp, urn, vase, plate)
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2300)
lamp = firePottery(lamp, 2100)
urn = firePottery(urn, 2200)
vase = firePottery(vase, 2400)
plate = firePottery(plate, 2000)

console.log(mug, lamp, urn, vase, plate)
// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
lamp = toSellOrNotToSell(lamp)
urn = toSellOrNotToSell(urn)
vase = toSellOrNotToSell(vase)
plate = toSellOrNotToSell(plate)

console.log(mug, lamp, urn, vase, plate)
// Invoke the component function that renders the HTML list
const potteryWebList = document.querySelector('.potteryList')
const potteryHTML = potteryList()
potteryWebList.innerHTML = potteryHTML
