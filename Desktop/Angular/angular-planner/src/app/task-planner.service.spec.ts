import { TestBed } from '@angular/core/testing';

import { TaskPlannerService } from './task-planner.service';

describe('TaskPlannerService', () => {
  let service: TaskPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
