import { FilmModel } from './models';

export const getRandomInteger = (min: number = 0, max: number = 1): number => {
  const rand: number = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const makeFilm = (): FilmModel => ({
  poster: [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg',
  ][getRandomInteger(0, 6)],
  title: [
    'Отступники',
    'Красота по-американски',
    'Славные парни',
    'Сансет бульвар',
    'Повелитель бури',
    'Американская история Икс',
    'Хранители',
    'Красная жара',
    'На игле',
    'Апокалипсис сегодня',
    'Бегущий по лезвию',
  ][getRandomInteger(0, 10)],
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  ][getRandomInteger(0, 2)],
  rate: getRandomInteger(1, 10),
  duration: getRandomInteger(60000 * 30, 60000 * 120),
  year: getRandomInteger(1940, 2020),
  genre: ['Musical', 'Drama', 'Action', 'Adventure', 'Crime', 'Comedy'][
    getRandomInteger(0, 5)
  ],
  comments: getRandomInteger(0, 100),
  isFavorite: Boolean(Math.round(Math.random())),
  watched: Boolean(Math.round(Math.random())),
  inWatchlist: Boolean(Math.round(Math.random())),
});
