import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

export interface NewsForm {
  title: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss'],
})
export class CreateNewsComponent {
  faCheck = faCheck;
  faXMark = faX;

  newsForm: FormGroup<NewsForm> = this.fb.group({
    title: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
  });

  createdSuccess: boolean = false;
  createdFailure: boolean = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private newsService: NewsService
  ) {}

  createNews() {
    if (!this.newsForm.valid) {
      this.createdFailure = true;

      return;
    }

    const data = this.newsForm.getRawValue();

    this.newsService
      .createNews({ ...data, date: Date.now().toString(), id: uuidv4() })
      .pipe(first())
      .subscribe({
        complete: () => {
          this.newsForm.reset();
          this.createdSuccess = true;
          this.createdFailure = false;
        },
        error: () => {
          this.createdFailure = true;
          this.createdSuccess = false;
        },
      });
  }
}
