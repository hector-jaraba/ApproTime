import { createStore } from 'redux'
import cocktailsReducer from './reducers'
export * from './actions'
export * from './selectors'

const store = createStore(cocktailsReducer)

export default store
