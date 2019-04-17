import * as actions from '../Actions'

describe('isLoading', () => {
  it('should take in a boolean and return an object', () => {
    const mockBool = false
    const results = actions.isLoading(mockBool)
    const expected = {
      type: 'IS_LOADING',
      isLoading: mockBool
    }
    expect(results).toEqual(expected)
  })
})

describe('hasErrored', () => {
  it('should take in a message and return an object with a message and a type', () => {
    const message = "wrds"
    const results = actions.hasErrored(message)
    const expected = {
      type: 'HAS_ERRORED',
      message
    }
    expect(results).toEqual(expected)
  })
})

describe('addHouses', () => {
  it('should take in an array of house objects and return an object w a type and a houses array', () => {
    const mockArray = [{}, {}]
    const results = actions.addHouses(mockArray)
    const expected = {
      type: 'ADD_HOUSES',
      houses: mockArray
    }
    expect(results).toEqual(expected)
  })
}