import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "./reducers/tasks";

const middleware = [thunk];

const rootReducer = combineReducers({
  tasks: tasksReducer
});

const composed = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composed(applyMiddleware(...middleware))
);

export default store;

// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import tasksReducer from "./reducers/tasks";

// const middleware = [thunk];

// const rootReducer = combineReducers({
//   tasks: tasksReducer
// });

// const store = createStore(
//   rootReducer,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(...middleware)
//   )
// );

// export default store;
