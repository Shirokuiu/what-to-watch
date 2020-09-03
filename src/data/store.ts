import { FilmModel } from '../app/shared/models';
import { makeFilm } from '../app/shared/utils';

export class Store {
  static makeFilms(count: number): FilmModel[] {
    return Array(count).fill('').map(makeFilm);
  }
}
