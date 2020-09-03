import { Component } from '../../core';

export class FilmListExtraContainerTemplate extends Component {
  constructor(private readonly title: string) {
    super();
  }

  getTemplate(): string {
    return `<section class="films-list--extra">
      <h2 class="films-list__title">${this.title}</h2>

      <div class="films-list__container">
        <!-- FilmCard !-->
      </div>
    </section>`.trim();
  }
}
