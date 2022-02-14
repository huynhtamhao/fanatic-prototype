import { Component, OnInit } from '@angular/core';
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
  }
}

