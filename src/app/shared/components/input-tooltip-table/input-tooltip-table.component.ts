import { Component, Input} from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'kairos-input-tooltip-table',
  templateUrl: './input-tooltip-table.component.html',
  styleUrls: ['./input-tooltip-table.component.scss']
})
export class InputTooltipTableComponent {
  @Input() public id = "id";
  @Input() public maxLength = 0;
  @Input() public controlName = new FormControl();
  public errorMessage = "この項目は必須です";

  getErrorMessage() {
    if (this.controlName.invalid) {
      this.errorMessage =  this.controlName.hasError('required') ? "この項目は必須です" :
                           this.controlName.hasError('max') ? "数字" + this.controlName.errors?.['max'].max + "桁以下を入力する":
                           this.controlName.hasError('min') ?"数字" + this.controlName.errors?.['min'].min + "以上を入力する" : '';
    }
  }
}
