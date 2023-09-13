import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ILog } from 'src/app/core/interfaces/log.interface';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css'],
})
export class MonitoringComponent implements OnInit {
  title = 'ng2-charts-demo';
  public lineChartLabels: string[] = []; // Time labels
  public lineChartType: string = 'line';
  public lineChartLegend: boolean = true;
  public lineChartData: ChartConfiguration<'line'>['data'];

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.loadErrorData();
  }

  loadErrorData() {
    // Fetch log data and filter for errors (status != 200)
    this.logService.getAllLogs().subscribe(
      (logs: ILog[]) => {
        // Assuming logs have a timestamp field
        const errorLogs = logs.filter((log) => log.status !== 200);

        const errorCountByDate = this.getErrorCountByDate(errorLogs);

        this.lineChartData = {
          labels: Object.entries(errorCountByDate).map((x) => x[0]),
          datasets: [
            {
              data: Object.entries(errorCountByDate).map((x) => x[1]),
              label: 'Errors overtime',
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)',
            },
          ],
        };
      },
      (error) => {
        console.error('Error fetching logs:', error);
      }
    );
  }

  getErrorCountByDate(errorLogs: ILog[]) {
    // Define the type of errorCountByDate
    const errorCountByDate: { [date: string]: number } = {};

    errorLogs.forEach((log) => {
      const date = log.timestamp.split('D')[0]; // Extract date from timestamp
      if (errorCountByDate[date]) {
        errorCountByDate[date]++;
      } else {
        errorCountByDate[date] = 1;
      }
    });
    return errorCountByDate;
  }
}
