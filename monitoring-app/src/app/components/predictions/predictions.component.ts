import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { PredictionsService } from './prediction.service';
import { Log } from '../../core/classes/log.class';
import { ILog } from '../../core/interfaces/log.interface';
import { LogService } from '../../services/log.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css'],
})
export class PredictionsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchControl = new FormControl();

  displayedColumns: string[] = [
    'predictionId',
    'model',
    'status',
    'timestamp',
    'responseTime',
  ];

  logs: MatTableDataSource<Log>;

  loading = true;
  error: string | null = null;

  constructor(
    private logService: LogService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.logs = new MatTableDataSource<Log>([]);
  }

  ngOnInit() {
    this.loadLogs();
    this.setupSearchFilter();
  }

  setupSearchFilter() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchText: string) => {
        this.logs.filter = searchText.trim().toLowerCase();
        if (this.logs.paginator) {
          this.logs.paginator.firstPage();
        }
      });
  }

  ngAfterViewInit() {
    this.logs.sort = this.sort;
    this.sort.direction = 'desc';
    this.logs.paginator = this.paginator;
    this.sort.sortChange.emit({ active: '_id', direction: 'asc' });
  }

  loadLogs() {
    this.loading = true;
    this.error = null;
    this.logService.getAllLogs().subscribe(
      (data) => {
        this.logs.data = data;
        this.loading = false;
      },
      (error) => {
        this.error =
          'An error occurred while fetching data. Please try again later.';
        this.loading = false;
        console.error('Error fetching logs:', error);
      }
    );
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
