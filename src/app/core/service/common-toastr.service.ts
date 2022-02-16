import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ToastrService } from 'ngx-toastr';

class ToastrData {
  messageId: string;
  param?: string[];

  constructor() {
    this.messageId = '';
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

  setMessageId(messageId: string) {
    this.toastrData.messageId = messageId;
    return this;
  }

  setParam(...param: string[]) {
    this.toastrData.param = param;
    return this;
  }
}

class SuccessToastrBuilder extends ToastrBuilder implements ShowToastr {
  show(): void {
    this.toastr.success(this.transloco.translate(this.toastrData.messageId, this.toastrData.param));
  }
}

class FailureToastrBuilder extends ToastrBuilder implements ShowToastr {
  show(): void {
    this.toastr.error(this.transloco.translate(this.toastrData.messageId, this.toastrData.param));
  }
}

class CommonToastrBuilder {

  public messageId!: string;
  public messageIdParam!: string;

  constructor(
    private toastr: ToastrService,
    private transloco: TranslocoService,
  ) { }

  success(item?: string) {
    const toastrBuilder = new SuccessToastrBuilder(this.toastr, this.transloco);
    toastrBuilder.setMessageId(this.messageId);
    if (!!item) {
      toastrBuilder.setMessageId(this.messageIdParam);
      toastrBuilder.setParam('Param A');
    }
    return toastrBuilder;
  }

  failure(item?: string) {
    const toastrBuilder = new FailureToastrBuilder(this.toastr, this.transloco);
    toastrBuilder.setMessageId(this.messageId);
    if (!!item) {
      toastrBuilder.setMessageId(this.messageIdParam);
      toastrBuilder.setParam('Param B');
    }
    return toastrBuilder;
  }
}

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class CommonToastrService {

  private toastr: CommonToastrBuilder;

  constructor(
    private toastrService: ToastrService,
    private translocoService: TranslocoService,
  ) {
    this.toastr = new CommonToastrBuilder(this.toastrService, this.translocoService);
  }

  register() {
    this.toastr.messageId = 'AAA';
    this.toastr.messageIdParam = 'BBB';
    return this.toastr;
  }

  update() {
    this.toastr.messageId = 'AAA';
    this.toastr.messageIdParam = 'BBB';
    return this.toastr;
  }

  delete() {
    this.toastr.messageId = 'AAA';
    this.toastr.messageIdParam = 'BBB';
    return this.toastr;
  }
}
