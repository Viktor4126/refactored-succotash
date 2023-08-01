const letters = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', String.fromCharCode(92)],
  ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', String.fromCharCode(39), 'return'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', String.fromCharCode(9650), 'shiftR'],
  ['fn', String.fromCharCode(8743), '⌥', '⌘', String.fromCharCode(160), '⌘', String.fromCharCode(9664), String.fromCharCode(9660), String.fromCharCode(9654), '⌥']];

function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  return wrapper;
}
document.body.append(createWrapper());
const wrapper = document.querySelector('.wrapper');

// ----------------------Wrapper------------^
function createContainer1() {
  const container1 = document.createElement('div');
  container1.className = 'container1';
  return container1;
}

wrapper.appendChild(createContainer1());
const container1 = document.querySelector('.container1');
// ----------------------Container1------------^

function createTexArea() {
  const containerTextArea = document.createElement('textarea');
  containerTextArea.className = 'containerTextArea';
  return containerTextArea;
}

container1.appendChild(createTexArea());
const containerTextArea = document.querySelector('.containerTextArea');
// ----------------------containerTextArea------------^

function createDiv() {
  const containerKeyBoard = document.createElement('div');
  containerKeyBoard.className = 'containerKeyBoard';
  return containerKeyBoard;
}

container1.appendChild(createDiv());
// eslint-disable-next-line no-unused-vars
const containerKeyBoard = document.querySelector('.containerKeyBoard');
// ----------------------containerKeyBoard------------^
function createText() {
  const containerText = document.createElement('div');
  containerText.className = 'containerText';
  return containerText;
}

container1.appendChild(createText());
const containerText = document.querySelector('.containerText');
containerText.textContent = 'Клавиатура создана в операционной системе macOS';
// ----------------------containerText------------^
function createText2() {
  const containerText2 = document.createElement('div');
  containerText2.className = 'containerText2';
  return containerText2;
}

container1.appendChild(createText2());
const containerText2 = document.querySelector('.containerText2');
containerText2.textContent = 'Переключения языка клавиша fn';
// ----------------------containerText2------------^

// eslint-disable-next-line no-unused-vars
function createLetter(l) {
  const span = document.createElement('span');
  span.className = 'letter';
  span.dataset.id = l;
  return span;
}
// ----------------------Letter------------^

// eslint-disable-next-line no-unused-vars
function createLine() {
  const line = document.createElement('div');
  line.className = 'line';
  return line;
}
// ----------------------Line------------^

(function createKeyboard() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < letters.length; i++) {
    containerKeyBoard.appendChild(createLine());
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < letters[i].length; j++) {
      const letter = containerKeyBoard.childNodes[i].appendChild(createLetter(letters[i][j]));
      letter.innerHTML = letters[i][j];
      if (letters[i][j] === String.fromCharCode(9650)) {
        letter.classList.add('ArrowUp');
        letter.dataset.delete = 'ArrowUp';
      }
      if (letters[i][j] === String.fromCharCode(9664)) {
        letter.classList.add('ArrowLeft');
        letter.dataset.delete = 'ArrowLeft';
      }
      if (letters[i][j] === String.fromCharCode(9660)) {
        letter.classList.add('ArrowDown');
        letter.dataset.delete = 'ArrowDown';
      }
      if (letters[i][j] === String.fromCharCode(9654)) {
        letter.classList.add('ArrowRight');
        letter.dataset.delete = 'ArrowRight';
      }
      if (letters[i][j] === 'delete') {
        letter.classList.add('delete');
        letter.dataset.delete = 'Backspace';
      }
      if (letters[i][j] === 'tab') {
        letter.classList.add('tab');
        letter.dataset.delete = 'Tab';
      }
      if (letters[i][j] === 'caps lock') {
        letter.classList.add('caps_lock');
        letter.dataset.delete = 'CapsLock';
      }
      if (letters[i][j] === 'shift') {
        letter.classList.add('shift');
        letter.dataset.delete = 'Shift';
      }
      if (letters[i][j] === 'shiftR') {
        letter.classList.add('shiftR');
        letter.dataset.delete = 'Shift';
        letter.dataset.code = 'ShiftRight';
      }
      if (letters[i][j] === String.fromCharCode(160)) {
        letter.classList.add('space');
        letter.dataset.delete = ' ';
      }
      if (letters[i][j] === 'return') {
        letter.classList.add('return');
        letter.dataset.delete = 'Enter';
      }
      if (letters[i][j] === '⌘') {
        letter.classList.add('command');
        letter.dataset.delete = 'Meta';
      }
      if (letters[i][j] === String.fromCharCode(8743)) {
        letter.classList.add('control');
        letter.dataset.delete = 'Control';
      }
      if (letters[i][j] === '⌥') {
        letter.classList.add('option');
        letter.dataset.delete = 'Alt';
      }
      if (letters[i][j] === 'fn') {
        letter.classList.add('fn');
        letter.dataset.delete = 'fn';
      }
    }
  }
}());

// ----------------------Create------------^

const dataLetters = Array.from(document.querySelectorAll('[data-id]'));

function init() {
  // eslint-disable-next-line no-use-before-define
  containerTextArea.addEventListener('keydown', keyDownHandler);
  // eslint-disable-next-line no-use-before-define
  containerTextArea.addEventListener('keyup', keyUpHandler);
}
init();

function keyDownHandler(event) {
  event.preventDefault();
  const id = dataLetters.find((x) => x.dataset.id === event.key);
  const dd = dataLetters.filter((x) => x.dataset.delete === event.key);
  const dataCode = dataLetters.find((x) => x.dataset.code === event.key);
  if (id) {
    id.classList.add('active');
  }
  if (dd.length) {
    dd.forEach((spec) => spec.classList.add('active'));
    return;
  }
  if (dataCode) {
    dataCode.classList.add('active');
  }
}

function keyUpHandler(event) {
  event.preventDefault();
  const id = dataLetters.find((x) => x.dataset.id === event.key);
  const dd = dataLetters.filter((x) => x.dataset.delete === event.key);
  const dataCode = dataLetters.find((x) => x.dataset.code === event.key);
  if (id) {
    id.classList.remove('active');
  }
  if (dd.length) {
    dd.forEach((spec) => spec.classList.remove('active'));
    return;
  }
  if (dataCode) {
    dataCode.classList.remove('active');
  }
}
