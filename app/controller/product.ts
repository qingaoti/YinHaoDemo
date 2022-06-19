import * as csv from '@fast-csv/parse';
import {ResourceRoute} from '../decorator/router_register';
import BaseController from './base';

/**
 * @controller 商品
 */
export default class ProductController extends BaseController {
    /**
     * @summary 批量导入商品,cvs格式
     * @description 按照模板导入
     * @router post /product/import/cvs
     * @file file oriUrl 链接地址 - example:'https://www.bilibili.com/video/BV1TS4y1S75Q?spm_id_from=444.41.0.0'
     * @response 0 successRst 返回结果
     */
    @ResourceRoute('/product/import/cvs', 'post')
    async goodsImportCvs() {
        const _this = this;
        const stream = await this.ctx.getFileStream();
        // const fileSize = this.ctx.request.req.headers['content-length'];

        const qList: any = [];

        // const strArr: string[] = [
        //   // tslint:disable-next-line:max-line-length
        //     'handle', 'title', 'body_html', 'vendor', 'type', 'tags', 'published', 'option1 name', 'option1 value', 'option2 name', 'option2 value', 'option3 name', 'option3 value',
        //     'variant sku', 'variant grams', 'variant inventory tracker', 'variant inventory qty', 'variant inventory policy', 'variant fulfillment service', 'variant price',
        //     'variant compare at price', 'variant requires shipping', 'variant taxable', 'variant barcode', 'image src',
        // ];
        await csv.parseStream(stream, {headers: true})
            .on('data', (data) => {
                // _this.ctx.app.logger.info(`i am one line of data`,data);
                qList.push(_this.service.product.goodsImportCvs(data));
            })
            .on('end', (data: any) => {
                _this.ctx.app.logger.info(`导入任务执行完成,处理了${data}个任务`);
            });
        const result = await Promise.all(qList);
        this.res({
            data: result,
        });
    }
}
