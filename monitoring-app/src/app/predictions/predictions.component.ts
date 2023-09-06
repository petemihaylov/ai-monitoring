import { Component } from '@angular/core';
import { PredictionsService } from './prediction.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css'],
})
export class PredictionsComponent {
  predictions: any[] = [];
  modelIdFilter: string = '';

  constructor(private predictionsService: PredictionsService) {}

  ngOnInit() {
    this.getPredictions();
  }

  getPredictions() {
    this.predictions = this.predictionsService.getPredictions();
  }

  filterPredictions() {
    if (this.modelIdFilter) {
      this.predictions = this.predictions.filter((prediction) =>
        prediction.modelId
          .toLowerCase()
          .includes(this.modelIdFilter.toLowerCase())
      );
    } else {
      this.getPredictions();
    }
  }
}
