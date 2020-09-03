import { MainSortTemplate } from './main-sort.template';
import { DOM } from '../../core';

export class MainSortController {
  private mainSortTemplate = new MainSortTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.mainSortTemplate.getElement());
  }
}
