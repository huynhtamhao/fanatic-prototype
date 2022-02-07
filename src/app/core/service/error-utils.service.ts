import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorSummary } from '../layout/error-summary/error-summary.metadata';


@Injectable({
  providedIn: 'root'
})
export class ErrorUtilsService {

  private errorSummarySource = new BehaviorSubject<ErrorSummary[]>([]);
  errorSummary = this.errorSummarySource.asObservable();

  constructor() {}

  setErrorSummary(errorSummary: ErrorSummary[]): void {
    this.errorSummarySource.next(errorSummary);
  }

}

