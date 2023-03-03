import { WebPlugin } from '@capacitor/core';
export class AppDetailsOpenerWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async openAppInfo() {
        throw this.unimplemented;
    }
}
//# sourceMappingURL=web.js.map