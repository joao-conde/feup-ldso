import {Entity, model, property} from '@loopback/repository';

@model()
export class SocialProject extends Entity {
  @property({
    type: 'string',
    id: true,
    description: 'Internal DB ID',
  })
  id?: string;

  @property({
    type: 'string',
    description: 'Project title',
  })
  title?: string;

  @property({
    type: 'string',
    description: 'Short description about the project',
  })
  short_description?: string;

  @property({
    type: 'string',
    description: 'Longer description about the project',
  })
  content?: string;

  @property({
    type: 'string',
    description: 'Project start date (ideally in format yyyy-mm-dd)',
  })
  start_date?: string;

  @property({
    type: 'string',
    description:
      'Project end date, if applicable (ideally in format yyyy-mm-dd)',
  })
  end_date?: string;

  @property({
    type: 'array',
    itemType: 'string',
    description: 'Project associated images',
  })
  images?: string[];

  @property({
    type: 'string',
    description: 'Associated faculty',
  })
  faculty?: string;

  @property({
    type: 'string',
    description: 'Associated language',
  })
  language?: string;

  constructor(data?: Partial<SocialProject>) {
    super(data);
  }
}
