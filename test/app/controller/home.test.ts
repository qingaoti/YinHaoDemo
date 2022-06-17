import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('healthy', () => {
  it('I am OK', async () => {
    const res = await app.httpRequest().get('/healthy');
    assert(res.status === 200);
  });
});
