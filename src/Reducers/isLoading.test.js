import * as actions from '../Actions'
import isLoadingReducer from '../Reducers/isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return state if there is no action.type', () => {
    const mockState = false
    const results = isLoadingReducer(mockState, {})
    expect(results).toEqual(mockState)
  })

  it('should return a boolean if the action.type is IS_LOADING', () => {
    const mockState = false
    const mockBool = false
    const results = isLoadingReducer(mockState, actions.isLoading(mockBool))
    expect(results).toEqual(mockBool)
  })
})