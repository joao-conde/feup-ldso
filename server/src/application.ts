import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import {MySequence} from './sequence';
import {MongoDataSource} from './datasources';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';
import {MyAuthStrategyProvider} from './providers/auth-strategy.provider';

export class ServerApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set shared secret key to a dummy default value, if by chance is not defined
    if (process.env.SECRET_KEY === undefined)
      process.env.SECRET_KEY = 'banana_split';

    // Bind mongo datasource to well defined configuration
    this.bind('datasources.config.mongo').to({
      name: 'mongo',
      connector: 'mongodb',
      host: process.env.DB_HOST === undefined ? 'mongo' : process.env.DB_HOST,
      port: process.env.DB_PORT === undefined ? 27017 : process.env.DB_PORT,
      database: 'up',
    });
    this.bind('datasources.mongo').toClass(MongoDataSource);

    // Set up custom routing mechanism sequence
    this.sequence(MySequence);

    this.projectRoot = __dirname;

    // Register authentication component
    this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      MyAuthStrategyProvider,
    );

    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
