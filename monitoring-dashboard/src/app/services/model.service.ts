// model.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IModel } from '../core/interfaces/model.interface';
import { Model } from '../core/classes/model.class';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your Model API endpoint

  constructor(private http: HttpClient) {}

  getAllModels(): Observable<IModel[]> {
    return this.http.get<Model[]>(`${this.apiUrl}/model`);
  }

  getModelById(id: string): Observable<IModel> {
    return this.http.get<Model>(`${this.apiUrl}/model/${id}`);
  }

  createModel(model: IModel): Observable<IModel> {
    return this.http.post<Model>(`${this.apiUrl}/model`, model);
  }

  updateModel(modelId: string, model: IModel): Observable<IModel> {
    return this.http.put<Model>(`${this.apiUrl}/model/${modelId}`, model);
  }
}
