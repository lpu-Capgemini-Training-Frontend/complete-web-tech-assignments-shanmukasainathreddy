import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainingService } from '../training';

@Component({
  selector: 'app-add-training',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-training.html'   // ← Fixed path
})
export class AddTrainingComponent {
  constructor(private trainingService: TrainingService) {}

  onSubmit(form: any) {
    this.trainingService.addTraining(form.value);
    form.reset();
  }
}