import { render } from './shared/utils';

import {
  MainSearch,
  UserStatus,
  MainMenu,
  MainSort,
  FooterStatistic,
  MainFilmsContainer,
  FilmCard,
  ShowMore,
} from './components';
import { makeFilm } from '../data/film';

const header: HTMLElement = document.querySelector('.header') as HTMLElement;
const main: HTMLElement = document.querySelector('.main') as HTMLElement;
const footer: HTMLElement = document.querySelector('.footer') as HTMLElement;

const mainSearch = new MainSearch();
const userStatus = new UserStatus();
const mainMenu = new MainMenu();
const mainSort = new MainSort();
const footerStatistic = new FooterStatistic();

const initFilmsContent = (): void => {
  const mainFilmsContainer = new MainFilmsContainer();

  render(main, mainFilmsContainer.getElement());

  const filmsContainer: HTMLElement = main.querySelector('.films') as HTMLElement;
  const filmsExtraContainer: HTMLElement[] = Array.from(
    main.querySelectorAll('.films-list--extra')
  );

  Array(11)
    .fill('')
    .forEach(() => {
      const filmCard = new FilmCard(makeFilm());

      render(
        filmsContainer.querySelector('.films-list__container') as HTMLElement,
        filmCard.getElement()
      );
    });

  const showMore = new ShowMore();

  render(
    filmsContainer.querySelector('.films-list') as HTMLElement,
    showMore.getElement()
  );

  filmsExtraContainer.forEach((container: HTMLElement) => {
    const filmCard = new FilmCard(makeFilm());

    render(
      container.querySelector('.films-list__container') as HTMLElement,
      filmCard.getElement()
    );
  });
};

render(header, mainSearch.getElement());
render(header, userStatus.getElement());
render(main, mainMenu.getElement());
render(main, mainSort.getElement());
initFilmsContent();
render(footer, footerStatistic.getElement());
