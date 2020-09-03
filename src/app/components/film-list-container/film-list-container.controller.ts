import { FilmListContainerTemplate } from './film-list-container.template';
import { DOM } from '../../core';
import { FilmModel } from '../../shared/models';
import { FilmCardController, ShowMoreController } from '..';

export class FilmListContainerController {
  private filmListContainerTemplate = new FilmListContainerTemplate();
  private showMoreController: ShowMoreController;

  constructor(
    private readonly $container: HTMLElement,
    private readonly films: FilmModel[]
  ) {}

  init(): void {
    const $filmsList = this.filmListContainerTemplate.getElement();
    const $filmsListContainer = $filmsList.querySelector(
      '.films-list__container'
    ) as HTMLElement;

    DOM.render(this.$container, $filmsList);

    this.films.forEach((film: FilmModel) => {
      const filmCardController = new FilmCardController($filmsListContainer, film);

      filmCardController.init();
    });

    this.showMoreController = new ShowMoreController($filmsList);

    this.showMoreController.init();
  }
}
