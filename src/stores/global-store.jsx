import NotificationStore from "./notification-store";
import PopupStore from "./popup-store";

class GlobalStore {
  notificationStore;
  popupStore;

  constructor(notificationStore, popupStore) {
    this.notificationStore = notificationStore;
    this.popupStore = popupStore;
  }
}

const notificationStore = new NotificationStore();
const popupStore = new PopupStore();

const globalStore = new GlobalStore(notificationStore, popupStore);

export default globalStore;
