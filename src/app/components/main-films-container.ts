import { createElement } from '../shared/utils';

export class MainFilmsContainer {
  private element: HTMLElement | undefined;

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">
        <!-- FilmCard !-->
      </div>

      <!-- ShowMore !-->
    </section>

    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">
        <!-- FilmCard !-->
      </div>
    </section>

    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container">
        <!-- FilmCard !-->
      </div>
    </section>
  </section>`.trim();
  }
}
