import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingService } from '../training';
import { RoleService } from '../role.service';
import { Training } from '../training.model';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './training-list.html'
})
export class TrainingListComponent implements OnInit {
  trainings: Training[] = [];
  filteredTrainings: Training[] = [];
  filterTitle: string = '';
  filterTopic: string = '';
  filterTrainer: string = '';
  filterVenue: string = '';
  filterStartDate: string = '';
  filterEndDate: string = '';

  constructor(private trainingService: TrainingService, public roleService: RoleService) {}

  ngOnInit() {
    this.trainings = this.trainingService.getTrainings();
    this.applyFilters();
  }

  get role() {
    return this.roleService.role();
  }

  applyFilters() {
    this.filteredTrainings = this.trainings.filter(training => {
      return (!this.filterTitle || training.title.toLowerCase().includes(this.filterTitle.toLowerCase())) &&
             (!this.filterTopic || training.topic.toLowerCase().includes(this.filterTopic.toLowerCase())) &&
             (!this.filterTrainer || training.trainerName.toLowerCase().includes(this.filterTrainer.toLowerCase())) &&
             (!this.filterVenue || training.venue.toLowerCase().includes(this.filterVenue.toLowerCase())) &&
             (!this.filterStartDate || training.startDate >= this.filterStartDate) &&
             (!this.filterEndDate || training.endDate <= this.filterEndDate);
    });
  }

  onFilterChange() {
    this.applyFilters();
  }

  deleteTraining(index: number) {
    this.trainingService.deleteTraining(index);
    this.applyFilters(); // Refresh filter
  }
}