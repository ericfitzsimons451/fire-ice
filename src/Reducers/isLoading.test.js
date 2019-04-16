import * as actions from '../Actions'
import isLoadingReducer from '../Reducers/isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return state if there is no action.type', () => {
    const mockState = {}
    const results = isLoadingReducer(mockState, {})
    expect(results).toEqual(mockState)
  })

  it('should return a houses array if the action.type is ADDHOUSES', () => {
    const mockState = {}
    const mockBool = false
    const results = isLoadingReducer(mockState, actions.isLoading(mockBool))
    expect(results).toEqual(mockBool)
  })
})