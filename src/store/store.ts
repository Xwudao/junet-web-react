import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { name } from '../../package.json';
const { persistAtom } = recoilPersist({
  key: name,
});

const countState = atom<number>({
  key: 'count',
  default: 0,
  effects: [persistAtom],
});

const themeState = atom<'dark' | 'light'>({
  key: 'theme',
  default: 'light',
  effects: [persistAtom],
});

export { countState, themeState };
