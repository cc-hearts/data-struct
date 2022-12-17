const { canChoose } = require('../code/canChoose')

it('[[1,-1,-1],[3,-2,0]] [1,-1,0,1,-1,-1,3,-2,0]', () => {
  expect(
    canChoose(
      [
        [1, -1, -1],
        [3, -2, 0],
      ],
      [1, -1, 0, 1, -1, -1, 3, -2, 0]
    )
  ).toEqual(true)
})

it('[[10,-2],[1,2,3,4]] [1,2,3,4,10,-2]', () => {
  expect(
    canChoose(
      [
        [10, -2],
        [1, 2, 3, 4],
      ],
      [1, 2, 3, 4, 10, -2]
    )
  ).toEqual(false)
})
