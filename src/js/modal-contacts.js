(() => {
  const refs = {
    openContactsBtn: document.querySelector('[data-contact-open]'),
    closeContactsBtn: document.querySelector('[data-contact-close]'),
    contacts: document.querySelector('[data-contact]'),
  };

  refs.openContactsBtn.addEventListener('click', toggleModal);
  refs.closeContactsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.contacts.classList.toggle('is-hidden');
  }
})();
