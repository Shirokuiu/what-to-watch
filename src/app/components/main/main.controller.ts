import { MainTemplate } from './main.template';
import { DOM } from '../../core';
import { MainFilmsContainerController, MainMenuController, MainSortController } from '..';

export class MainController {
  private mainTemplate = new MainTemplate();
  private mainMenuController: MainMenuController;
  private mainSortController: MainSortController;
  private mainFilmsContainerController: MainFilmsContainerController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const $main: HTMLElement = this.mainTemplate.getElement();

    DOM.render(this.$container, $main);

    this.mainMenuController = new MainMenuController($main);
    this.mainSortController = new MainSortController($main);
    this.mainFilmsContainerController = new MainFilmsContainerController($main);

    this.mainMenuController.init();
    this.mainSortController.init();
    this.mainFilmsContainerController.init();
  }
}
