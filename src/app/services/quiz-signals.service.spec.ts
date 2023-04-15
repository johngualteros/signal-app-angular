import { TestBed } from '@angular/core/testing';

import { QuizSignalsService } from './quiz-signals.service';

describe('QuizSignalsService', () => {
  let service: QuizSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
