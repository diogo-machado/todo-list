import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  inputText, setInputText, todos, setTodos, setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!inputText) {
      return 'empty';
    }
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form action="">
      <div className="control">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square" />
        </button>
      </div>

      <div className="select">
        <select onChange={statusHandler} name="" id="" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

Form.defaultProps = {
  inputText: '',
  todos: [],
  setTodos: () => {},
  setStatus: () => {},
};

Form.propTypes = {
  inputText: PropTypes.string,
  setInputText: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number.isRequired,
  })),
  setTodos: PropTypes.func,
  setStatus: PropTypes.func,
};

export default Form;
