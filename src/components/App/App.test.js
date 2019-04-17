import React from 'react'
import { App, mapStateToProps, mapDispatchToProps} from './App'
import { shallow } from 'enzyme'
import setDataThunk from '../../Thunks/setDataThunk'
jest.mock('../../Thunks/setDataThunk')

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should mapStateToProps', () => {
      const mockState = {}
      const updatedState = {
        isLoading: false,
        hasErrored: '',
        houses: [{}, {}]
      }
      const firstState = mapStateToProps(mockState)
      expect(firstState).toEqual(mockState)
      const newState = mapStateToProps(updatedState)
      expect(newState).toEqual(updatedState)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch(setDataThunk) when a props function is triggered', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'www.url.com'
      const actionToDispatch = setDataThunk(mockUrl)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setData(mockUrl)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})