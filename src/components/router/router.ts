import Router from 'vanilla-router';
import setCurrentPage from '../../pages/currentPage';
import getMainPage from '../../pages/mainPage';
import getFilmPage from '../../templates/main/filmPage/filmPage';
import { getFilm } from '../../api/apiFilms';
import userPage from '../../templates/main/userPage/userPage';
import pagination from '../../templates/main/films/functions/pagination';
import { getUser } from '../../api/apiUsers';

const router = new Router({
  mode: 'history',
  root: '/',
  page404: function (path) {
    alert('"/' + path + '" Page not found');
  },
});
export default router;

router.add(router.root, async () => {
  setCurrentPage(await getMainPage());
});
router.add('/film/(:any)', async (id: string) => {
  document.removeEventListener('scroll', pagination);
  const filmById = await getFilm(Number(id));
  if (filmById) {
    setCurrentPage(getFilmPage(filmById));
  }
});
router.add('/account', async () => {
  if (!(await getUser())) {
    router.navigateTo(router.root);
    return;
  }
  document.removeEventListener('scroll', pagination);
  setCurrentPage(userPage());
});

