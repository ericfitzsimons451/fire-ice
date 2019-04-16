import * as actions from '../Actions'
import hasErroredReducer from '../Reducers/hasErroredReducer'


describe('hasErroredReducer', () => {
  it('should return state if there is no action.type', () => {
    const mockState = {}
    const results = hasErroredReducer(mockState, {})
    expect(results).toEqual(mockState)
  })

  it('should return a houses array if the action.type is ADDHOUSES', () => {
    const mockState = {}
    const mockMessage = 'words'
    const results = hasErroredReducer(mockState, actions.hasErrored(mockMessage))
    expect(results).toEqual(mockMessage)
  })
})