


import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as productReducer } from './ProductReducer/reducer'




 const rootReducer = combineReducers({
    productReducer,
    AdminReducer,
    
 })



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

