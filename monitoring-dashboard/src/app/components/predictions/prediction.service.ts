import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PredictionsService {
  private predictions = [
    {
      id: 1,
      modelId: 'model1',
      prediction: 'Prediction 1',
      timestamp: new Date('2023-09-01'),
    },
    {
      id: 2,
      modelId: 'model2',
      prediction: 'Prediction 2',
      timestamp: new Date('2023-09-02'),
    },
    {
      id: 3,
      modelId: 'model1',
      prediction: 'Prediction 3',
      timestamp: new Date('2023-09-03'),
    },
    // Add more mock predictions here
  ];

  getPredictions() {
    return this.predictions;
  }
}
