import { Component, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/interfaces/quiz';
import { QuizSignalsService } from 'src/app/services/quiz-signals.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @ViewChild('alert') alert!: ElementRef;

  question = signal<Question>({
    id: 0,
    name: '',
    description: '',
    answers: []
  });

  length = signal(0);
  actualQuestion = signal(1);
  isCorrect = signal('not-answered');

  activatedRoute = inject(ActivatedRoute);
  quizSignalsService = inject(QuizSignalsService);
  router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.question.set(this.quizSignalsService.getQuizListById(params['id'])??this.question());
    });
    // get size of questions
    this.length.set(this.quizSignalsService.getSizeOfQuestions());
  }

  selectResponse(id: number) {
    this.isCorrect.set(this.quizSignalsService.selectCorrectAnswer(id));
    this.showResponse(this.isCorrect());

    setTimeout(() => {
      this.nextQuestion();
    }, 2000);
  }

  showResponse(isCorrect: string) {
    if(isCorrect == 'correct') {
      this.appendClassAndTimeOut('correct', 'incorrect');
      this.quizSignalsService.incrementCorrectResponses();
    }else if (isCorrect == 'incorrect') {
      this.appendClassAndTimeOut('incorrect', 'correct');
    }
  }

  nextQuestion() {
    if(this.actualQuestion() == this.length()) {
      this.router.navigate(['/result']);
      return;
    }
    this.isCorrect.set('not-answered');
    this.actualQuestion.set(this.actualQuestion() + 1);
    this.router.navigate(['/quiz', this.actualQuestion()]);

  }

  appendClassAndTimeOut(addClassName: string, deleteClassName: string) {
    this.alert.nativeElement.classList.add(addClassName);
    this.alert.nativeElement.classList.remove(deleteClassName);
    setTimeout(() => {
      this.alert.nativeElement.classList.remove(addClassName);
    }, 2000);
  }
}
