import React from 'react';
import { RecoilRoot } from 'recoil';

import { TodoList } from './components/todoList';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Learning Recoil</h1>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
