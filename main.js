/* eslint-disable no-param-reassign */
const area = document.createElement('textarea');
area.setAttribute('id', 'area');
area.setAttribute('class', 'area');
area.setAttribute('cols', '100');
area.setAttribute('rows', '20');
document.body.append(area);

const info = document.createElement('div');
info.setAttribute('class', 'info-text');
document.body.append(info);
info.innerHTML = `Клавиатура создана в операционной системе Windows <br />
Для переключения языка комбинация: левыe Shift + Alt`;

const keyboard = document.createElement('div');
keyboard.setAttribute('class', 'keyboard');
document.body.append(keyboard);

const keyArray = [];
let language = +localStorage.getItem('language');
const array = [
  ['Backquote', '`', '~', '`', 'ё', 'Ё', 'Ё'],
  ['Digit1', '1', '!', '1', '1', '!', '1'],
  ['Digit2', '2', '@', '2', '2', '"', '2'],
  ['Digit3', '3', '#', '3', '3', '№', '3'],
  ['Digit4', '4', '$', '4', '4', ';', '4'],
  ['Digit5', '5', '%', '5', '5', '%', '5'],
  ['Digit6', '6', '^', '6', '6', ':', '6'],
  ['Digit7', '7', '&', '7', '7', '?', '7'],
  ['Digit8', '8', '*', '8', '8', '*', '8'],
  ['Digit9', '9', '(', '9', '9', '(', '9'],
  ['Digit0', '0', ')', '0', '0', ')', '0'],
  ['Minus', '-', '_', '-', '-', '_', '-'],
  ['Equal', '=', '+', '=', '=', '+', '='],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', '\t', '\t', '\t', '\t', '\t', '\t'],
  ['KeyQ', 'q', 'Q', 'Q', 'й', 'Й', 'Й'],
  ['KeyW', 'w', 'W', 'W', 'ц', 'Ц', 'Ц'],
  ['KeyE', 'e', 'E', 'E', 'у', 'У', 'У'],
  ['KeyR', 'r', 'R', 'R', 'к', 'К', 'К'],
  ['KeyT', 't', 'T', 'T', 'е', 'Е', 'Е'],
  ['KeyY', 'y', 'Y', 'Y', 'н', 'Н', 'Н'],
  ['KeyU', 'u', 'U', 'Y', 'г', 'Г', 'Г'],
  ['KeyI', 'i', 'I', 'Y', 'ш', 'Ш', 'Ш'],
  ['KeyO', 'o', 'O', 'O', 'щ', 'Щ', 'Щ'],
  ['KeyP', 'p', 'P', 'P', 'з', 'З', 'З'],
  ['BracketLeft', '[', '{', '[', 'х', 'Х', 'Х'],
  ['BracketRight', ']', '}', ']', 'ъ', 'Ъ', 'Ъ'],
  ['Backslash', '\\', '|', '\\', '\\', '/', '\\'],
  ['Delete', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'A', 'A', 'ф', 'Ф', 'Ф'],
  ['KeyS', 's', 'S', 'S', 'ы', 'Ы', 'Ы'],
  ['KeyD', 'd', 'D', 'D', 'в', 'В', 'В'],
  ['KeyF', 'f', 'F', 'F', 'а', 'А', 'А'],
  ['KeyG', 'g', 'G', 'G', 'п', 'П', 'П'],
  ['KeyH', 'h', 'H', 'H', 'р', 'Р', 'Р'],
  ['KeyJ', 'j', 'J', 'J', 'о', 'О', 'О'],
  ['KeyK', 'k', 'K', 'K', 'л', 'Л', 'Л'],
  ['KeyL', 'l', 'L', 'L', 'д', 'Д', 'Д'],
  ['Semicolon', ';', ':', ';', 'ж', 'Ж', 'Ж'],
  ['Quote', "'", '"', "'", 'э', 'Э', 'Э'],
  ['Enter', '\n', '\n', '\n', '\n', '\n', '\n'],
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'Z', 'Z', 'я', 'Я', 'Я'],
  ['KeyX', 'x', 'X', 'X', 'ч', 'Ч', 'Ч'],
  ['KeyC', 'c', 'C', 'C', 'с', 'С', 'С'],
  ['KeyV', 'v', 'V', 'V', 'м', 'М', 'М'],
  ['KeyB', 'b', 'B', 'B', 'и', 'И', 'И'],
  ['KeyN', 'n', 'N', 'N', 'т', 'Т', 'Т'],
  ['KeyM', 'm', 'M', 'M', 'ь', 'Ь', 'Ь'],
  ['Comma', ',', '<', ',', 'б', 'Б', 'Б'],
  ['Period', '.', '>', '.', 'ю', 'Ю', 'Ю'],
  ['Slash', '/', '?', '/', '.', ',', '.'],
  ['ArrowUp', '↑', '↑', '↑', '↑', '↑', '↑'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' ', ' ', ' '],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['ArrowLeft', '←', '←', '←', '←', '←', '←'],
  ['ArrowDown', '↓', '↓', '↓', '↓', '↓', '↓'],
  ['ArrowRight', '→', '→', '→', '→', '→', '→'],
];

class Key {
  constructor(value, elem) {
    this.value = value;
    this.elem = elem;
    elem.addEventListener('mousedown', () => this.activate());
    elem.addEventListener('keydown', () => this.activate());
    elem.addEventListener('mouseup', () => this.deactivate());
    elem.addEventListener('keyup', () => this.deactivate());
  }

