const dialog = document.querySelector('.signup-dialog');
const closeButton = document.querySelector('.dialog-close');
const signupForm = document.querySelector('.signup-form');
const formMessage = document.querySelector('.form-message');

if (dialog) {
  window.setTimeout(() => dialog.showModal(), 650);
  closeButton?.addEventListener('click', () => dialog.close());
}

// signupForm?.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const email = new FormData(signupForm).get('email');
//   formMessage.textContent = `Thanks! ${email} has been added to the On Par community list.`;
//   signupForm.reset();
// });

