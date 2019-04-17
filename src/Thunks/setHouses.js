import { isLoading, addHouses, hasErrored } from '../Actions'

export const setHouses = (url) => {
  return async (dispatch) => {
    dispatch(isLoading(true))
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(addHouses(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
} 
export default setHouses