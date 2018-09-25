import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todosData = [];
  private archiveTodos = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }


  getArchivedTodos()
  {

      return this.archiveTodos;

  }

  getTodo()
  {

      return this.todosData;

  }

  addTodo(todoText)
  {

    this.todosData.push(todoText);

  }

  archivedTodos(todoIndex){

    let todosToBeArchived = this.todosData[todoIndex];

    this.todosData.splice(todosToBeArchived,1);
  
    this.archiveTodos.push(todosToBeArchived);

  }

  editTodoData(todo,todoIndex){

    this.todosData[todoIndex] = todo;

  }

}
