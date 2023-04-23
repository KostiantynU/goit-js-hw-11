export default class LoadMoreBtn {
  constructor({ selector, isHidden = true }) {
    this.button = this.getButton(selector);
    isHidden && this.hide();
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

  disable() {
    this.button.disabled = true;
    this.button.textContent = 'Loading...';
  }
  enable() {
    this.button.disabled = false;
    this.button.textContent = 'Load more';
  }

  hide() {
    this.button.classList.add('is-hidden');
  }
  show() {
    this.button.classList.remove('is-hidden');
  }
}
