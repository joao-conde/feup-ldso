import {Model, model, property} from '@loopback/repository';

/**
 * Model representing a new social project to be saved into the system
 */
@model()
export class NewSocialProject extends Model {
  @property({
    type: 'string',
    description: 'New project title, in english',
  })
  titleEN?: string;

  @property({
    type: 'string',
    description: 'New project title, in portuguese',
  })
  titlePT?: string;

  @property({
    type: 'string',
    description: 'New project short description, in english',
  })
  descriptionEN?: string;

  @property({
    type: 'string',
    description: 'New project short description, in portuguese',
  })
  descriptionPT?: string;

  @property({
    type: 'string',
    description: 'New project longer description, in english',
  })
  contentEN?: string;

  @property({
    type: 'string',
    description: 'New project longer description, in portuguese',
  })
  contentPT?: string;

  @property({
    type: 'string',
    description: 'New project start date (ideally in format yyyy-mm-dd)',
  })
  startDate?: string;

  @property({
    type: 'string',
    description:
      'New project end date, if applicable (ideally in format yyyy-mm-dd)',
  })
  endDate?: string;

  @property({
    type: 'array',
    itemType: 'string',
    description: 'New project descriptive images',
  })
  images?: string[];

  constructor(data?: Partial<NewSocialProject>) {
    super(data);
  }
}
