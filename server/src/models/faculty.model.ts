import {Entity, model, property} from '@loopback/repository';

/**
 * Model representing a faculty (in a specific language)
 */
@model()
export class Faculty extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
    description: 'Internal DB ID',
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    description: 'Faculty acronym',
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    description: 'Language associated (en or pt)',
  })
  language: string;

  @property({
    type: 'array',
    itemType: 'string',
    description: 'Promotional videos associated',
  })
  videos?: string[];

  @property({
    type: 'object',
    description:
      "Object containing 'content' and 'banner' properties, representing small paragraph(s) about the faculty's future plans",
  })
  future_prospects?: object;

  constructor(data?: Partial<Faculty>) {
    super(data);
  }
}
