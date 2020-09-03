import { HeaderTemplate } from './header.template';
import { DOM } from '../../core';
import { MainSearchController, UserStatusController } from '..';

export class HeaderController {
  private headerTemplate: HeaderTemplate = new HeaderTemplate();
  private mainSearchController: MainSearchController;
  private userStatusController: UserStatusController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const header: HTMLElement = this.headerTemplate.getElement();

    DOM.render(this.$container, header);

    this.mainSearchController = new MainSearchController(header);
    this.userStatusController = new UserStatusController(header);
    this.mainSearchController.init();
    this.userStatusController.init();
  }
}
