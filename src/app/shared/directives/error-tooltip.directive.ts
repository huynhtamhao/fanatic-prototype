/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, HostListener, Self, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslocoService } from '@ngneat/transloco';

export const urlErrorTooltip = 'tooltip.error.';

export const ERROR_NAME = {
  REQUIRED: 'required',
  MIN_LENGTH: 'minlength',
  MAX_LENGTH: 'maxlength',
}

@Directive({
  selector: '[kairosErrorTooltip]',
  providers: [MatTooltip]
})
export class ErrorTooltipDirective {

  private errorMessage = '';

  tooltip: MatTooltip;
  @Input() kairosErrorTooltip = '';

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    tooltip: MatTooltip,
    private transloco: TranslocoService,
  ) {
    this.tooltip = tooltip;
    this.tooltip.tooltipClass = 'error-tooltip';
    this.tooltip.position = 'left';
  }

  private getErrorMessage(): string {
    if (this.ngControl.errors) {
      if (!!this.kairosErrorTooltip) { // TODO: future
        return this.kairosErrorTooltip;
      }

      const keyError = Object.keys(this.ngControl.errors)[0];
      switch (keyError) {
        case ERROR_NAME.REQUIRED:
          this.errorMessage = new ErrorTooltip(this.transloco, keyError).messageTranslate();
          break;
        case ERROR_NAME.MIN_LENGTH:
        case ERROR_NAME.MAX_LENGTH:
          this.errorMessage = new ErrorTooltip(this.transloco, keyError).setParam(this.ngControl.errors[keyError].requiredLength).messageTranslate();
          break;
        default:
          this.errorMessage = '';
          break;
      }
    }

    return this.errorMessage;
  }

  @HostListener('mouseover') mouseover() {
    this.tooltip.message = this.getErrorMessage();
    this.tooltip.show();
  }

  @HostListener('mouseout') mouseout() {
    // this.tooltip.message = '';
    this.tooltip.hide();
  }

}

export class ErrorTooltip {

  private params: Record<string, unknown> = {};

  constructor(
    private transloco: TranslocoService,
    private keyError: string,
  ) { }

  setParam(value: unknown) {
    this.params[this.keyError] = value;
    return this;
  }

  setParams(params: Record<string, unknown>) {
    this.params = params;
    return this;
  }

  messageTranslate(): string {
    return this.transloco.translate(urlErrorTooltip + this.keyError, this.params);
  }
}
