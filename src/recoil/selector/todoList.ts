import { selector } from 'recoil';

import { todoListAtom } from 'recoil/atom/todoListAtom';

// atomの状態を操作したい場合にselectorを使用する
// get関数でatomやselectorにアクセスできる
// set関数でatomの値を更新できる
export const todoListSelector = selector<number>({
  key: 'todoListSelector',
  get: ({ get }) => {
    const totalNum = get(todoListAtom).length;
    return totalNum;
  },
});
