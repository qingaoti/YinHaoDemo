import {Controller} from 'egg';

/**
 * 页面
 */
export default class HomeController extends Controller {
  /**
   * 首页
   */
  public async index() {
    await this.ctx.render('home');
  }

  /**
   * 此接口只做服务存活监听使用
   */
  public async healthy(){
    this.ctx.body = 'healthy';
  }
}
