let potterySell = []

let toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        }
        else {
            pottery.price = 20
        }
        potterySell.push(pottery)
    }
    return pottery
}
let usePottery = () => {
    return potterySell.slice()
}
module.exports = { toSellOrNotToSell }