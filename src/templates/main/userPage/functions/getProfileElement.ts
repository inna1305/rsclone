/* eslint-disable @typescript-eslint/comma-dangle */
import createElement from '../../../../helpers/createElement';
import { User } from '../../../../types/types';

export const getProfileElement = (): HTMLElement => {
  const user: User = {
    id: '111865610',
    name: 'User1434523',
    email: 'bbb@sfs.ru',
    password: '',
  };
  const userData = {
    img: './assets/smallAvatar.svg',
    key: '12312314231',
  };

  const profileContainer = createElement('div', {
    class: 'profile-container',
  });

  const avatar = createElement('div', { class: 'profile__avatar' });
  const image = <HTMLImageElement>(
    createElement('img', { class: 'profile__avatar-img', alt: 'User avatar' })
  );
  image.src = userData.img;
  avatar.append(image);
  const userName = createElement(
    'div',
    { class: 'profile__name' },
    `${user.name}`
  );
  const btnEditProfile = createElement('button', { class: 'profile__edit' });
  userName.append(btnEditProfile);
  const userId = createElement(
    'div',
    { class: 'profile__id' },
    `Ваш идентификатор: ${user.id}`
  );
  const userKey = createElement(
    'div',
    { class: 'profile__key' },
    `Ключ переноса: ${userData.key}`
  );
  const userEmail = createElement(
    'div',
    { class: 'profile__email' },
    `Ваш e-mail: ${user.email}`
  );

  const bottomContainer = createElement('div', { class: 'profile__bottom' });
  const devices = createElement(
    'button',
    { class: 'profile__bottom-btn profile__devices' },
    'Мои устройства'
  );
  const imgDevices = createElement('img', {
    class: 'profile__bottom-img',
    src: './assets/device-list.png',
    alt: 'device img',
  });
  devices.prepend(imgDevices);
  const logout = createElement(
    'button',
    { class: 'profile__bottom-btn profile__logout' },
    'Выход из аккаунта'
  );
  const imgLogout = createElement('img', {
    class: 'profile__bottom-img',
    src: './assets/logout-icon.png',
    alt: 'logout img',
  });
  logout.prepend(imgLogout);
  bottomContainer.append(devices, logout);

  profileContainer.append(
    avatar,
    userName,
    userId,
    userKey,
    userEmail,
    bottomContainer
  );
  return profileContainer;
};