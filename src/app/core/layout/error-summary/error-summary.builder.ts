import { LayoutService } from "../../service/layout.service";
import { ErrorSummary } from "./error-summary.metadata";

export class ErrorSummaryBuilder {

  private errorSummary: ErrorSummary[];

  constructor(private layoutService: LayoutService) {
    this.errorSummary = [];
  }

  public addError(error: ErrorSummary) {
    this.errorSummary.push(error);
    return this;
  }

  public build() {
    this.layoutService.setErrorSummary(this.errorSummary);
  }
}
