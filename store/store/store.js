import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { productReducer } from '../reducers/products';


const reducers = combineReducers({
    products: productReducer
   
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk))
)