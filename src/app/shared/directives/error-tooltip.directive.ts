import { Directive, HostListener, Self, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslocoService } from '@ngneat/transloco';

export const messageTranslate = (transloco: TranslocoService, keyError: string, items?: Record<string, unknown>): string => {
  let params: Record<string, unknown> = {};
  if (!!items) {
    if (Object.keys(items).length > 0) {
      params = items;
    } else {
      params[keyError] = items;
    }
  }

  return transloco.translate('tooltip.error.' + keyError, params);
}

export const ERROR_NAME = {
  REQUIRED: 'required',
  MIN_LENGTH: 'minlength',
  MAX_LENGTH: 'maxlength',
}

@Directive({
  selector: '[errorTooltip]',
  providers: [MatTooltip]
})
export class ErrorTooltipDirective {

  private errorMessage = '';

  tooltip: MatTooltip;
  @Input() errorTooltip = '';

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
      if (!!this.errorTooltip) { // TODO: future
        return this.errorTooltip;
      }

      const keyError = Object.keys(this.ngControl.errors)[0];
      switch (keyError) {
        case ERROR_NAME.REQUIRED:
          this.errorMessage = messageTranslate(this.transloco, keyError);
          break;
        case ERROR_NAME.MIN_LENGTH:
        case ERROR_NAME.MAX_LENGTH:
          this.errorMessage = messageTranslate(this.transloco, keyError, this.ngControl.errors[keyError].requiredLength);
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
