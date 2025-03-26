import { makeAutoObservable } from "mobx";

class PopupStore {
  feedback = false;
  service = false;
  menu = false;
  search = false;

  constructor() {
    makeAutoObservable(this);
  }

  openPopup = (type) => {
    switch (type) {
      case "feedback":
        this.feedback = true;
        break;
      case "service":
        this.service = true;
        break;
      case "menu":
        this.menu = true;
        break;
      case "search":
        this.search = true;
        break;
    }
  };

  closePopup = (type) => {
    switch (type) {
      case "feedback":
        this.feedback = false;
        break;
      case "service":
        this.service = false;
        break;
      case "menu":
        this.menu = false;
        break;
      case "search":
        this.search = false;
        break;
    }
  };
}

export default PopupStore;
