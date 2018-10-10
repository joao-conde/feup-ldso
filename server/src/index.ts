import {ServerApp} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ServerApp};

export async function main(options: ApplicationConfig = {}) {
  const app = new ServerApp(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
