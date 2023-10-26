const form = document.getElementById('form');
const modalFeedback = document.getElementById('modalFeedback');
const modalBtn = document.getElementById('modalBtn');

function updatePassword2Pattern(password1) {
  form.password2.pattern = password1.value;
}

function siwtchTerminosFeedback() {
  if (form.terminos.checkValidity()) {
    modalFeedback.classList.replace('d-block', 'd-none');
    modalBtn.classList.remove('text-danger');
  } else {
    modalFeedback.classList.replace('d-none', 'd-block');
    modalBtn.classList.add('text-danger');
  }
}

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.classList.add('was-validated');
    if (!form.terminos.checkValidity()) {
      modalFeedback.classList.replace('d-none', 'd-block');
      modalBtn.classList.add('text-danger');
    }
    form.terminos.addEventListener('click', siwtchTerminosFeedback);
  } else {
    form.reset();
    form.classList.remove('was-validated');
    form.terminos.removeEventListener('click', siwtchTerminosFeedback);
    alert('Formulario enviado.');
  }
});