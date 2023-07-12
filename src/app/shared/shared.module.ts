import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NewsComponent } from './components/news/news.component';

const Components = [NewsComponent];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [...Components],
})
export class SharedModule {}
