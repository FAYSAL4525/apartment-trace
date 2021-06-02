import { createStore,combineReducers, } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import apartmentReducer from "./reducers/reducerApartment"

const combinedReducers = combineReducers({
    apartments : apartmentReducer,
})

export const store = createStore(combinedReducers,composeWithDevTools())