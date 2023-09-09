import { Component, Inject, OnInit } from '@angular/core';
import { TareaPendiente as TaskPending } from './tarea-pendiente';
import { TareasService as TasksService } from './tareas.sevice';
import { TranslocoModule } from '@ngneat/transloco';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    
 
})
export class AppComponent implements OnInit {
  title = 'lista-de-tareas-angular';
  date= new Date();


  constructor(
    private tasksService: TasksService ) {
      
     }
  nameTask = " "

  public tasks: TaskPending[] = []
  saveTask() {
    const newTask = new TaskPending(this.nameTask);
    this.tasks.push(newTask);
    this.tasksService.saveTasks(this.tasks);
    this.getTasks();
    // Y limpiamos el input
    this.nameTask = "";
  }
  /*
  Nota: aquí utilizo el índice porque solo trabajo con un array. Si tú usas
  una base de datos probablemente quieras usar el ID del elemento en lugar del índice
   */
  deleteTask(index: number) {
    // Primero le preguntamos al usuario
    const confirms = confirm("Do you really want to eliminate the task?");
    if (!confirms) {
      return;
    }
    // Eliminamos del arreglo y guardamos
    this.tasks.splice(index, 1);
    this.tasksService.saveTasks(this.tasks);
  }
  changeTaskState() {
    // No debemos hacer nada con la tarea, ya que el input con el ngModel ha
    // cambiado la variable, así que solo guardamos las tareas tal y como están
    // Es decir, this.tareas ya está modificada hasta este punto
    this.tasksService.saveTasks(this.tasks);
  }
  getTasks() {
    this.tasks = this.tasksService.getTasks();
  }
  ngOnInit() {
    this.getTasks();
  }
}

