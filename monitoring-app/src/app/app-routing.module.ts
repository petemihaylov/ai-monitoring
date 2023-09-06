import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsComponent } from './predictions/predictions.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

const routes: Routes = [
  { path: 'predictions', component: PredictionsComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: '', redirectTo: '/predictions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
