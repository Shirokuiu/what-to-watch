import { Component } from '../../core';

export class FilmListContainerTemplate extends Component {
  getTemplate(): string {
    return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">
        <!-- FilmCardController !-->
      </div>

      <!-- ShowMoreController !-->
    </section>`.trim();
  }
}
