const randomBirdId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default randomBirdId
//   getRandomInRange(1, 6)
