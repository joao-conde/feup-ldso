import {Entity, model, property} from '@loopback/repository';

@model()
export class Faculty extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  language?: string;

  @property({
    type: 'string',
  })
  short_description?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  social_projects?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  videos?: string[];

  @property({
    type: 'object',
  })
  future_prospects?: object;

  constructor(data?: Partial<Faculty>) {
    super(data);
  }
}
