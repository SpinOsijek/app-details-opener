'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppDetailsOpener = core.registerPlugin('AppDetailsOpener', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppDetailsOpenerWeb()),
});

class AppDetailsOpenerWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async openAppInfo() {
        throw this.unimplemented;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppDetailsOpenerWeb: AppDetailsOpenerWeb
});

exports.AppDetailsOpener = AppDetailsOpener;
//# sourceMappingURL=plugin.cjs.js.map
