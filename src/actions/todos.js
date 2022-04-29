export const ADD_TODO = "ADD_TODO";

export const addTodo = (title, description, isCompleted) => {
  return {
    description,
    isCompleted,
    title,
    type: ADD_TODO
  };
};
