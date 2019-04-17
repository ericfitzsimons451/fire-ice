import * as actions from '../Actions'
import hasErroredReducer from '../Reducers/hasErroredReducer'


describe('hasErroredReducer', () => {
  it('should return state if there is no action.type', () => {
    const mockState = ''
    const results = hasErroredReducer(mockState, {})
    expect(results).toEqual(mockState)
  })

  it('should return an error message if the action.type is HAD_ERRORED', () => {
    const mockState = ''
    const mockMessage = 'Tons of problems'
    const results = hasErroredReducer(mockState, actions.hasErrored(mockMessage))
    expect(results).toEqual(mockMessage)
  })
})