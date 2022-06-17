import { Application } from 'egg';
import { initRouter } from './decorator/router_register';

export default (app: Application) => {
  const { controller, router } = app;

  //根路由
  router.get('/', controller.home.index);

  // 服务存活接口
  router.get('/healthy', controller.home.healthy);

  // 使用@Route进行注册路由
  initRouter(app);
};
