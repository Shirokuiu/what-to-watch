import { createElement } from '../shared/utils';

export default class ShowMore {
  private element: HTMLElement | undefined;

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<button class="films-list__show-more">Show more</button>`.trim();
  }
}
