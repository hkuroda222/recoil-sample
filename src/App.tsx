import { RecoilRoot } from 'recoil';

import { TodoList } from './components/todoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>Learning Recoil</h1>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
