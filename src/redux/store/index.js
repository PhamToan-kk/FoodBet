import { createStore,combineReducers,applyMiddleware} from 'redux'

import {rootReducers} from '../reducers'

export const store = createStore(rootReducers)
