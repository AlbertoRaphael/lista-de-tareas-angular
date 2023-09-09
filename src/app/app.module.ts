import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandaloneComponent } from "./components/standalone/standalone.component";
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    declarations: [AppComponent],
    providers: [

      
     ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        TranslocoRootModule,
        StandaloneComponent
    ]
}) 
export class AppModule {}