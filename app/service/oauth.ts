import {Service} from 'egg';
import BaseService from './base';

/**
 * Oauth Service
 */
export default class Oauth extends BaseService {
  /**
   * 服务端初始化
   */
  public async init(){
    const myShopInfo = await this.sendShopApi('get', 'shop' , null);
    this.ctx.app.logger.info(`我的商户信息-[${JSON.stringify(myShopInfo)}]`);
    return myShopInfo;
  }


}
