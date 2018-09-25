import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
/**
 * Generated class for the ArchieveTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archieve-todos',
  templateUrl: 'archieve-todos.html',
})
export class ArchieveTodosPage {

  public todos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private todoService:TodoServiceProvider) {

    this.todos = this.todoService.getArchivedTodos();

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchieveTodosPage');
  }

}
