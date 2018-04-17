export function createIntRandom (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
