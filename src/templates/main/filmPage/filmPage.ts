import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getBigElement from '../films/bigElement';

const getFilmPage = (elem: IFilmResponse): HTMLElement => {
  const container = createElement('div', { class: 'film-page' });
  //добавить компонент крошек

  const el = getBigElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
  el.classList.add('header-margin');
  container.append(el);
  return container;
};
export default getFilmPage;
