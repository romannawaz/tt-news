import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Subject, switchMap, takeUntil } from 'rxjs';
import {
  faCalculator,
  faEye,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { NewsService } from '../../services/news.service';
import { INews } from '../../services/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  private _destoyed$ = new Subject<boolean>();

  faCalendar = faCalculator;
  faEye = faEye;
  faMessage = faMessage;

  news: INews | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this._destoyed$),
        switchMap((params) => {
          const id = params.get('id');
          if (!id) return EMPTY;

          return this.newsService.getById(id);
        })
      )
      .subscribe((news) => {
        this.news = news;
      });
  }

  ngOnDestroy(): void {
    this._destoyed$.next(true);
    this._destoyed$.complete();
  }
}
