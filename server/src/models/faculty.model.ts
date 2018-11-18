import {Entity, model, property} from '@loopback/repository';

@model()
export class Faculty extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  language: string;

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
