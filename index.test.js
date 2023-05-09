const { default: expect } = require('expect')
const { stringLength, reverseString, calculator, capitalize } = require('./index.js')
const { describe } = require('jest-circus')

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

describe('addition', () => {
  test('add 0 + 0', () => {
    expect(calculator.add(0, 0)).toBe(0)
  })
  test('add 0+85', () => {
    expect(calculator.add(0, 85)).toBe(85)
  })
  test('add 86+0', () => {
    expect(calculator.add(86, 0)).toBe(86)
  })
  test('add 86+4', () => {
    expect(calculator.add(86, 4)).toBe(90)
  })  
})

describe('substraction', () => {
  test('substract 7 - 7', () => {
    expect(calculator.substract(7, 7)).toBe(0)
  })
  test('substract 0 - 45', () => {
    expect(calculator.substract(0, 45)).toBe(-45)
  })
  test('substract 80 - 5', () => {
    expect(calculator.substract(80, 5)).toBe(75)
  })
})

describe('multiplication', () => {
  test('multiply -2 * 5', () => {
    expect(calculator.multiply(-2, 5)).toBe(-10)
  })
  test('multiply 0 * 1', () => {
    expect(calculator.multiply(0, 1)).toBe(0)
  })
  test('multiply 5 * 5', () => {
    expect(calculator.multiply(5, 5)).toBe(25)
  })
})

describe('division', () => {
  test('divide 10 / 5', () => {
    expect(calculator.divide(10, 5)).toBe(2)
  })
  test('divide 0 / 5', () => {
    expect(calculator.divide(0, 5)).toBe(0)
  })
  test('divide 5 / 5', () => {
    expect(calculator.divide(5, 5)).toBe(1)
  })
})

test('Returns first letter capitalized', () =>{
  expect(capitalize('hello')).toBe('Hello')
})