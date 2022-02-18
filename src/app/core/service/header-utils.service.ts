import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorSummary } from '../layout/error-summary/error-summary.metadata';


@Injectable({
  providedIn: 'root'
})
export class HeaderUtilsService {

  private headerSource = new BehaviorSubject('');
  title = this.headerSource.asObservable();

  constructor() {
  }

  newTitle(title: string) {
    this.clearTitle();
    this.setTitle(title);
  }

  setTitle(title: string): void {
    this.headerSource.next(title);
  }

  clearTitle(): void {
    this.headerSource.next('');
  }

}