  activate() {
    this.elem.classList.add('active');
    this.printText();
  }

  deactivate() {
    this.elem.classList.remove('active');
  }

  printText() {
    if (this.value[1] === 'Backspace' || this.value[1] === 'Del') {
      area.value = area.value.slice(0, -1);
    } else if (this.value[1] !== 'Ctrl'
            && this.value[1] !== 'Win'
            && this.value[1] !== 'Alt'
            && this.value[1] !== 'Shift'
            && this.value[1] !== 'CapsLock'
            && this.value[1] !== 'Tab'
            && this.value[1] !== 'Del') {
      area.value += this.value[language];
    }
  }
}

function keyStyle() {
  array.forEach((item) => {
    const button = document.createElement('div');
    button.setAttribute('class', 'keyboard__key');
    keyArray.push(new Key(item, button));
    switch (item[0]) {
      case 'Backspace':
        button.classList.add('keyboard__key-wider', 'keyboard__key-dark');
        break;
      case 'CapsLock':
        button.classList.add('keyboard__key-wider', 'keyboard__key-dark');
        break;
      case 'Enter':
        button.classList.add('keyboard__key-wider', 'keyboard__key-dark');
        break;
      case 'Tab':
        button.classList.add('keyboard__key-dark');
        break;
      case 'ShiftLeft':
        button.classList.add('keyboard__key-wider', 'keyboard__key-dark');
        break;
      case 'ShiftRight':
        button.classList.add('keyboard__key-dark');
        break;
      case 'Space':
        button.classList.add('keyboard__key-extra-wide');
        break;
      case 'Win':
        button.classList.add('keyboard__key-dark');
        break;
      case 'AltLeft':
        button.classList.add('keyboard__key-dark');
        break;
      case 'AltRight':
        button.classList.add('keyboard__key-dark');
        break;
      case 'Delete':
        button.classList.add('keyboard__key-dark');
        break;
      case 'ControlLeft':
        button.classList.add('keyboard__key-wide', 'keyboard__key-dark');
        break;
      case 'ControlRight':
        button.classList.add('keyboard__key-wide', 'keyboard__key-dark');
        break;
      default:
        break;
    }
    keyboard.append(button);
  });
}

function createKeyboard() {
  keyArray.forEach((item) => {
    if ((item.value[language] === '\n')) {
      item.elem.textContent = 'Enter';
    } else if ((item.value[language] === '\t')) {
      item.elem.textContent = 'Tab';
    } else if ((item.value[language] === '↑')) {
      item.elem.textContent = '▲';
    } else if ((item.value[language] === '←')) {
      item.elem.textContent = '◀';
    } else if ((item.value[language] === '↓')) {
      item.elem.textContent = '▼';
    } else if ((item.value[language] === '→')) {
      item.elem.textContent = '▶';
    } else if ((item.value[language] === ' ')) {
      item.elem.textContent = 'Space';
    } else {
      item.elem.textContent = item.value[language];
    }
  });
}

function swapLanguage() {
  if (language <= 3) {
    localStorage.setItem('language', '4');
    language = 4;
  } else {
    localStorage.setItem('language', '1');
    language = 1;
  }
}

function getKey(code) {
  let keyCode = 0;
  keyArray.forEach((item) => {
    if (item.value[0] === code) {
      keyCode = item;
    }
  });

  return keyCode;
}

function keyEvents() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const elem = getKey(event.code);
    if (elem !== 0) {
      elem.activate();
    }
    if (event.shiftKey && event.altKey) {
      swapLanguage();
      createKeyboard();
    } else if ((event.key === 'Shift') && (language === 1 || language === 3)) {
      language = 2;
      createKeyboard();
    } else if ((event.key === 'Shift') && (language === 4 || language === 6)) {
      language = 5;
      createKeyboard();
    }
    if (event.key === 'CapsLock') {
      if (language === 1 || language === 4) {
        language += 2;
      } else if (language === 3 || language === 6) {
        language -= 2;
      }
      createKeyboard();
    }
  });

  document.addEventListener('keyup', (event) => {
    const elem = getKey(event.code);
    if (elem !== 0) {
      elem.deactivate();
    }
    if ((event.key === 'Shift') && (language === 2)) {
      language = 1;
      createKeyboard();
    } else if ((event.key === 'Shift') && (language === 5)) {
      language = 4;
      createKeyboard();
    }
  });

  document.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const elem = getKey(event.code);
    if (elem !== 0) {
      elem.activate();
    }
    if (event.shiftKey && event.altKey) {
      swapLanguage();
      createKeyboard();
    } else if ((event.key === 'Shift') && (language === 1 || language === 4)) {
      language += 1;
      createKeyboard();
    } else if ((event.key === 'Shift') && (language === 5)) {
      language = 4;
      createKeyboard();
    }
    if (event.key === 'CapsLock') {
      if (language === 1 || language === 4) {
        language += 2;
      } else if (language === 3 || language === 6) {
        language -= 2;
      }
      createKeyboard();
    }
  });

  document.addEventListener('mouseup', (event) => {
    const elem = getKey(event.code);
    if (elem !== 0) {
      elem.deactivate();
    }
    if ((event.key === 'Shift') && (language === 2 || language === 5)) {
      language -= 1;
      createKeyboard();
    }
  });
}
swapLanguage();
swapLanguage();
keyStyle();
createKeyboard();
keyEvents();
