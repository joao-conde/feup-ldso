import {Provider, inject, ValueOrPromise} from '@loopback/context';
import {Strategy} from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {UserRepository} from '../repositories';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
    @repository(UserRepository) protected userRepo: UserRepository,
  ) {}

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not marked as needing authentication, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    if (name === 'JWTStrategy') {
      return new JWTStrategy(
        {
          passReqToCallback: false,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey:
            process.env.SECRET_KEY === undefined
              ? 'banana_split'
              : process.env.SECRET_KEY,
        },
        (payload, done_callback) => {
          //Callback to when token is successfully extracted, validated with private shared key and parsed
          // Find user with identical id as in the payload
          this.userRepo
            .findOne({
              where: {
                id: payload.user_id,
              },
            })
            .then(user => {
              if (user !== null) done_callback(null, {id: payload.user_id});
              else done_callback(null, false);
            });
        },
      );
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }
}
