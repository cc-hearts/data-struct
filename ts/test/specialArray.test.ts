const { specialArray } = require('../code/specialArray')
it('params [3, 5] result 2', () => {
  expect(specialArray([3, 5])).toBe(2)
})

it('param [1000], result 1', () => {
  expect(specialArray([1000])).toBe(1)
})

it('param [0, 0] result -1', () => {
  expect(specialArray([0, 0])).toBe(-1)
})

it('param [0, 4, 3, 0, 4] result 3', () => {
  expect(specialArray([0, 4, 3, 0, 4])).toBe(3)
})
