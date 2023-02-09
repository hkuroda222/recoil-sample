import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { todoListAtom } from 'recoil/atom/todoListAtom';
import { todoListSelector } from 'recoil/selector/todoList';

export const TodoList: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  // useRecoilValueを使ってatomを引用する(read only)
  const totalNum = useRecoilValue(todoListSelector);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const createTodoItem = () =>
    setTodoList((prev) => [...prev, { title: text }]);

  return (
    <div>
      <input type="text" onChange={handleChangeText} />
      <button onClick={createTodoItem}>保存</button>
      <div>{totalNum}件</div>
      <ul>
        {todoList.map((item, i) => (
          <li key={`todo-${i}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
