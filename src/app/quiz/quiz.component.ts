import { Component, OnInit } from '@angular/core';
import * as QuestionnaireJson from '../../assets/questionnaire.json';
import { Question } from './Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
      maQuestion: Question;
  constructor() { }

  ngOnInit() {
    this.maQuestion = QuestionnaireJson;
   console.log(this.maQuestion.question);
  }

}
