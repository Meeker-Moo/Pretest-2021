import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionOneComponent } from './quiz/question-one/question-one.component';
import { QuestionTwoComponent } from './quiz/question-two/question-two.component';
import { QuestionThreeComponent } from './quiz/question-three/question-three.component';
import { QuizRoutingModule } from './quiz/quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuizComponent
  ],
  exports: [
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
