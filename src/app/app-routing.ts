import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './components/standalone/standalone.component';

const routes: Routes = [
  { path: '', component: StandaloneComponent 
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} 