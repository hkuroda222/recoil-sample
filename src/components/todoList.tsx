import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListAtom } from '../atom/todoListAtom';
import { todoListSelector } from '../selector/todoList';

export const TodoList: React.FC = () => {
  // useRecoilValueを使ってatomを引用する(read only)
  const todoList = useRecoilValue(todoListAtom);
  const totalNum = useRecoilValue(todoListSelector);

  console.log(todoList);
  console.log(totalNum);

  return (
    <div>
      <span>{totalNum}件</span>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
