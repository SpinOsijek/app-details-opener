import { registerPlugin } from '@capacitor/core';

import type { AppDetailsOpenerPlugin } from './definitions';

const AppDetailsOpener = registerPlugin<AppDetailsOpenerPlugin>('AppDetailsOpener', {
  web: () => import('./web').then(m => new m.AppDetailsOpenerWeb()),
});

export * from './definitions';
export { AppDetailsOpener };
