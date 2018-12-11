import {Entity, model, property} from '@loopback/repository';

/**
 * Model representing a research center from a faculty
 */
@model()
export class ResearchCenter extends Entity {
  @property({
    type: 'string',
    id: true,
    description: 'Internal DB ID',
  })
  id?: string;

  @property({
    type: 'string',
    description: 'Research center acronym',
  })
  title?: string;

  @property({
    type: 'string',
    description: 'Research center full name',
  })
  full_name?: string;

  @property({
    type: 'string',
    description: 'Short description about activities performed in the center',
  })
  content?: string;

  @property({
    type: 'array',
    itemType: 'string',
    description: 'Images associated with research center',
  })
  images?: string[];

  @property({
    type: 'string',
    description: 'Faculty associated',
  })
  faculty?: string;

  @property({
    type: 'string',
    description: 'Language associated',
  })
  language?: string;

  constructor(data?: Partial<ResearchCenter>) {
    super(data);
  }
}
