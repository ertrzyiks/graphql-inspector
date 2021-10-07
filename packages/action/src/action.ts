(global as any).navigator = {
  userAgent: 'node.js',
};

import * as core from '@actions/core';
import {run} from './run';

run().catch((e) => {
  console.log(e)
  core.setFailed(e.message || e);
});
