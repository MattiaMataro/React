import { ADD_TODO } from "../actions/todos";
import { Todo } from "../models/Todo";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        new Todo(action.title, action.description, action.isCompleted)
      ];
    default:
      return state;
  }
};
