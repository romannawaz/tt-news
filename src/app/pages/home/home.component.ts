import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { NewsService } from '../../services/news.service';
import { INews } from '../../services/news.interface';

const PAGE_SIZE = 3;

interface PageItems {
  page: number;
  items: INews[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<boolean>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
    },
    nav: true,
  };

  news: INews[] = [];

  pageItems: PageItems[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService
      .getNews()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((news) => {
        this.news = news;
        const pageCount = Math.ceil(this.news.length / PAGE_SIZE);

        for (let i = 0; i < pageCount; i++) {
          this.pageItems.push({ page: i, items: this.getItemsByPage(i) });
        }
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  getItemsByPage(page: number) {
    const start = page * PAGE_SIZE;

    return this.news.slice(start, start + PAGE_SIZE);
  }
}
