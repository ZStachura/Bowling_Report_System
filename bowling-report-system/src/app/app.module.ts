import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

function initializeApp(router: Router): () => Promise<void> {
  return () =>
    new Promise(async (resolve, reject) => {
      resolve();
    });
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [Router],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
