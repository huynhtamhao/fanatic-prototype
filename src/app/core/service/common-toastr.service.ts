import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

type ActionToastr = 'register' | 'update' | 'delete';

class ToastrData {
  messageKey: string;
  param?: Record<string, unknown>;

  constructor() {
    this.messageKey = '';
  }
}

interface ShowToastr {
  show: () => void;
}

class ToastrBuilder {
  protected toastrData: ToastrData;

  constructor(
    protected toastr: ToastrService,
    protected transloco: TranslocoService
  ) {
    this.toastrData = new ToastrData();
  }

  setMessageKey(messageId: string) {
    this.toastrData.messageKey = messageId;
    return this;
  }

  setParam(param: Record<string, unknown>) {
    this.toastrData.param = param;
    return this;
  }
}

class SuccessToastrBuilder extends ToastrBuilder implements ShowToastr {
  show(): void {
    this.toastr.success(this.transloco.translate(this.toastrData.messageKey, this.toastrData.param));
  }
}

class FailureToastrBuilder extends ToastrBuilder implements ShowToastr {
  show(): void {
    this.toastr.error(this.transloco.translate(this.toastrData.messageKey, this.toastrData.param));
  }
}

class CommonToastrBuilder {
  constructor(
    private toastr: ToastrService,
    private transloco: TranslocoService,
    private action: ActionToastr,
    private item?: string
  ) { }

  success() {
    const toastrBuilder = new SuccessToastrBuilder(this.toastr, this.transloco);
    // Setting Key & param
    const messageKey = !!this.item ? 'successItem' : 'success';
    toastrBuilder.setMessageKey('toastr.' + this.action + '.message.' + messageKey);
    const param = { item: this.item };
    toastrBuilder.setParam(param);
    return toastrBuilder;
  }

  failure() {
    const toastrBuilder = new FailureToastrBuilder(this.toastr, this.transloco);
    // Setting Key & param
    const messageKey = !!this.item ? 'failureItem' : 'failure';
    toastrBuilder.setMessageKey('toastr.' + this.action + '.message.' + messageKey);
    const param = { item: this.item };
    toastrBuilder.setParam(param);
    return toastrBuilder;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CommonToastrService {

  constructor(
    private toastrService: ToastrService,
    private translocoService: TranslocoService
  ) { }

  register(item?: string) {
    return this.build('register', item);
  }

  update(item?: string) {
    return this.build('update', item);
  }

  delete(item?: string) {
    return this.build('delete', item);
  }

  private build(action: ActionToastr, item?: string) {
    return new CommonToastrBuilder(this.toastrService, this.translocoService, action, item);
  }
}
