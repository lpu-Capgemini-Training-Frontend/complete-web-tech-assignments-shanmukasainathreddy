import { Routes } from '@angular/router';
import { AddTrainingComponent } from './add-training/add-training';
import { TrainingListComponent } from './training-list/training-list';




export const routes: Routes = [
  { path: 'add', component: AddTrainingComponent },
  { path: 'list', component: TrainingListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];