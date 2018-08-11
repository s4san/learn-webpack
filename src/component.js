export default (text = 'Hello World!') => {
  const el = document.createElement('div');

  el.textContent = text;

  return el;
};
