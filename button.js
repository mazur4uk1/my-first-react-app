function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = () => alert('Привет, это улучшенная кнопка!');
  return button;
}

export { createButton };
