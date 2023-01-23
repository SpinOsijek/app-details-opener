import { WebPlugin } from '@capacitor/core';

import type { AppDetailsOpenerPlugin } from './definitions';

export class AppDetailsOpenerWeb extends WebPlugin implements AppDetailsOpenerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openAppInfo(): Promise<void> {
      throw this.unimplemented;
  }
}
