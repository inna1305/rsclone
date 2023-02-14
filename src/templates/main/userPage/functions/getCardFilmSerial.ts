/* eslint-disable @typescript-eslint/comma-dangle */
import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/types';
import { getDescText } from './getDescText';
import { getFavoriteElement } from './getFavoriteElement';

const getCardFavoriteFilmSerial = (film: Film): HTMLElement => {
  const card = <HTMLElement>(
    createElement('div', { class: 'card-film card-info' })
  );
  card.style.backgroundImage = `url(${film.poster})`;

  const resolution = createElement(
    'div',
    { class: 'card-film__resolution' },
    'FullHD 1080p'
  );

  const ratingImbdContainer = createElement('div', {
    class:
      'card-film__rating-container rating-card card-film__rating-container-imbd',
  });
  const ratingImbd = createElement(
    'span',
    { class: 'card-film__rating-imbd' },
    `${film.rating.toFixed(1)}`
  );
  const ratingImbdText = createElement(
    'span',
    { class: 'card-film__rating-text' },
    'IMBD'
  );
  ratingImbdContainer.append(ratingImbd, ratingImbdText);

  const ratingKpContainer = createElement('div', {
    class:
      'card-film__rating-container rating-card card-film__rating-container-kp',
  });
  const ratingKp = createElement(
    'span',
    { class: 'card-film__rating-kp' },
    `${film.rating.toFixed(1)}`
  );
  const ratingKpText = createElement(
    'span',
    { class: 'card-film__rating-text' },
    'KP'
  );
  ratingKpContainer.append(ratingKp, ratingKpText);

  const favorite = getFavoriteElement();
  favorite.classList.add('card-film__favorite');

  const ageLimit = createElement('div', { class: 'card-film__limit' }, '16+');

  const descContainer = createElement('div', {
    class: 'card-film__desc-container',
  });
  const title = createElement(
    'div',
    { class: 'card-film__desc-title card-info__title' },
    `${film.name}`
  );
  const desc = createElement(
    'div',
    { class: 'card-film__desc' },
    `${getDescText(film)}`
  );
  descContainer.append(title, desc);

  card.append(
    resolution,
    ratingImbdContainer,
    ratingKpContainer,
    favorite,
    ageLimit,
    descContainer
  );
  return card;
};

export default getCardFavoriteFilmSerial;