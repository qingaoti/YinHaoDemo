import BaseService from './base';
// import {Workbook} from "exceljs/index";

/**
 *  商品Service
 */
export default class Product extends BaseService {
    /**
     * 处理每一条行，Cvs
     */
    public async goodsImportCvs(data) {
        // let session = {
        //   shop:"111",
        //   accessToken:"222"
        // };
        // @ts-ignore
        // const client = new Shopify.Clients.Rest(
        //     session.shop,
        //     session.accessToken
        // );
        // const response = client.get({path: 'shop'});
        // 1.创建产品
        const product = {
            product: {
                handle: data.Handle,
                title: data.Title,
                body_html: data['Body (HTML)'],
                vendor: data.Vendor,
                image_src: data['Image Src'],
                variants : [
                    {
                        option1: 'Blue',
                        option2: '155',
                        price: data['Variant Price'] || 0,
                    },
                    {
                        option1: 'Black',
                        option2: '159',
                        price: data['Variant Price'] || 0,
                    },
                ],
                options:[
                    {
                        name: data['Option1 Name'] || 'test',
                        values: ['Blue', 'Black']
                    },
                    {
                        name: data['Option2 Name'] || 'test',
                        values: ['155', '159']
                    }
                ]
            }
        };

        // https://qingaoti.myshopify.com/admin/api/2022-04/products.json
        const addRes = await this.sendShopApi('post', 'products', product);

        // 2.添加产品到集合
        const addCollect = {
            collect: {
                collection_id: this.config.collectionId,
                product_id:  addRes.product.id,
            }
        };

        //  https://qingaoti.myshopify.com/admin/api/2022-04/collects.json
        return await this.sendShopApi('post', 'collects', addCollect);
    }
}
