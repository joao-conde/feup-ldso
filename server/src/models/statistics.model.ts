import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Faculty } from './faculty.model';

@model()
export class Statistics extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  nr_bsc?: number;

  @property({
    type: 'number',
  })
  bsc_students?: number;

  @property({
    type: 'number',
  })
  nr_msc?: number;

  @property({
    type: 'number',
  })
  msc_students?: number;

  @property({
    type: 'number',
  })
  nr_phd?: number;

  @property({
    type: 'number',
  })
  phd_students?: number;

  @property({
    type: 'number',
  })
  nr_training_course?: number;

  @property({
    type: 'number',
  })
  training_course_graduate?: number;

  @property({
    type: 'number',
  })
  research_perc?: number;

  @property({
    type: 'number',
  })
  foreign_student_perc?: number;

  @property({
    type: 'number',
  })
  training_programs_perc?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  other_facts?: string[];

  @belongsTo(() => Faculty)
  facultyId: number;

  constructor(data?: Partial<Statistics>) {
    super(data);
  }
}
