import createElement from '../../../helpers/createElement';
import handleUserAccountInput from './functions/handleUserAccountInput';
import handleClosing from './functions/handleClosing';
import closeModal from '../functions/closeModal';
import setThemeStyles from '../../themes/functions/setThemeStyles';
import openRegisterModal from './functions/openRegisterModal';

export const enum TextButtons {
  register = 'Зарегистрироваться',
  login = 'Войти',
}
const getAuthorizationModal = (): HTMLElement => {
  const container = createElement('div', { class: 'authorization modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Добро пожаловать!');
  const cross = createElement('img', { src: './assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  setThemeStyles(innerContainer);
  const text = createElement('p', { class: 'authorization__text' }, 'Введите e-mail и пароль');
  const form = createElement('form', { action: '#', class: 'authorization__form' });

  const inputEmail = createElement('input', { type: 'text', placeholder: 'vasyaPupkin@mail.com', class: 'authorization__input', id: 'email', required: '' });
  inputEmail.setAttribute('pattern', '^[\\w\\-\\.]{1,}@[\\w]{1,}\\.[a-z]{2,}$');
  const inputPassword = createElement('input', { type: 'password', placeholder: 'от 5 до 10 букв и символов \'_\' и \'-\'', class: 'authorization__input', id: 'password', required: '' });
  inputPassword.setAttribute('pattern', '^[\\w-]{5,10}$');
  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputEmail, inputPassword);

  const buttons = createElement('div', { class: 'authorization__buttons' });
  const buttonLogIn = createElement('input', 
    { 
      type: 'submit', 
      class: 'button authorization__button', 
      id: 'logIn', 
      value: `${TextButtons.login}`, 
    });
  const buttonRegister = createElement(
    'div', 
    { class: 'button authorization__button', id: 'register' },
    `${TextButtons.register}`);
  buttons.append(buttonRegister, buttonLogIn);

  form.append(inputs, buttons);
  innerContainer.append(text, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', handleClosing);
  buttonRegister.addEventListener('click', openRegisterModal);
  form.addEventListener('submit', closeModal);
  buttonLogIn.addEventListener('click', handleUserAccountInput);
  return container;
};
export default getAuthorizationModal;
