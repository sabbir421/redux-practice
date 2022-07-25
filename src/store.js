import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import toDosReducer from "./Services/Reducer/reducer";

const store = createStore(toDosReducer,applyMiddleware(thunk))

export default store;