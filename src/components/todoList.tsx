import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListAtom } from '../atom/todoListAtom';

export const TodoList = () => {
  // useRecoilValueを使ってatomを引用する
  const todoList = useRecoilValue(todoListAtom);
  {
    console.log(todoList);
  }
  return (
    <div>
      <span></span>
    </div>
  );
};
