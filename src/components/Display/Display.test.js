import { App, mapDispatchToProps, mapStateToProps } from '../App/App'
import setHouses from '../../Thunks/setHouses'
jest.mock('../../Thunks/setHouses')

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

  it('should dispatch setHouses when props.setData is called', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'www.url.com'
    const actionToDispatch = setHouses(mockUrl)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setData(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})