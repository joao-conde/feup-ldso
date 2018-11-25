import {Entity, model, property} from '@loopback/repository';

@model()
export class SocialProject extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  short_description?: string;

  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'string',
  })
  start_date?: string;

  @property({
    type: 'string',
  })
  end_date?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  images?: string[];

  @property({
    type: 'string',
  })
  faculty?: string;

  @property({
    type: 'string',
  })
  language?: string;

  constructor(data?: Partial<SocialProject>) {
    super(data);
  }
}
