import { Injectable } from '@angular/core';
import { Training } from './training.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private readonly STORAGE_KEY = 'trainings';
  trainings: Training[] = [];

  constructor() {
    this.loadTrainings();
  }

  addTraining(training: Training) {
    this.trainings.push(training);
    this.saveTrainings();
  }

  getTrainings() {
    return this.trainings;
  }

  deleteTraining(index: number) {
    this.trainings.splice(index, 1);
    this.saveTrainings();
  }

  private saveTrainings() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.trainings));
    }
  }

  private loadTrainings() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        this.trainings = JSON.parse(data);
      }
    }
  }
}