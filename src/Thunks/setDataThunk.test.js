import { setDataThunk } from './setDataThunk'
import * as actions from '../Actions'

describe('setDataThunk', () => {
  let mockDispatch
  let mockUrl;
  beforeEach(() => {
    mockDispatch = jest.fn()
    mockUrl = 'www.url.com';
  })

  it('should dispatch isLoading(true)', () => {
    const thunk = setDataThunk(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(true))
  })

  it('should dispatch hasErrored', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusTest: 'Something went wrong'
    }))
    const thunk = setDataThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.hasErrored('Something went wrong'))
  })

  it('should dispatch addHouses', async () => {
    const houses = [{}, {}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( houses)
    }))
    const thunk = setDataThunk(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.addHouses(houses))
  })
})
