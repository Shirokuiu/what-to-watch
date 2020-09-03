import { FooterTemplate } from './footer.template';
import { DOM } from '../../core';
import { FooterStatisticController } from '..';

export class FooterController {
  private footerTemplate = new FooterTemplate();
  private footerStatistic: FooterStatisticController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const $footer = this.footerTemplate.getElement();

    DOM.render(this.$container, $footer);

    this.footerStatistic = new FooterStatisticController($footer);

    this.footerStatistic.init();
  }
}
