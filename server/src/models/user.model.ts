import {Entity, model, property} from '@loopback/repository';

/**
 * Model representing a web app user (administrator)
 */
@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    description: 'Internal DB ID',
  })
  id?: string;

  @property({
    type: 'string',
    description: 'User username',
  })
  username: string;

  @property({
    type: 'string',
    description: 'User password (salt encrypted)',
  })
  password: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
