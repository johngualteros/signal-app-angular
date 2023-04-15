import { Component, inject, signal } from '@angular/core';
import { QuizSignalsService } from 'src/app/services/quiz-signals.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  quizSignalsService = inject(QuizSignalsService);
  correctResponses = signal(0);
  totalQuestions = signal(0);

  ngOnInit(): void {
    this.correctResponses.set(this.quizSignalsService.totalCorrectResponses());
    this.totalQuestions.set(this.quizSignalsService.getSizeOfQuestions());
  }
}
