import { createElement } from '../shared/utils';

export class FooterStatistic {
  private element: HTMLElement | undefined;

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`.trim();
  }
}
