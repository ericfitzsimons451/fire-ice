import { App, mapDispatchToProps, mapStateToProps } from '../App/App'
import setDataThunk from '../../Thunks/setDataThunk'
jest.mock('../../Thunks/setDataThunk')

describe('App', () => {
  it('should mapStateToProps', () => {
    const mockState = {}
    expect(mockState).toEqual({})
    const updatedState = {
      houses: [{}, {}],
      isLoading: false,
      hasErrored: ''
    }

    const results = mapStateToProps(updatedState)
    expect(results).toEqual(updatedState)
  })

  it('should dispatch setDataThunk when props.setData is called', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'www.url.com'
    const actionToDispatch = setDataThunk(mockUrl)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setData(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})