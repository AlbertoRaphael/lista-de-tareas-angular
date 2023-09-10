import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { TareasService } from 'src/app/tareas.sevice';
import { TareaPendiente as TaskPending } from 'src/app/tarea-pendiente';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

 

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css'],
  standalone: true,
  
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    TranslocoModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StandaloneComponent,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserModule]

})




export class StandaloneComponent implements OnInit {

  //formGroup: FormGroup;

  title = 'lista-de-tareas-angular';
  date = new Date();



  private _translocoService = inject(TranslocoService);
  lang = this._translocoService.getActiveLang();
  
  //private _ReactiveformsModel = inject(ReactiveformsModel)
//form= this._ReactiveformsModel.form
  private tasksService = inject(TareasService);




  constructor(public _formBuilder:FormBuilder) {}
  formGroup = this._formBuilder.group({
    //text:["",[Validators.pattern('/[a-zA-Z]/')]]
  //text:[null, [Validators.required,Validators.minLength(2)]],
  text: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
   //text: [null, Validators.text],
  
  });
   
  


  nameTask = ""

  public tasks: TaskPending[] = []
  saveTask() {
    const newTask = new TaskPending(this.nameTask);
    this.tasks.push(newTask);
    this.tasksService.saveTasks(this.tasks);

    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.getTasks();
    } else {
      //aqui saca la tarea pendiente en caso de nu cumplir con la validacion
      this.tasks.pop();
      alert("ERROR!");
      
     
    }
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

  ngOnInit(): void {
    this.getTasks();
    
    /**
     * Si queremos saber cada vez que se cambia un idioma debemos de suscribirnos al Observable "langChanges$"
     */
    this._translocoService.langChanges$.subscribe((response) => {
      this.lang = response;
    });
  }

  clickTranslate(language: string): void {
    this._translocoService.setActiveLang(language);
  }

  
}




