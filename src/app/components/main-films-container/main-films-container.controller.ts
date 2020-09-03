import { MainFilmsContainerTemplate } from './main-films-container.template';
import { DOM } from '../../core';
import { FilmListContainerController, FilmListExtraContainerController } from '..';
import { FilmModel } from '../../shared/models';
import { Store } from '../../../data/store';

export class MainFilmsContainerController {
  private readonly films: FilmModel[] = Store.makeFilms(12);
  private readonly filmsTopRated: FilmModel[] = Store.makeFilms(2);
  private readonly filmsMostCommented: FilmModel[] = Store.makeFilms(2);
  private mainFilmsContainerTemplate = new MainFilmsContainerTemplate();
  private filmListContainerController: FilmListContainerController;
  private filmListExtraContainerTopRatedController: FilmListExtraContainerController;
  private filmListExtraContainerMostCommentedController: FilmListExtraContainerController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const $filmContainer = this.mainFilmsContainerTemplate.getElement();

    DOM.render(this.$container, $filmContainer);

    this.filmListContainerController = new FilmListContainerController(
      $filmContainer,
      this.films
    );
    this.filmListExtraContainerTopRatedController = new FilmListExtraContainerController(
      $filmContainer,
      'Top rated',
      this.filmsTopRated
    );
    this.filmListExtraContainerMostCommentedController = new FilmListExtraContainerController(
      $filmContainer,
      'Most commented',
      this.filmsMostCommented
    );

    this.filmListContainerController.init();
    this.filmListExtraContainerTopRatedController.init();
    this.filmListExtraContainerMostCommentedController.init();
  }
}
