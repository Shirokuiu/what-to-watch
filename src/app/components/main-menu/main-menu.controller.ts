import { MainMenuTemplate } from './main-menu.template';
import { DOM } from '../../core';

export class MainMenuController {
  private mainMenuTemplate = new MainMenuTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.mainMenuTemplate.getElement());
  }
}
