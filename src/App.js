import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;