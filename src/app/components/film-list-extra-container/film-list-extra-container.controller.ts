import { FilmListExtraContainerTemplate } from './film-list-extra-container.template';
import { DOM } from '../../core';
import { FilmModel } from '../../shared/models';
import { FilmCardController } from '..';

export class FilmListExtraContainerController {
  private filmListExtraContainerTemplate: FilmListExtraContainerTemplate;

  constructor(
    private readonly $container: HTMLElement,
    private readonly title: string,
    private films: FilmModel[]
  ) {
    this.filmListExtraContainerTemplate = new FilmListExtraContainerTemplate(this.title);
  }

  init(): void {
    const $filmsListExtra = this.filmListExtraContainerTemplate.getElement();
    const $filmsListExtraContainer = $filmsListExtra.querySelector(
      '.films-list__container'
    ) as HTMLElement;

    DOM.render(this.$container, $filmsListExtra);

    this.films.forEach((film: FilmModel) => {
      const filmCard = new FilmCardController($filmsListExtraContainer, film);

      filmCard.init();
    });
  }
}
