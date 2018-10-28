import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Faculty} from './faculty.model';

@model()
export class SocialProject extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  content?: string;

  @belongsTo(() => Faculty)
  facultyId: number;

  constructor(data?: Partial<SocialProject>) {
    super(data);
  }
}
