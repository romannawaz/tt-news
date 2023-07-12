import { Component, Input } from '@angular/core';
import { faCalculator, faEye } from '@fortawesome/free-solid-svg-icons';

import { INews } from '../../../services/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  faCalendar = faCalculator;
  faEye = faEye;

  @Input({ required: true })
  news!: INews;
}
