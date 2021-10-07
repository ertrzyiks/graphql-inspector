(global as any).navigator = {
  userAgent: 'node.js',
};

import * as core from '@actions/core';
import {run} from './run';

process.on('uncaughtException', (err: Error, origin: string) => {
  console.log(
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
  console.log('Stack', err.stack)
})

run().catch((e) => {
  core.setFailed(e.message || e);
});
