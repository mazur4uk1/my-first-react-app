function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = () => alert('Привет!');
  return button;
}

export { createButton };