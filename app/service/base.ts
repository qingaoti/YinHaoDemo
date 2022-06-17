import {Service} from 'egg';
import * as _ from 'lodash';

/**
 * ShopOption
 */
interface ShopOption {
    nameSpace: string;
    method: string;
    data: any;
}

export default class BaseService extends Service {

    getRepo() {
        return this.ctx.repo;
    }

    getModel() {
        return this.ctx.model;
    }

    /**
     * 获取Helper
     */
    getHelper() {
        return this.ctx.helper;
    }

    /**
     * 调用shop服务API（HTTP）
     */
    async sendShopApi(method, nameSpace, data) {
        // tslint:disable-next-line:max-line-length
        const baseUrl = `https://${this.config.storeName}.myshopify.com/admin/api/${this.config.apiVersion}/${nameSpace}.json`;
        // @ts-ignore
        const res = await this.ctx.app.curl(baseUrl, {
            method,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': this.config.accessToken,
            },
            timeout : 10 * 1000,
            data,
            contentType: 'json',
        });
        if (!_.includes([200, 201], res.status)) {
            this.ctx.app.logger.error(`参数-[${method}:${nameSpace}:--${JSON.stringify(data)}--]`);
            throw new Error(`show调用失败${JSON.stringify(res.data)}`);
        }
        this.ctx.app.logger.info(`调用shop-[${nameSpace}] 方法,成功`);
        return res.data;
    }

    /**
     * 调用shop服务API（HTTP）
     */
    // async shopServerHttp(method: any, nameSpace: string, data: object) {
    //     // tslint:disable-next-line:max-line-length
    //     const host = `https://${this.config.storeName}.myshopify.com/admin/api/${this.config.apiVersion}/${nameSpace}.json`;
    //     const res = await this.ctx.app.curl(
    //         host,
    //         {
    //             method,
    //             data,
    //             dataType: 'json',
    //             contentType: 'json',
    //             headers: {
    //                 'X-Shopify-Access-Token': this.config.accessToken,
    //             },
    //             timeout : 10 * 1000,
    //         },
    //     );
    //     if (res.status !== 200 || (res.data.code && res.data.code !== 0)) {
    //         throw new Error('show调用失败');
    //     }
    //     return res.data;
    // }
}
