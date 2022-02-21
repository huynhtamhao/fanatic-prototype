import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { ErrorSummary } from './error-summary.metadata';

@Component({
  selector: 'kairos-error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.scss']
})
export class ErrorSummaryComponent implements OnInit {

  public errors: ErrorSummary[] = [];

  constructor(
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this.layoutService.errorSummary.subscribe(errors => {
      this.errors = errors;
    });
  }
}

