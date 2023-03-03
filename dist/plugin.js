var capacitorAppDetailsOpener = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
