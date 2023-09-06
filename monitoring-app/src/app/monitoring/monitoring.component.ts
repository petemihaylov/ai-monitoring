import { Component } from '@angular/core';
import { MonitoringService } from './monitoring.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
})
export class MonitoringComponent {
  errorsData: any[] = [];
  filteredErrorsData: any[] = [];
  startDate: Date = new Date();
  endDate: Date = new Date();
  view: [number, number] = [800, 400]; // Width and height of the chart

  // ngx-charts options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Errors';

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit() {
    this.getErrorsData();
  }

  getErrorsData() {
    this.errorsData = this.monitoringService.getErrorsData();
    this.applyTimeFilter();
  }

  applyTimeFilter() {
    this.filteredErrorsData = this.errorsData.filter(
      (error) =>
        error.timestamp >= this.startDate && error.timestamp <= this.endDate
    );
  }

  onDateRangeChange(event: any) {
    // Update startDate and endDate based on the date range picker
    this.startDate = event[0];
    this.endDate = event[1];
    this.applyTimeFilter();
  }
}
