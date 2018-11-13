import {Entity, model, property} from '@loopback/repository';

@model()
export class ResearchCenter extends Entity {
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
  full_name?: string;

  @property({
    type: 'string',
  })
  content?: string;

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

  constructor(data?: Partial<ResearchCenter>) {
    super(data);
  }
}
