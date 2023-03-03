import { registerPlugin } from '@capacitor/core';
const AppDetailsOpener = registerPlugin('AppDetailsOpener', {
    web: () => import('./web').then(m => new m.AppDetailsOpenerWeb()),
});
export * from './definitions';
export { AppDetailsOpener };
//# sourceMappingURL=index.js.map