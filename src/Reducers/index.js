import dataReducer from './dataReducer'
import isLoadingReducer from './isLoadingReducer'
import hasErroredReducer from './hasErroredReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  houses: dataReducer,
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer
})

export default rootReducer