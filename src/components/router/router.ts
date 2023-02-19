import Router from 'vanilla-router';
import setCurrentPage from '../../pages/currentPage';
import getMainPage from '../../pages/mainPage';
import getFilmPage from '../../templates/main/filmPage/filmPage';
import { getFilm } from '../../api/apiFilms';
import userPage from '../../templates/main/userPage/userPage';

const router = new Router({
  mode: 'history',
  root: '/',
  page404: function (path) {
    alert('"/' + path + '" Page not found');
  },
});
export default router;

router.add(router.root, () => {
  setCurrentPage(getMainPage());
});
router.add('/film/(:any)', async (id: string) => {
  const filmById = await getFilm(Number(id));
  if (filmById) {
    setCurrentPage(getFilmPage(filmById));
  }
});
router.add('/account', () => {
  setCurrentPage(userPage());
});
