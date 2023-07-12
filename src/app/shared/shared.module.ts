import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NewsComponent } from './components/news/news.component';

const Components = [NewsComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, FontAwesomeModule],
  exports: [...Components],
})
export class SharedModule {}
