//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { StandaloneComponent } from './app/components/standalone/standalone.component';
//import { bootstrapApplication} from '@angular/platform-browser'
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
//import { Routes } from './app/app-routing';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environmenst/environments';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//platformBrowserDynamic().bootstrapModule(StandaloneComponent)
  //.catch(err => console.error(err));
//bootstrapApplication(StandaloneComponent,appConfig)
//.catch(err => console.error(err))