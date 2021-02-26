import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import gameReducer from "./game-reducer";

let reducers = combineReducers({
    game: gameReducer,
});
type reducersType = typeof reducers;
export type AppStateType = ReturnType<reducersType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
