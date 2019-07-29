import { ADD_TASK, DELETE_TASK } from "../actions/actionTypes";

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { text: action.payload.task, key: String(Math.random()) }
        ]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          singleTask => action.payload.task !== singleTask.text
        )
      };
    default:
      return state;
  }
};

export default reducer;
