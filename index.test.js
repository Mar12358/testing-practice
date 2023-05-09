const { stringLength, reverseString } = require('./index.js')

it('test1Word', () => {
  expect(stringLength('test1Word')).toBe(9)
})

it('length restrictions', () => {
  expect(() => stringLength('')).toThrow(/must be bigger/)
  expect(() => stringLength('12345678910')).toThrow(/must be bigger/)
  expect(stringLength('1234567891')).toBe(10)
})

it('reverse hello to olleh', () => {
  expect(reverseString('hello')).toBe('olleh')
})


