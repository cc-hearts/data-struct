const { minOperations } = require('../code/minOperations')

it('logs = ["d1/","d2/","../","d21/","./"]', () => {
  expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2)
})

it('logs = ["d1/","d2/","./","d3/","../","d31/"]', () => {
  expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3)
})

it('logs = ["d1/","../","../","../"]', () => {
  expect(minOperations(['d1/', '../', '../', '../'])).toBe(0)
})
