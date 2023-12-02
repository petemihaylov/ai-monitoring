import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService {
  private errorsData = [
    { id: 1, status: 404, timestamp: new Date('2023-09-01') },
    { id: 2, status: 500, timestamp: new Date('2023-09-02') },
    { id: 3, status: 200, timestamp: new Date('2023-09-03') },
    // Add more mock error data here
  ];

  getErrorsData() {
    return this.errorsData;
  }
}
