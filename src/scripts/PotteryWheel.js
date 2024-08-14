let pottID = 1

export const makePottery = (shape, weight, height) => {
      let pottList = {
      id: pottID,
      shape: shape,
      weight: weight,
      height: height
   }
   pottID++
   return pottList
}