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
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form action="">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
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

Form.propTypes = {
  setInputText: PropTypes.func.isRequired,
};

export default Form;
