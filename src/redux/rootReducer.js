// reducers.js
import { combineReducers } from "redux";
import entityReducer from "./entity/entityReducer";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    entity: entityReducer
  });
export default createRootReducer;