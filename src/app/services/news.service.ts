import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { INews } from './news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url = 'http://localhost:3000';
  private newsUrl = this.url + '/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.newsUrl);
  }

  getById(id: string): Observable<INews> {
    return this.http
      .get<INews[]>(this.newsUrl, { params: { ID: id } })
      .pipe(map(([news]) => news));
  }
}
