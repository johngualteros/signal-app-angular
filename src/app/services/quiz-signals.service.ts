import { Injectable, signal } from '@angular/core';
import { Question } from '../interfaces/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizSignalsService {

  quizList: Question[] = [
    {
      id: 1,
      name: 'What is the capital of France?',
      description: 'The capital of France is Paris',
      answers: [
        { id: 1, content: 'London' },
        { id: 3, content: 'Paris' },
        { id: 2, content: 'Berlin' },
        { id: 4, content: 'Madrid' }
      ]
    },
    // programation questions
    {
      id: 2,
      name: 'Which one is not a programming language?',
      description: 'Programming language are used to create software',
      answers: [
        { id: 1, content: 'Java' },
        { id: 2, content: 'C++' },
        { id: 4, content: 'C#' },
        { id: 3, content: 'Rist' }
      ]
    },
    {
      id: 3,
      name: 'Which language is used for styling web pages?',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
      answers: [
        { id: 1, content: 'HTML' },
        { id: 2, content: 'JQuery' },
        { id: 3, content: 'CSS' },
        { id: 4, content: 'XML' }
      ]
    },
    {
      id: 4,
      name: 'There are ____ main components of object oriented programming.',
      description: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.',
      answers: [
        { id: 1, content: '1' },
        { id: 2, content: '6' },
        { id: 4, content: '2' },
        { id: 3, content: '4' }
      ]
    }
  ];
  
  totalCorrectResponses = signal(0);
  constructor() { }

  getQuizListById(id: number) {
    return this.quizList.find(quiz => quiz.id == id);
  }

  getSizeOfQuestions() {
    return this.quizList.length;
  }

  selectCorrectAnswer(id: number): string {
    const answer = this.quizList.find(answer => {
      return answer.answers.find(answer => answer.id == 3 && answer.id == id);
    });
    return answer ? 'correct' : 'incorrect';
  }

  incrementCorrectResponses () {
    this.totalCorrectResponses.set(this.totalCorrectResponses() + 1);
  }
}
