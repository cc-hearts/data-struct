const { fourSum } = require('../code/fourSum')

it('case nums = [1,0,-1,0,-2,2], target = 0', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ])
})

it('case nums = [2,2,2,2,2], target = 8', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ])
})

it('case nums = [-2,-1,-1,1,1,2,2], 0', () => {
  expect(fourSum([-2, -1, -1, 1, 1, 2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-1, -1, 1, 1],
  ])
})
