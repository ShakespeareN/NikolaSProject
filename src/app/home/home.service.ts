import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeApiService } from '../core/home-api.service';
import { ApiResponse, Post } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  post$: Observable<Post[]>;
  private postSubject = new BehaviorSubject<Post[]>([]);
  total: number = 0;
  pages$: Observable<number>;
  private pagesSubject = new BehaviorSubject<number>(0);

  constructor(private homeApiService: HomeApiService) {
    this.post$ = this.postSubject;
    this.pages$ = this.pagesSubject;
  }

  getPosts(limit: number = 10, skip: number = 0, searchText: string = '') {
    this.homeApiService.getPosts(limit, skip, searchText).subscribe({
      next: (response: ApiResponse) => {
        this.postSubject.next(response.posts);
        this.total = response.total;
        this.pagesSubject.next(Math.ceil(response.total / limit));
      },
    });
  }
}
