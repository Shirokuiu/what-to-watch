import { createElement } from '../shared/utils';

export class UserStatus {
  private element: HTMLElement | undefined;

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="/assets/img/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`.trim();
  }
}
