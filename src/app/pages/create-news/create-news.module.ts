import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewsRoutingModule } from './create-news-routing.module';
import { CreateNewsComponent } from './create-news.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CreateNewsComponent],
  imports: [CommonModule, CreateNewsRoutingModule, SharedModule],
})
export class CreateNewsModule {}
