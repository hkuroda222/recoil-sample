import React from 'react';
import { RecoilRoot } from 'recoil';

import { TodoList } from './components/todoList';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
        <h1>Learning Recoil</h1>
      </div>
    </RecoilRoot>
  );
}

export default App;
