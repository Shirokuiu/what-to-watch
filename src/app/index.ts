import { Place } from './shared/enums';

const getMainSearch = (): string => `<form class="header__search search">
    <input type="text" name="search" class="search__field" placeholder="Search movies">
    <svg fill="#7171D8" class="search__film-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
      <path fill-rule="nonzero" d="M2 0v4.524h2.833V0h11.334v4.524H19V0h1v19h-1v-4.524h-2.833V19H4.833v-4.524H2V19H0V0h2zm0 7.238v4.524h2.833V7.238H2zm14.167 0v4.524H19V7.238h-2.833z"/>
    </svg>
    <button type="submit" class="visually-hidden">Search</button>
    <button class="search__reset" type="reset">Reset</button>
  </form>`;

const getUserStatus = (): string => `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="/assets/img/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

const getMainMenu = (): string => `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
  </nav>`;

const getMainSort = (): string => `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;

const getFilmsContainer = (): string => `<section class="films">
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
  </section>`;

const getFilmCard = (): string => `<article class="film-card">
          <h3 class="film-card__title">The Dance of Life</h3>
          <p class="film-card__rating">8.3</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="/assets/img/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <a class="film-card__comments">5 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`;

const getShowMore = (): string => `<button class="films-list__show-more">Show more</button>`;

const getFooterStatistic = (): string => `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`;

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
  render(main, getFilmsContainer());

  const filmsContainer: HTMLElement = main?.querySelector('.films') as HTMLElement;
  const filmsExtraContainer: HTMLElement[] = Array.from(
    main.querySelectorAll('.films-list--extra')
  );

  render(filmsContainer.querySelector('.films-list__container') as HTMLElement, getFilmCard());
  render(filmsContainer.querySelector('.films-list') as HTMLElement, getShowMore());
  filmsExtraContainer.forEach((container: HTMLElement) => {
    render(container.querySelector('.films-list__container') as HTMLElement, getFilmCard());
  });
};

render(header, getMainSearch());
render(header, getUserStatus());
render(main, getMainMenu());
render(main, getMainSort());
initFilmsContent();
render(footer, getFooterStatistic());
