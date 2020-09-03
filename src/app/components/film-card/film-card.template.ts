import { Component } from '../../core';
import { FilmModel } from '../../shared/models';

export class FilmCardTemplate extends Component {
  constructor(private readonly film: FilmModel) {
    super();
  }

  getTemplate(): string {
    const {
      title,
      rate,
      year,
      genre,
      poster,
      description,
      comments,
      inWatchlist,
      watched,
      isFavorite,
    } = this.film;

    return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rate}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="/assets/img/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${
              inWatchlist ? 'film-card__controls-item--active' : ''
            }">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${
              watched ? 'film-card__controls-item--active' : ''
            }">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${
              isFavorite ? 'film-card__controls-item--active' : ''
            }">Mark as favorite</button>
          </form>
        </article>`.trim();
  }
}
