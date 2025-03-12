import { makeAutoObservable } from "mobx";

class NotificationStore {
  title = undefined;
  info = undefined;
  type = true;
  isVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  setNotification = (title, type, info) => {
    this.title = title;
    this.type = type;
    this.info = info;
    this.isVisible = true;

    setTimeout(() => {
      this.removeNotification();
    }, 3000);
  };

  removeNotification = () => {
    this.isVisible = false;

    setTimeout(() => {
      this.title = undefined;
      this.info = undefined;
    }, 200);
  };
}

export default NotificationStore;
