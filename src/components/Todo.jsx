import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  text, todos, setTodos, todo,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      return item;
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button type="button" onClick={completeHandler} className="complete-btn"><i className="fas fa-check" /></button>
      <button type="button" onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash" /></button>
    </div>
  );
};

Todo.defaultProps = {
  text: '',
  todos: [],
  setTodos: () => {},
  todo: { text: '', completed: false, id: 1 },
};

Todo.propTypes = {
  text: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  })),
  setTodos: PropTypes.func,
  todo: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number.isRequired,
  }),

};

export default Todo;
