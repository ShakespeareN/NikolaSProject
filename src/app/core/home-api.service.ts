import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  apiUrl = 'https://dummyjson.com/posts/search';
  dynamicUrl = '';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(limit: number, skip: number, searchText: string) {
    let params = new HttpParams()
      .set('limit', String(limit))
      .set('skip', String(skip))
      .set('q', searchText);

    return this.httpClient.get<ApiResponse>(this.apiUrl, { params });
  }

}
