import {Service} from 'egg';

/**
 * Oauth Service
 */
export default class Oauth extends Service {

  /**
   * 测试登录 Shopify
   */
  public async OauthTest() {
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

    return `返回`;
  }


}
