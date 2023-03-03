import { WebPlugin } from '@capacitor/core';
import type { AppDetailsOpenerPlugin } from './definitions';
export declare class AppDetailsOpenerWeb extends WebPlugin implements AppDetailsOpenerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openAppInfo(): Promise<void>;
}
