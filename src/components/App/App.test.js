import React from 'react'
import { App, mapStateToProps, mapDispatchToProps} from './App'
import { shallow } from 'enzyme'
import setHouses from '../../Thunks/setHouses'
jest.mock('../../Thunks/setHouses')

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
    it('should call dispatch(setHouses) when a props function is triggered', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'www.url.com'
      const actionToDispatch = setHouses(mockUrl)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setData(mockUrl)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})