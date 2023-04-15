import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  {
    path: 'quiz',
    component: IndexComponent
  },
  {
    path: 'quiz/:id',
    component: QuizComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'quiz',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
