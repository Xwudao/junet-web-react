import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { name } from '../../package.json';
const { persistAtom } = recoilPersist({
  key: name,
});

const count = atom<number>({
  key: 'count',
  default: 0,
  effects: [persistAtom],
});

export { count };
