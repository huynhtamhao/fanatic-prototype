import { Component, Input, OnInit } from '@angular/core';
import { ErrorUtilsService } from '../../service/error-utils.service';
import { ErrorSummary } from './error-summary.metadata';

@Component({
  selector: 'kairos-error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.scss']
})
export class ErrorSummaryComponent implements OnInit {

  public errors: ErrorSummary[] = [];

  constructor(
    private errorUtilsService: ErrorUtilsService,
  ) { }

  ngOnInit(): void {
    this.errorUtilsService.errorSummary.subscribe(errors => {
      this.errors = errors;
    });

    // example data
    this.errorUtilsService.setErrorSummary(errors);
  }
}

export const errors: ErrorSummary[] = [
  { errorCode: 'Error 01', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 02', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 03', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 04', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 05', errorMessage: 'エラーが発生しました。' },
]
