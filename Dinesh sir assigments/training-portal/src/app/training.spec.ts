import { TestBed } from '@angular/core/testing';
import { TrainingService } from './training';
import { Training } from './training.model';

describe('TrainingService', () => {
  let service: TrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingService]
    });
    service = TestBed.inject(TrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a training to the list', () => {
    const testTraining: Training = {
      title: 'Angular Advanced',
      topic: 'Testing & SSR',
      maxTrainees: 25,
      startDate: '2026-05-10',
      endDate: '2026-05-12',
      trainerName: 'Jane Smith',
      venue: 'Online'
    };

    service.addTraining(testTraining);

    expect(service.getTrainings().length).toBe(1);
    expect(service.getTrainings()[0]).toEqual(testTraining);
  });

  it('should return an empty array initially', () => {
    expect(service.getTrainings()).toEqual([]);
  });
});