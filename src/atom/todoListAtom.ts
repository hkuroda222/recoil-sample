import { atom } from 'recoil';

// atomを使って初期値を設定
export const todoListAtom = atom({
  key: 'todoList', // 一意となる名前
  default: [
    {
      id: 0,
      title: 'atomサンプル',
      isComplete: false,
    },
  ],
});
