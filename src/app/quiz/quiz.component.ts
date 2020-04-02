import { Component, OnInit } from '@angular/core';
import * as QuestionnaireJson from '../../questionnaire.json';
import { Question } from './Question';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
      maQuestion:Question  = new Question;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Question>("/corona/questionnaire.json").subscribe(data =>{
      console.log(data);
      this.maQuestion = data;
    })
  }

}
