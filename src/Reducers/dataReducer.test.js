import * as actions from '../Actions'
import dataReducer from '../Reducers/dataReducer'

describe('dataReducer', () => {
  it('should return state if there is no action.type', () => {
    const mockState = {}
    const results = dataReducer(mockState, {})
    expect(results).toEqual(mockState)
  })

  it('should return a houses array if the action.type is ADDHOUSES', () => {
    const mockState = {}
    const mockHouses = [{}, {}]
    const results = dataReducer(mockState, actions.addHouses(mockHouses))
    expect(results).toEqual(mockHouses)
  })
})