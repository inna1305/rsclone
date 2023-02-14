import closeModal from '../../functions/closeModal';

const handleClosing = (event: Event) => {
  const target = event.target as HTMLElement;
  const crossButton = document.querySelector('.close');
  const background = document.querySelector('.background') as HTMLElement;
  const registerButton = document.querySelector('#register') as HTMLElement;
  const logInButton = document.querySelector('#logIn') as HTMLElement;

  if (target === crossButton || target === background || target === registerButton || logInButton) {
    closeModal();
  }
};
export default handleClosing;