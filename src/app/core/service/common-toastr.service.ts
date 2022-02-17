import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

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
    protected transloco: TranslocoService,
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
    private item: string,
  ) { }

  success() {
    const toastrBuilder = new SuccessToastrBuilder(this.toastr, this.transloco);
    toastrBuilder.setMessageKey('commonToastr.success');
    const param = { 'item': this.item }
    toastrBuilder.setParam(param);
    return toastrBuilder;
  }

  failure() {
    const toastrBuilder = new FailureToastrBuilder(this.toastr, this.transloco);
    toastrBuilder.setMessageKey('commonToastr.failure');
    const param = { 'item': this.item }
    toastrBuilder.setParam(param);
    return toastrBuilder;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CommonToastrService {

  constructor(
    private toastrService: ToastrService,
    private translocoService: TranslocoService,
  ) { }

  register(item?: string) {
    return this.build((!!item ? item + 'の' : '') + '登録');
  }

  update(item?: string) {
    return this.build((!!item ? item + 'の' : '') + '変更');
  }

  delete(item?: string) {
    return this.build((!!item ? item +'の' : '') + '削除');
  }

  private build(param: string) {
    return new CommonToastrBuilder(this.toastrService, this.translocoService, param);
  }
}
