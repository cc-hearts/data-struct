import reformatNumber from '../code/reformatNumber'

it('case 1', () => {
  expect(reformatNumber('1-23-45 6')).toBe('123-456')
})

it('case 2', () => {
  expect(reformatNumber('--17-5 229 35-39475 ')).toBe('175-229-353-94-75')
})
