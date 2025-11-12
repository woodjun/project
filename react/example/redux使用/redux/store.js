import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import countReducer from './reducers/count'
// thunk可以支持异步操作
import {thunk} from 'redux-thunk'
import personReducer from './reducers/person'

// combineReducers能够合并多个reducer
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default legacy_createStore(allReducer, applyMiddleware(thunk))