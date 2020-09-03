import { FilmCardTemplate } from './film-card.template';
import { FilmModel } from '../../shared/models';
import { DOM } from '../../core';

export class FilmCardController {
  private filmCardtemplate: FilmCardTemplate;

  constructor(
    private readonly $container: HTMLElement,
    private readonly film: FilmModel
  ) {
    this.filmCardtemplate = new FilmCardTemplate(this.film);
  }

  init(): void {
    DOM.render(this.$container, this.filmCardtemplate.getElement());
  }
}
