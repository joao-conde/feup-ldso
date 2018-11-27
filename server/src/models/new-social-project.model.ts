import {Model, model, property} from '@loopback/repository';

@model()
export class NewSocialProject extends Model {
  @property({
    type: 'string',
  })
  titleEN?: string;

  @property({
    type: 'string',
  })
  titlePT?: string;

  @property({
    type: 'string',
  })
  descriptionEN?: string;

  @property({
    type: 'string',
  })
  descriptionPT?: string;

  @property({
    type: 'string',
  })
  contentEN?: string;

  @property({
    type: 'string',
  })
  contentPT?: string;

  @property({
    type: 'string',
  })
  startDate?: string;

  @property({
    type: 'string',
  })
  endDate?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  images?: string[];

  constructor(data?: Partial<NewSocialProject>) {
    super(data);
  }
}
