const { reorderSpaces } = require('../code/reorderSpaces')

it('text = "  this   is  a sentence "', () => {
  expect(reorderSpaces('  this   is  a sentence ')).toBe('this   is   a   sentence')
})

it('"hello   world"', () => {
  expect(reorderSpaces('hello   world')).toBe('hello   world')
})

it('"  walks  udp package   into  bar a"', () => {
  expect(reorderSpaces('  walks  udp package   into  bar a')).toBe('walks  udp  package  into  bar  a ')
})

it('a', () => {
  expect('a').toBe('a')
})

it('"hello"', () => {
  expect(reorderSpaces('hello  ')).toBe('hello ')
})
