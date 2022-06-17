import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';
import * as path from 'path';

// 上传相关的用例
describe('/product/import/cvs', () => {
  // @ts-ignore
  it('正常上传cvs -upload case1', async () => {
    const result = await app.httpRequest()
        .post('/product/import/cvs')
        .field('name', 'icon_1')
        .attach('file', path.join(__dirname, '../files/demo.csv'));
    assert(result.status === 200);
    assert(result.body.code === 0);
    assert(result.body.data.key);
  });
});
