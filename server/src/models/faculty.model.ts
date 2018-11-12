import {Entity, model, property, hasMany} from '@loopback/repository';
import {SocialProject} from './social-project.model';
import {Statistics} from './statistics.model';

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

  @hasMany(() => SocialProject)
  socialProjects: SocialProject[];

  @hasMany(() => Statistics)
  statistics: Statistics[];

  constructor(data?: Partial<Faculty>) {
    super(data);
  }
}
