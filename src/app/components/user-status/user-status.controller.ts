import { UserStatusTemplate } from './user-status.template';
import { DOM } from '../../core';

export class UserStatusController {
  private userStatusTemplate = new UserStatusTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.userStatusTemplate.getElement());
  }
}
