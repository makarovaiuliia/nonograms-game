import "./blocks/index.css";
import { games, GameLevel } from "./components/nonograms";
import { HtmlElement } from "./components/base/HtmlElement"

class List {
  constructor(public itemsList: string[]) {
    this.itemsList = itemsList;
  }

  generateList(): HTMLElement {
    const list = new HtmlElement("ul", ["game__list"]).makeHTMLElement();

    this.itemsList.forEach((item) => {
      const listItem = new HtmlElement(
        "li",
        ["button", "game__button"],
        item
      ).makeHTMLElement();
      listItem.id = item;
      list.appendChild(listItem);
    });

    return list;
  }
}

class Game {
  private mainElement: HTMLElement;

  constructor() {
    this.mainElement = new HtmlElement("main", ["game"]).makeHTMLElement();
    this.initializeLayout();
  }

  initializeLayout(): void {
    const gameHeadingSection = new HtmlElement(
      "section",
      ["game__heading"],
    ).makeHTMLElement();

    const gameTitle = new HtmlElement(
      "h2",
      ["game__title"],
      "Nonograms"
    ).makeHTMLElement();
    gameHeadingSection.appendChild(gameTitle);

    const buttonContainer = new HtmlElement("div", [
      "game__button-container",
    ]).makeHTMLElement();
    gameHeadingSection.appendChild(buttonContainer);

    const bestResultsList = new HtmlElement("ul", [
      "game__list",
      "game__list-best-results",
    ]).makeHTMLElement();
    gameHeadingSection.appendChild(bestResultsList);

    const levelSection = new HtmlElement(
      "section",
      undefined,
      "",
      "level"
    ).makeHTMLElement();
    const levelList = new List(["easy", "medium", "hard"]).generateList();

    levelSection.append(levelList);

    this.mainElement.appendChild(gameHeadingSection);
    this.mainElement.appendChild(levelSection);
  }

  render(): HTMLElement {
    return this.mainElement;
  }
}

const game = new Game();
document.body.appendChild(game.render());
