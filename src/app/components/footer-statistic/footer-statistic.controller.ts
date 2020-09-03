import { FooterStatisticTemplate } from './footer-statistic.template';
import { DOM } from '../../core';

export class FooterStatisticController {
  private footerStatisticTemplate = new FooterStatisticTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.footerStatisticTemplate.getElement());
  }
}
