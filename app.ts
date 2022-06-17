/**
 * Application
 */

import { Application, Context, IBoot } from 'egg';

export default class AdminBoot implements IBoot {
    private readonly ctx: Context;

    constructor(app: Application) {
        // this.app = app;
        this.ctx = app.createAnonymousContext();
    }

    configWillLoad() {
        // Ready to call configDidLoad,
        // Config, plugin files are referred,
        // this is the last chance to modify the config.
    }

    configDidLoad() {
        // Config, plugin files have loaded.
    }

    async didLoad() {
        // All files have loaded, start plugin here.
        this.ctx.app.logger.info(`初始化商户认证`);
    }

    async willReady() {
        // All plugins have started, can do some thing before app ready.
    }

    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
    }

    async serverDidReady() {
        // Server is listening.
    }

    async beforeClose() {
        // Do some thing before app close.
    }
}
