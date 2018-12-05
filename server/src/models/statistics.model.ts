import {Entity, model, property} from '@loopback/repository';

/**
 * Model representing statistics about a faculty
 */
@model()
export class Statistics extends Entity {
  @property({
    type: 'string',
    id: true,
    description: 'Internal DB ID',
  })
  id?: string;

  @property({
    type: 'number',
    description: 'Number of BSc courses',
  })
  nr_bsc?: number;

  @property({
    type: 'number',
    description: 'Number of BSc students',
  })
  bsc_students?: number;

  @property({
    type: 'number',
    description: 'Number of MSc courses',
  })
  nr_msc?: number;

  @property({
    type: 'number',
    description: 'Number of MSc students',
  })
  msc_students?: number;

  @property({
    type: 'number',
    description: 'Number of PhD courses',
  })
  nr_phd?: number;

  @property({
    type: 'number',
    description: 'Number of PhD students',
  })
  phd_students?: number;

  @property({
    type: 'number',
    description: 'Number of training courses',
  })
  nr_training_course?: number;

  @property({
    type: 'number',
    description: 'Number of training course students',
  })
  training_course_graduate?: number;

  @property({
    type: 'number',
    description: 'Researchers percentage',
  })
  research_perc?: number;

  @property({
    type: 'number',
    description: 'International students percentage',
  })
  foreign_student_perc?: number;

  @property({
    type: 'number',
    description: 'Training programs percentage',
  })
  training_programs_perc?: number;

  @property({
    type: 'array',
    itemType: 'string',
    description:
      'Other facts about the faculty not previously stated (max of 6)',
  })
  other_facts?: string[];

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

  constructor(data?: Partial<Statistics>) {
    super(data);
  }
}
