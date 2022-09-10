const { trimBST } = require('../code/trimBST')
const { generatorTree } = require('../utils/tree/class')
it('root = [1,0,2], low = 1, high = 2', () => {
  expect(trimBST(generatorTree([1, 0, 2]), 1, 2)).toEqual(generatorTree([1, null, 2]))
})

it('root = [1,0,2], low =0 , high = 1', () => {
  expect(trimBST(generatorTree([1, 0, 2]), 0, 1)).toEqual(generatorTree([1, 0]))
})

it('root = [3,0,4,null,2,null,null,1], low = 1, high = 3', () => {
  expect(trimBST(generatorTree([3, 0, 4, null, 2, null, null, 1, 3]), 1, 2)).toEqual(generatorTree([3, 2, null, 1]))
})

it('[3,0,4,null,2,null,null,1],0 ,1', () => {
  expect(trimBST(generatorTree([3, 0, 4, null, 2, null, null, 1]), 0, 1)).toEqual(generatorTree([0, null, 1]))
})
