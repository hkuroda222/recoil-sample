import { atom } from 'recoil';

// atomを使って初期値を設定
export const todoListAtom = atom<Array<{ title: string }>>({
  key: 'todoList', // 一意となる名前
  default: [
    {
      title: 'atomサンプル',
    },
  ],
});
