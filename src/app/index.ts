import { Place } from './shared/enums';
import {
  filmCard,
  footerStatistic,
  mainFilmsContainer,
  mainMenu,
  mainSearch,
  mainSort,
  showMore,
  userStatus,
} from './components';

const header: HTMLElement = document.querySelector('.header') as HTMLElement;
const main: HTMLElement = document.querySelector('.main') as HTMLElement;
const footer: HTMLElement = document.querySelector('.footer') as HTMLElement;

const render = (
  container: HTMLElement,
  component: string,
  place: Place = Place.Beforeend
): void => {
  container?.insertAdjacentHTML(place, component);
};

const initFilmsContent = (): void => {
  render(main, mainFilmsContainer());

  const filmsContainer: HTMLElement = main.querySelector('.films') as HTMLElement;
  const filmsExtraContainer: HTMLElement[] = Array.from(
    main.querySelectorAll('.films-list--extra')
  );

  render(filmsContainer.querySelector('.films-list__container') as HTMLElement, filmCard());
  render(filmsContainer.querySelector('.films-list') as HTMLElement, showMore());
  filmsExtraContainer.forEach((container: HTMLElement) => {
    render(container.querySelector('.films-list__container') as HTMLElement, filmCard());
  });
};

render(header, mainSearch());
render(header, userStatus());
render(main, mainMenu());
render(main, mainSort());
initFilmsContent();
render(footer, footerStatistic());
