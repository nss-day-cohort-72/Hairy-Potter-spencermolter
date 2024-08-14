let potterySell = []

export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        } else {
            pottery.price = 20
        }
        potterySell.push(pottery)
    }
    return pottery
}

export const usePottery = () => {
    return potterySell.slice()
}