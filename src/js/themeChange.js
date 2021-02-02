const refBody = document.querySelector('body');

const refSwitch = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refSwitch.addEventListener('change', setClassList);
refSwitch.addEventListener('change', setLocalStorage);

function setClassList(e) {
  const check = refSwitch.checked;

  if (check) {
    refBody.classList.add(Theme.DARK);
    refBody.classList.remove(Theme.LIGHT);
  } else {
    refBody.classList.add(Theme.LIGHT);
    refBody.classList.remove(Theme.DARK);
  }
}

function setLocalStorage(e) {
  const check = refSwitch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refBody.classList.add(Theme.DARK);
  refSwitch.checked = true;
}
