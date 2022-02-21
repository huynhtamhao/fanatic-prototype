import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorSummaryBuilder } from '../layout/error-summary/error-summary.builder';
import { ErrorSummary } from '../layout/error-summary/error-summary.metadata';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public headerTitle: Observable<string>;
  public errorSummary: Observable<ErrorSummary[]>;

  private headerTitleSubject: BehaviorSubject<string>;
  private errorSummarySubject: BehaviorSubject<ErrorSummary[]>;

  constructor() {
    this.headerTitleSubject = new BehaviorSubject<string>('');
    this.headerTitle = this.headerTitleSubject.asObservable();
    this.errorSummarySubject = new BehaviorSubject<ErrorSummary[]>([]);
    this.errorSummary = this.errorSummarySubject.asObservable();
  }

  clearAll() {
    this.headerTitleSubject.next('');
    this.errorSummarySubject.next([]);
  }

  public clearHeaderTitle(): void {
    this.headerTitleSubject.next('');
  }

  public getHeaderTitle(): string {
    return this.headerTitleSubject.value;
  }

  public newHeaderTitle(title: string) {
    this.clearHeaderTitle();
    this.setHeaderTitle(title);
  }

  public setHeaderTitle(title: string) {
    this.headerTitleSubject.next(title);
  }

  public addError(error: ErrorSummary): ErrorSummaryBuilder {
    const builder = new ErrorSummaryBuilder(this);
    return builder.addError(error);
  }

  public clearErrorSummary(): void {
    this.errorSummarySubject.next([]);
  }

  public getErrorSummary(): ErrorSummary[] {
    return this.errorSummarySubject.value;
  }

  public setErrorSummary(errors: ErrorSummary[]) {
    this.errorSummarySubject.next(errors);
  }

}
