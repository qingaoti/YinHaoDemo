'use strict';

import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/test.js', () => {
  let ctx: Context;

  before(() => {
    ctx = app.mockContext();
  });

  it('sayHi', async () => {
    const result = await ctx.service.test.sayHi('egg');
    assert(result === 'hi, egg');
  });
});
