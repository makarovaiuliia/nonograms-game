class HtmlElement {
  constructor(
    public tag: string,
    public classes?: string[],
    public content?: string,
    public id?: string
  ) {
    this.tag = tag;
    this.classes = classes;
    this.content = content;
    this.id = id;
  }

  makeHTMLElement() {
    const newElement = document.createElement(this.tag);

    if (this.id) {
      newElement.id = this.id;
    }

    if (this.classes) {
      this.classes.forEach((className) => {
        newElement.classList.add(className);
      });
    }

    if (this.content) {
      newElement.textContent = this.content;
    }
    return newElement;
  }
}

export { HtmlElement };
