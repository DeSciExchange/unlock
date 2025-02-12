import { camelCaseToTitle, getValidNumber } from '../../utils/strings'

describe('camelCaseToTitle helper', () => {
  it('transforms itself', () => {
    expect.assertions(1)
    expect(camelCaseToTitle('camelCaseToTitle')).toEqual('Camel Case To Title')
  })
})

describe('getValidNumber helper', () => {
  it('transform a string with only number to number', () => {
    expect.assertions(3)
    expect(getValidNumber('10')).toBe(10)
    expect(getValidNumber('100')).toBe(100)
    expect(getValidNumber('192')).toBe(192)
  })

  it('returns undefined when a string with letters is passerdr', () => {
    expect.assertions(3)
    expect(getValidNumber('10x')).toBe(undefined)
    expect(getValidNumber('1zx1100')).toBe(undefined)
    expect(getValidNumber('0x4Ff5A116Ff945cC744346cFd32c6C6e3d3a018Ff')).toBe(
      undefined
    )
  })
})
