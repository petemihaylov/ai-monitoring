import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Log } from '../core/classes/log.class';
import { catchError, timeout } from 'rxjs/operators';
import { ILog } from '../core/interfaces/log.interface';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your Log API endpoint
  private requestTimeout = 3000;

  constructor(private http: HttpClient) {}

  getAllLogs(): Observable<ILog[]> {
    return this.http.get<Log[]>(`${this.apiUrl}/log`).pipe(
      timeout(this.requestTimeout), // Apply the timeout
      catchError((error) => {
        if (error.name === 'TimeoutError') {
          return throwError(
            () => new Error('Request timed out. Please try again.')
          );
        }
        return throwError(
          () =>
            new Error(
              'An error occurred while fetching data. Please try again later.'
            )
        );
      })
    );
  }

  getLogById(id: string): Observable<ILog> {
    return this.http.get<Log>(`${this.apiUrl}/log/${id}`);
  }

  createLog(log: Log): Observable<ILog> {
    return this.http.post<Log>(`${this.apiUrl}/log`, log);
  }

  updateLog(logId: string, log: ILog): Observable<Log> {
    return this.http.put<Log>(`${this.apiUrl}/log/${logId}`, log);
  }
}
