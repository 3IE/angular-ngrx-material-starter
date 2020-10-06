import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core
    CoreModule,

    // app
    AppRoutingModule
  ],
  declarations: [AppComponent, ConfirmComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
