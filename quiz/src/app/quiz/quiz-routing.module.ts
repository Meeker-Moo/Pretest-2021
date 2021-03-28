import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionOneComponent } from './question-one/question-one.component';
import { QuestionThreeComponent } from './question-three/question-three.component';
import { QuestionTwoComponent } from './question-two/question-two.component';

const routes: Routes = [
  {
    path: 'quiz-1',
    component: QuestionOneComponent
  },
  {
    path: 'quiz-2',
    component: QuestionTwoComponent
  },
  {
    path: 'quiz-3',
    component: QuestionThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
