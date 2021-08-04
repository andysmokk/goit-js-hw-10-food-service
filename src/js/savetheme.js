import Theme from './theme';
import { checkboxRef } from './refs';

function saveTheme() {
  const currentTheme = localStorage.getItem('Theme');
  if (currentTheme === Theme.DARK) {
    document.body.classList.add(currentTheme);
    checkboxRef.checked = true;
  }
}

saveTheme();

export default saveTheme;
