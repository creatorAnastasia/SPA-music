import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store ;