import { ShowMoreTemplate } from './show-more.template';
import { DOM } from '../../core';

export class ShowMoreController {
  private showMoreTemplate = new ShowMoreTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.showMoreTemplate.getElement());
  }
}
