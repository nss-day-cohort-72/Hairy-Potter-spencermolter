let pottID = 1

let makePottery = (shape, weight, height) =>{
   let pottList = {
    id: pottID,
    shape: shape,
    weight: weight,
    height: height
   }
   pottID++
   return pottList
}

module.exports = { makePottery }