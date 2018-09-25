import { Component } from '@angular/core';
import { NavController,AlertController, reorderArray,ToastController } from 'ionic-angular';
import { ArchieveTodosPage } from '../archieve-todos/archieve-todos';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnabled= false;
  public todoArchiveLink = ArchieveTodosPage;

  constructor(public navCtrl: NavController,
              private altCont:AlertController,
              private todoService:TodoServiceProvider,
              private toastMsg : ToastController
            ) {

    this.todos = this.todoService.getTodo();

  }

  goToArchive(){

    this.navCtrl.push(ArchieveTodosPage);

  }


  deleteTodo(todoIndex){

    this.todoService.archivedTodos(todoIndex);

    let toastAdd = this.toastMsg.create({

      message:"Todo is deleted successfully!",
      duration:3000

    });

    toastAdd.present();
      
  }


  openTodoAlerts(){


    let addTodoAlert = this.altCont.create({

      title:"Add a todo",
      message:"Enter Your Todo",
      inputs:[
        {
          type:"text",
          name:"addTodoInput"

        }
      ],
      buttons:[

        {
          text:"Cancel"
        },
        {

            text:"Add Todo",
            handler:(inputData)=>{

                let todoText;

                todoText = inputData.addTodoInput;

                //this.todos.push(todoText);

                //use service 

                this.todoService.addTodo(todoText);

                addTodoAlert.onDidDismiss(()=>{

                  let toastAdd = this.toastMsg.create({

                    message:"Todo is added!",
                    duration:3000
  
                  });
  
                  toastAdd.present();

                });

                

            }

        }

      ]

    });

    addTodoAlert.present();


  }


  toggleReorder()
  {

      this.reorderIsEnabled = !this.reorderIsEnabled;

  }


  itemReordered($event)
  {

      reorderArray(this.todos,$event);

  }



  editTodoData(todoIndex){


    let editTodoAlert = this.altCont.create({

      title:"Edit a todo",
      message:"Edit Your Todo",
      inputs:[
        {
          type:"text",
          name:"editTodoInput",
          value:this.todos[todoIndex]

        }
      ],
      buttons:[

        {
          text:"Cancel"
        },
        {

            text:"edit Todo",
            handler:(inputData)=>{

                let todoText;

                todoText = inputData.editTodoInput;

                //this.todos.push(todoText);

                //use service 

                this.todoService.editTodoData(todoText,todoIndex);

                editTodoAlert.onDidDismiss(()=>{

                  let toastEdit = this.toastMsg.create({

                    message:"Todo Updated Successfully!",
                    duration:3000
  
                  });
  
                  toastEdit.present();

                });

                

            }

        }

      ]

    });

    editTodoAlert.present();


  }




}
