import {repository} from '@loopback/repository';
import {post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';
import {sign} from 'jsonwebtoken';
import {compare} from 'bcrypt-nodejs';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/login', {
    responses: {
      '200': {
        description: 'User Session Information',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
                error: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody() user: User): Promise<Object> {
    //Return object
    let ret;
    //Retrieve user from database whose username matches request body's username
    let u = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });
    //If not such user found, return error message
    if (u === null)
      ret = Object.assign({}, {token: null, error: 'User not found'});
    else {
      //Check if passwords match
      compare(user.password, u.password, function(err, res) {
        if (!res) {
          ret = Object.assign({}, {token: null, error: 'Password incorrect'});
          return ret;
        }
      });

      //If user credentials are OK, generate signed token with private shared key
      const payload = {
        user_id: u.id,
      };
      const token = sign(
        payload,
        process.env.SECRET_KEY === undefined
          ? 'banana_split'
          : process.env.SECRET_KEY,
      );
      ret = Object.assign({}, {token: token, error: ''});
    }

    return ret;
  }
}
