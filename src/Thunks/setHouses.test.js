import { setHouses } from './setHouses'
import * as actions from '../Actions'

describe.skip('setHouses', () => {
  let mockDispatch
  let mockUrl;
  beforeEach(() => {
    mockDispatch = jest.fn()
    mockUrl = 'www.url.com';
  })

  it('should dispatch isLoading(true)', () => {
    const thunk = setHouses(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(true))
  })

  it('should dispatch hasErrored', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusTest: 'Something went wrong'
    }))
    const thunk = setHouses(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.hasErrored('Something went wrong'))
  })

  it('should dispatch addHouses', async () => {
    let houses = [{}, {}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(houses)
    }))
    const thunk = setHouses(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(actions.addHouses(houses))
  })
})
