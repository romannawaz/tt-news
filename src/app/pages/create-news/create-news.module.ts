import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateNewsRoutingModule } from './create-news-routing.module';
import { CreateNewsComponent } from './create-news.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CreateNewsComponent],
  imports: [
    CommonModule,
    CreateNewsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class CreateNewsModule {}
