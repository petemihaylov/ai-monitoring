import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PredictionsComponent,
    MonitoringComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
