import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
    </ul>
  </div>
);

TodoList.defaultProps = {
  todos: [],
  setTodos: () => {},
  filteredTodos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number.isRequired,
  })),
  setTodos: PropTypes.func,
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number.isRequired,
  })),
};

export default TodoList;
